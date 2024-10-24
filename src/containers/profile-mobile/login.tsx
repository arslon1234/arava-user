"use client";
import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import Container from "@/src/containers/container";
import { auth } from "@/src/services/auth";

const Login = () => {
  const [phone_number, setPhoneNumber] = useState("");
  const [errors, setErrors] = useState<{ phone_number: string; code: string }>({
    phone_number: "",
    code: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isCodeStep, setIsCodeStep] = useState(false);
  const [code, setCode] = useState<string[]>(Array(6).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const { t } = useTranslation();
  const router = useRouter();
  const validatePhone = (phone_number: string): string => {
    return phone_number.length === 16
      ? ""
      : "+998 XX XXX XXXX formatida kiriting";
  };
  const validateCode = (): string => {
    return code.every((digit) => digit !== "")
      ? ""
      : "6 xonali tasdiqlash kodini kiriting";
  };
  const validateForm = () => {
    const phoneNumberError = validatePhone(phone_number);
    setErrors({ ...errors, phone_number: phoneNumberError });
    return !phoneNumberError;
  };
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newPhoneNumber = e.target.value;
    if (!newPhoneNumber.startsWith("+998")) {
      newPhoneNumber =
        "+998" + newPhoneNumber.replace(/[^\d]/g, "").substring(0, 9);
    }
    newPhoneNumber = newPhoneNumber.replace(/[^\d+]/g, "");

    if (newPhoneNumber.length > 4) {
      newPhoneNumber =
        newPhoneNumber.slice(0, 4) + " " + newPhoneNumber.slice(4);
    }
    if (newPhoneNumber.length > 7) {
      newPhoneNumber =
        newPhoneNumber.slice(0, 7) + " " + newPhoneNumber.slice(7);
    }
    if (newPhoneNumber.length > 11) {
      newPhoneNumber =
        newPhoneNumber.slice(0, 11) + " " + newPhoneNumber.slice(11);
    }
    setPhoneNumber(newPhoneNumber);
    if (isSubmitted) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phone_number: validatePhone(newPhoneNumber),
      }));
    }
  };
  const handleCodeChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length === 1) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);
      if (index < 5 && value) {
        inputRefs.current[index + 1]?.focus();
      }
      setErrors({ ...errors, code: "" });
    } else if (value === "") {
      const newCode = [...code];
      newCode[index] = "";
      setCode(newCode);
      if (index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    }
  };
  const phone = phone_number.replace(/[^\d]/g, "");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
    const newData = {
      phone: phone,
    };
    if (validateForm()) {
      setIsLoading(true);
      try {
        const response = await auth.login(newData);
        if (response.data.success === true) {
          setIsCodeStep(true);
        }
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    }
  };
  const getToken = async () => {
    const value = code.join("");
    const newData = {
      username: phone,
      password: value,
    };
    const res = await auth.get_token(newData);
    if (res.status === 200) {
      localStorage.setItem("access_token", res.data.access_token);
      window.location.reload();
    }
  };
  const handleCodeSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const codeError = validateCode();
    const newData = {
      phone: phone,
      activationCode: code.join(""),
    };
    if (!codeError) {
      setIsLoading(true);
      try {
        const response = await auth.activate(newData);
        if (response.data.success === true) {
          getToken()
        } else {
          setErrors({ ...errors, code: response.data.message });
        }
      } catch (e) {
        setErrors({ ...errors, code: "Error" });
      } finally {
        setIsLoading(false);
      }
    } else {
      setErrors({ ...errors, code: codeError });
    }
  };
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <>
      <section className="md:hidden min-h-screen pt-[90px] lg:pt-[130px]">
        <Container>
          <div className="mb-7">
            <h1 className="text-[32px] font-semibold mb-3">
              {t("profile_title")}
            </h1>
            <p className="text-[18px] text-gray-500 font-medium">
              {isCodeStep ? t("profile_text2") : t("profile_text")}
            </p>
          </div>
          {!isCodeStep ? (
            <form id="form" onSubmit={handleSubmit}>
              <div className="relative">
                <input
                  className={`border-2 ${
                    errors.phone_number
                      ? "border-red-500 focus:border-red-500"
                      : "border-gray-400"
                  } focus:border-mainColor text-[18px] font-medium rounded-lg md:rounded-xl py-2 px-3 w-full focus:outline-none`}
                  type="text"
                  placeholder={t("login_modal_phone_number")}
                  value={phone_number}
                  onChange={handlePhoneChange}
                  maxLength={16}
                />
                {errors.phone_number && (
                  <p className="absolute text-red-500 text-[13px]">
                    {errors.phone_number}
                  </p>
                )}
              </div>
            </form>
          ) : (
            <form id="code-form" onSubmit={handleCodeSubmit}>
              <div className="flex justify-center gap-2 mb-4 md:mb-6 space-x-2">
                {code.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el: any) => (inputRefs.current[index] = el)}
                    type="text"
                    value={digit}
                    onChange={(e) => handleCodeChange(e, index)}
                    className={`border-2 text-center text-lg focus:border-mainColor font-medium ${
                      errors.code ? "border-red-500" : "border-gray-400"
                    } w-10 h-12 rounded-md focus:outline-none`}
                    maxLength={1}
                    inputMode="numeric"
                  />
                ))}
              </div>
            </form>
          )}
        </Container>

        <div className="w-full pb-[75px] px-6 fixed bottom-0 bg-white">
          <button
            form={isCodeStep ? "code-form" : "form"}
            className={`w-full h-[45px] rounded-2xl flex items-center justify-center duration-200 text-[16px] text-white font-bold ${
              (!isCodeStep && phone_number === "") ||
              (isCodeStep && code.includes("")) ||
              isLoading
                ? "bg-[#c5c7c9]"
                : "bg-mainColor active:bg-[#23b574]"
            }`}
            disabled={
              (!isCodeStep && phone_number === "") ||
              (isCodeStep && code.includes("")) ||
              isLoading
            }
          >
            {isLoading ? (
              <AiOutlineLoading3Quarters className="text-[20px] animate-spin" />
            ) : isCodeStep ? (
              t("location_modal_button")
            ) : (
              t("profile_title")
            )}
          </button>
        </div>
      </section>
    </>
  );
};

export default Login;
