import { useRouter } from "next/navigation";
import React, { useEffect, useRef } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LogoutModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const router = useRouter()

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

  const handleClose = () => {
    onClose();
  };

  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const logOut = () => {
    router.push("/");
    localStorage.removeItem("access_token");
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black duration-200 bg-opacity-30"
      onClick={handleOverlayClick}
    >
      <div className="bg-white relative z-50 rounded-xl shadow-lg w-[350px] md:max-w-[450px] modal-enter p-6 mx-5">
        <h2 className="text-[18px] md:text-[20px] font-semibold w-[90%] mb-4 md:mb-7">
          Chiqishni xohlaysizmi?
        </h2>
        <div className="flex items-center justify-end gap-4">
          <button onClick={handleClose} className="bg-gray-200 hover:bg-gray-300 w-[60px] py-2 rounded-md duration-200">
            Yo‘q
          </button>
          <button onClick={logOut} className="bg-mainColor hover:bg-[#23b574] text-white w-[60px] py-2 rounded-md duration-200">
            Ha
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
