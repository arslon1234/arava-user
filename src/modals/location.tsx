import React, { useEffect } from "react";
import Image from "next/image";
import CancelIcon from "@/public/icons/cancel-icon.svg";
import "./style.css";

declare global {
  interface Window {
    ymaps: any;
  }
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    const scriptId = "yandex-map-script";
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;

    if (!script) {
      script = document.createElement("script");
      script.src = "https://api-maps.yandex.ru/2.1/?apikey=YOUR_API_KEY&lang=en_RU";
      script.type = "text/javascript";
      script.async = true;
      script.id = scriptId;
      document.head.appendChild(script);
    }

    const initMap = () => {
      const mapElement = document.getElementById("map");
      if (mapElement && window.ymaps) {
        window.ymaps.ready(() => {
          new window.ymaps.Map("map", {
            center: [41.315255, 69.246486],
            zoom: 12,
          });
        });
      }
    };

    script.onload = () => {
      if (window.ymaps) {
        initMap();
      }
    };

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black duration-200 bg-opacity-30"
      onClick={handleOverlayClick}
    >
      <div className="bg-white relative rounded-xl shadow-lg max-w-[800px] w-full modal-enter p-5">
        <h2 className="text-[24px] font-semibold mb-1 p-2">
          Yetkazish manzilini koʻrsating
        </h2>
        <button
          onClick={onClose}
          className="text-gray-600 absolute opacity-70 top-3 right-4 p-[2px] duration-200 rounded-md hover:bg-[#e4e6ea]"
        >
          <Image width={30} height={30} src={CancelIcon} alt="cancel icon" />
        </button>

        <div>
          <div className="w-full px-2">
            <input
              className="border-2 border-gray-400 rounded-md p-2 w-full focus:outline-none mb-5"
              type="text"
              placeholder="Manzilni kiriting..."
            />
          </div>
          <div id="map" style={{ width: "100%", height: "400px" }} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
