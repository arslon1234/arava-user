import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { GrClose } from "react-icons/gr";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import AutrStore from "@/src/store/auth";
import ActivateModal from "@/src/modals/activation-login";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [showActivateModal, setShowActivateModal] = useState(false);
  const [phone_number, setPhoneNumber] = useState("");
  const [errors, setErrors] = useState<{ phone_number: string }>({
    phone_number: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { t } = useTranslation();
  const { sign_in, isLoading } = AutrStore();

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

  const phone = phone_number.replace(/[^\d]/g, "");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
    const newData = {
      phone: phone,
    };
    if (validateForm()) {
      try {
        await sign_in(newData);
        setShowActivateModal(true);
      } catch (err) {
        
        console.error(err);
      }
    }
  };

  return (
    <>
      <ActivateModal
        isOpen={showActivateModal}
        close={() => setShowActivateModal(false)}
        onClose={onClose}
        phone={phone}
      />
      <div
        className="fixed inset-0 z-40 flex items-center justify-center bg-black duration-200 bg-opacity-30"
        onClick={handleOverlayClick}
      >
        <div className="bg-white relative rounded-xl shadow-lg max-w-[350px] md:max-w-[450px] w-full modal-enter p-6 md:p-8 mx-5">
          <h2 className="text-[20px] font-semibold w-[90%] mb-4 md:mb-7">
            {t("login_modal_title")}
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
                } input focus:border-mainColor rounded-lg md:rounded-lg py-2 px-3 w-full focus:outline-none`}
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

            <button
              disabled={phone_number.length === 0 || isLoading}
              type="submit"
              className={`w-full h-[35px] md:h-[45px] flex items-center justify-center rounded-lg md:rounded-2xl duration-200 text-white md:text-[18px] font-bold ${
                phone_number === ""
                  ? "bg-[#c5c7c9] cursor-not-allowed"
                  : "bg-mainColor hover:bg-[#23b574]"
              }`}
            >
              {isLoading ? (
                <AiOutlineLoading3Quarters className="text-[20px] animate-spin" />
              ) : (
                t("header_login_button")
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Modal;
