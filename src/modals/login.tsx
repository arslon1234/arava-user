import React, { useState, useEffect } from "react";
import Image from "next/image";
import CancelIcon from "@/public/icons/cancel-icon.svg";
import EyeOpenIcon from "@/public/icons/eye-open-icon.svg";
import EyeCloseIcon from "@/public/icons/eye-close-icon.svg";
import "./style.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errors, setErrors] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const validateEmail = (email: string): string => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email) ? "" : "Email manzili noto‘g‘ri formatda.";
  };

  const validatePassword = (password: string): string => {
    return password.length >= 5 ? "" : "Parol kamida 5 ta belgidan iborat bo'lishi kerak.";
  };

  const validateForm = () => {
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);

    setErrors({ email: emailError, password: passwordError });

    return !emailError && !passwordError;
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    if (isSubmitted) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: validateEmail(newEmail),
      }));
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    if (isSubmitted) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: validatePassword(newPassword),
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (validateForm()) {
      console.log(e.target);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black duration-200 bg-opacity-30"
      onClick={handleOverlayClick}
    >
      <div className="bg-white relative rounded-xl shadow-lg max-w-[450px] w-full modal-enter p-5">
        <h2 className="text-[20px] font-semibold mb-7">Kirish</h2>
        <button
          onClick={onClose}
          className="text-gray-600 absolute opacity-70 top-3 right-4 p-[2px] duration-200 rounded-md hover:bg-[#e4e6ea]"
        >
          <Image width={30} height={30} src={CancelIcon} alt="cancel icon" />
        </button>

        <form onSubmit={handleSubmit}>
          <div className="mb-6 relative">
            <input
              className={`border-2 ${
                errors.email ? "border-red-500" : "border-gray-400"
              } focus:border-mainColor rounded-xl py-2 px-3 w-full focus:outline-none`}
              type="email"
              placeholder="Emailingizni kiriting..."
              value={email}
              onChange={handleEmailChange}
            />
            {errors.email && (
              <p className="absolute text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          <div className="mb-7 relative">
            <input
              className={`border-2 ${
                errors.password ? "border-red-500" : "border-gray-400"
              } focus:border-mainColor rounded-xl py-2 px-3 w-full focus:outline-none`}
              type={passwordVisible ? "text" : "password"}
              placeholder="Parolingizni kiriting..."
              value={password}
              onChange={handlePasswordChange}
            />
            <button
              type="button"
              onClick={() => setPasswordVisible(!passwordVisible)}
              className="absolute right-3 top-[9px] focus:outline-none opacity-70"
            >
              <Image
                width={25}
                height={25}
                src={passwordVisible ? EyeOpenIcon : EyeCloseIcon}
                alt={passwordVisible ? "Hide password" : "Show password"}
              />
            </button>
            {errors.password && (
              <p className="absolute left-0 text-red-500 text-sm">
                {errors.password}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full h-[45px] rounded-xl bg-mainColor hover:bg-[#23b574] duration-200 text-white text-[18px] font-medium"
          >
            Kirish
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
