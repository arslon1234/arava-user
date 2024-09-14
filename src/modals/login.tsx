import React, { useState, useEffect } from "react";
import { GrClose } from "react-icons/gr";
import "./style.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [phone_number, setPhoneNumber] = useState("");
  const [errors, setErrors] = useState<{ phone_number: string }>({
    phone_number: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    const input: HTMLInputElement | null = document.querySelector(".input");
    if (input) {
      input.focus();
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const resetForm = () => {
    setPhoneNumber("");
    setErrors({ phone_number: "" });
    setIsSubmitted(false);
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const validatePhone = (phone_number: string): string => {
    return phone_number.length > 15
      ? ""
      : "+998 XX XXX XXXX formatida kiriting";
  };

  const validateForm = () => {
    const phonenumberError = validatePhone(phone_number);

    setErrors({ phone_number: phonenumberError });

    return !phonenumberError;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newPhoneNumber = e.target.value;

    if (!newPhoneNumber.startsWith("+998")) {
      newPhoneNumber = "+998" + newPhoneNumber.replace(/[^\d]/g, "").substring(0, 9);
    }

    newPhoneNumber = newPhoneNumber.replace(/[^\d+]/g, "");

    if (newPhoneNumber.length > 4) {
      newPhoneNumber = newPhoneNumber.slice(0, 4) + " " + newPhoneNumber.slice(4);
    }
    if (newPhoneNumber.length > 7) {
      newPhoneNumber = newPhoneNumber.slice(0, 7) + " " + newPhoneNumber.slice(7);
    }
    if (newPhoneNumber.length > 11) {
      newPhoneNumber = newPhoneNumber.slice(0, 11) + " " + newPhoneNumber.slice(11);
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
    const value = phone_number.replace(/\s+/g, "");
    if (validateForm()) {
      console.log(value);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black duration-200 bg-opacity-30"
      onClick={handleOverlayClick}
    >
      <div className="bg-white relative rounded-xl shadow-lg max-w-[350px] md:max-w-[450px] w-full modal-enter p-6 md:p-8 mx-5">
        <h2 className="text-[20px] font-semibold w-[90%] mb-4 md:mb-7">
          Telefon raqamingizni kiriting
        </h2>
        <button
          onClick={handleClose}
          className="text-gray-700 absolute top-3 right-4 p-[6px] duration-200 rounded-md hover:bg-[#c8c9cb55]"
        >
          <GrClose />
        </button>

        <form onSubmit={handleSubmit}>
          <div className="mb-4 md:mb-6 relative">
            <input
              className={`border-2 ${
                errors.phone_number
                  ? "border-red-500 focus:border-red-500"
                  : "border-gray-400"
              } input focus:border-mainColor rounded-lg md:rounded-xl py-2 px-3 w-full focus:outline-none`}
              type="text"
              placeholder="Telefon raqami"
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

          <button
            disabled={phone_number.length > 0 ? false : true}
            type="submit"
            className={`w-full h-[35px] md:h-[45px] rounded-lg md:rounded-xl duration-200 text-white md:text-[18px] font-medium ${
              phone_number === "" ?
              "bg-[#d7d9db]" : "bg-mainColor hover:bg-[#23b574]"
            }`}
          >
            Kirish
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
