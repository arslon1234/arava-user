import React, { useEffect } from "react";
import { GrClose } from "react-icons/gr";
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
  
      const scriptId = "yandex-map-script";
      let script = document.getElementById(scriptId) as HTMLScriptElement | null;
  
      if (!script) {
        script = document.createElement("script");
        script.src = "https://api-maps.yandex.ru/2.1/?apikey=YOUR_API_KEY&lang=en_RU";
        script.type = "text/javascript";
        script.async = true;
        script.id = scriptId;
        document.head.appendChild(script);
  
        script.onload = () => {
          if (window.ymaps) {
            initMap();
          }
        };
      } else {
        if (window.ymaps) {
          initMap();
        }
      }
    } else {
      document.body.style.overflow = "auto";
    }
  
    function initMap(){
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
          className="text-gray-700 absolute top-3 right-4 p-[6px] duration-200 rounded-md hover:bg-[#c8c9cb55]"
        >
          <GrClose/>
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
