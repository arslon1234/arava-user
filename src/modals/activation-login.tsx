import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { GrClose } from "react-icons/gr";
import { auth } from "../services/auth";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  phone: string;
  close: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, phone, close }) => {
  const [code, setCode] = useState<string[]>(Array(6).fill(""));
  const [errors, setErrors] = useState<string>("");
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const { t } = useTranslation();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      inputRefs.current[0]?.focus();
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const resetForm = () => {
    setCode(Array(6).fill(""));
  };

  const handleClose = () => {
    resetForm();
    close();
    onClose();
  };

  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const validateCode = (): string => {
    return code.every((digit) => digit !== "")
      ? ""
      : "Enter a valid 6-digit code";
  };

  const handleInputChange = (
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

      setErrors("");
    } else if (value === "") {
      const newCode = [...code];
      newCode[index] = "";
      setCode(newCode);
      if (index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && code[index] === "" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateCode()) {
      const value = code.join("");
      const newData = {
        phone: phone,
        activationCode: value,
      };
      const response = await auth.activate(newData)
      console.log(response);
      
      if (response?.data?.success === true) {
        handleClose();
      } else {
        setErrors("Tasdiqlashda xatolik yuz berdi!");
      }
    } else {
      setErrors(validateCode());
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center duration-200"
      onClick={handleOverlayClick}
    >
      <div className="bg-white relative z-50 rounded-xl shadow-lg max-w-[350px] md:max-w-[450px] w-full modal-enter p-6 md:p-8 mx-5">
        <h2 className="text-[20px] font-semibold w-[90%] mb-4 md:mb-7">
          {t("activate_modal_title")}
        
        </h2>
        <p>
          title
        </p>
        <button
          onClick={handleClose}
          className="text-gray-700 absolute top-3 right-4 p-[6px] duration-200 rounded-md hover:bg-[#c8c9cb55]"
        >
          <GrClose />
        </button>

        <form onSubmit={handleSubmit}>
          <div className="flex justify-center gap-2 mb-4 md:mb-6 space-x-2">
            {code.map((digit, index) => (
              <input
                key={index}
                ref={(el:any) => (inputRefs.current[index] = el)}
                type="text"
                value={digit}
                onChange={(e) => handleInputChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className={`border-2 text-center text-lg ${
                  errors ? "border-red-500" : "border-gray-400 focus:border-mainColor"
                } w-10 h-12 rounded-md focus:outline-none`}
                maxLength={1}
                inputMode="numeric"
              />
            ))}
          </div>

          <button
            disabled={code.includes("")}
            type="submit"
            className={`w-full h-[35px] md:h-[45px] rounded-lg md:rounded-xl duration-200 text-white md:text-[18px] font-medium ${
              code.includes("")
                ? "bg-[#d7d9db]"
                : "bg-mainColor hover:bg-[#23b574]"
            }`}
          >
            {t("location_modal_button")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
