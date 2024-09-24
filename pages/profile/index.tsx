"use client";
import React, { useState } from "react";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Header from "@/src/components/header";
import BottomMenu from "@/src/components/bottomMenu";
import Container from "@/src/containers/container";

const Cart = () => {
  const [name, setName] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [errors, setErrors] = useState<{ name: string; phone_number: string }>({
    name: "",
    phone_number: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validatePhone = (phone_number: string): string => {
    return phone_number.length === 16
      ? ""
      : "+998 XX XXX XXXX formatida kiriting";
  };

  const validateName = (name: string): string => {
    return name.length >= 3 ? "" : "Ismingizni kiriting (kamida 3 ta belgi)";
  };

  const validateForm = () => {
    const nameError = validateName(name);
    const phonenumberError = validatePhone(phone_number);

    setErrors({ name: nameError, phone_number: phonenumberError });

    return !nameError && !phonenumberError;
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value;
    setName(newName);

    if (isSubmitted) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: validateName(newName),
      }));
    }
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (validateForm()) {
      const formattedPhoneNumber = phone_number.replace(/\s+/g, "");
      const formData = {
        name: name,
        phone_number: formattedPhoneNumber,
      };
      console.log(formData);
    }
  };

  return (
    <>
      <Header />
      <section className="min-h-screen pt-[100px] lg:pt-[130px]">
        <Container>
          <form id="form" onSubmit={handleSubmit}>
            <div className="mb-6 relative">
              <input
                type="text"
                placeholder="Ismingiz"
                className={`border-2 ${
                  errors.name
                    ? "border-red-500 focus:border-red-500"
                    : "border-gray-400"
                } focus:border-mainColor rounded-lg md:rounded-xl py-2 px-3 w-full focus:outline-none`}
                value={name}
                onChange={handleNameChange}
              />
              {errors.name && (
                <p className="absolute text-red-500 text-[13px]">
                  {errors.name}
                </p>
              )}
            </div>

            <div className="relative">
              <input
                className={`border-2 ${
                  errors.phone_number
                    ? "border-red-500 focus:border-red-500"
                    : "border-gray-400"
                } focus:border-mainColor rounded-lg md:rounded-xl py-2 px-3 w-full focus:outline-none`}
                type="text"
                placeholder="Telefon raqamingiz"
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
        </Container>

        <div className="w-full pb-[75px] px-6 fixed bottom-0 bg-white">
          <button
            disabled={name === "" || phone_number === ""}
            form="form"
            className={`w-full h-[40px] rounded-lg md:rounded-xl duration-200 text-white md:text-[18px] font-medium ${
              name === "" || phone_number === ""
                ? "bg-[#d7d9db]"
                : "bg-mainColor active:bg-[#23b574]"
            }`}
          >
            Kirish
          </button>
        </div>
      </section>
      <BottomMenu />
    </>
  );
};

export default Cart;

export const getStaticProps = async ({ locale }:any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});