import React, { useEffect, useState } from "react";
import { GrClose } from "react-icons/gr";
import LocationIcon from "@/public/icons/Location.svg";
import Image from "next/image";
import { useTranslation } from "react-i18next";

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
  const [locationName, setLocationName] = useState("");
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  const { t } = useTranslation();
  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
  
      const scriptId = "yandex-map-script";
      let script = document.getElementById(scriptId) as HTMLScriptElement | null;
  
      if (!script) {
        script = document.createElement("script");
        script.src =
          "https://api-maps.yandex.ru/2.1/?apikey=YOUR_API_KEY&lang=en_RU";
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
      setLocationName("");
    }
  
    async function fetchLocationName(lat: number, lon: number) {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
      );
      const data = await response.json();
  
      const address = data.address;
      const shortLocationName = `${
        address.neighbourhood ||
        address.residential ||
        address.county ||
        address.city ||
        address.state ||
        ""
      } ${address.house_number || address.road || address.hamlet || ""}`;
  
      setLocationName(shortLocationName);
    }
  
    function initMap() {
      const savedCoordinates = localStorage.getItem("location_coordinates");
      const mapElement = document.getElementById("map");
    
      let center = [41.315255, 69.246486];
      let zoom = 12;
    
      if (savedCoordinates) {
        const { lat, lon } = JSON.parse(savedCoordinates);
        center = [lat, lon];
        zoom = 17;
        setLatitude(lat);
        setLongitude(lon);
        fetchLocationName(lat, lon);
      }
    
      if (mapElement && window.ymaps) {
        window.ymaps.ready(() => {
          const map = new window.ymaps.Map("map", {
            center,
            zoom,
          });
    
          const updateCenterCoordinates = () => {
            const newCenter = map.getCenter();
            setLatitude(newCenter[0]);
            setLongitude(newCenter[1]);
            fetchLocationName(newCenter[0], newCenter[1]);
          };
    
          map.events.add("boundschange", updateCenterCoordinates);
        });
      }
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

  const saveLocation = () => {
    if (latitude !== null && longitude !== null) {
      localStorage.setItem("location_name", locationName);
      localStorage.setItem(
        "location_coordinates",
        JSON.stringify({ lat: latitude, lon: longitude })
      );
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black duration-200 bg-opacity-30"
      onClick={handleOverlayClick}
    >
      <div className="bg-white relative rounded-xl shadow-lg max-w-[800px] w-full modal-enter p-4 md:p-7 mx-5">
        <h2 className="text-[20px] md:text-[24px] w-[90%] font-semibold mb-3">
          {t("location_modal_title")}
        </h2>
        <button
          onClick={onClose}
          className="text-gray-700 absolute top-3 right-4 p-[6px] duration-200 rounded-md hover:bg-[#c8c9cb55]"
        >
          <GrClose />
        </button>
        <div>
          <div className="w-full">
            <input
              className="border-2 border-gray-400 rounded-lg px-3 py-2 w-full focus:outline-none mb-5"
              type="text"
              placeholder="Manzilni kiriting..."
              defaultValue={locationName}
            />
          </div>
          <div
            id="map"
            style={{
              width: "100%",
              height: "350px",
              position: "relative",
              marginBottom: "20px",
              borderRadius: "14px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "49%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 2,
                pointerEvents: "none",
              }}
            >
              <Image
                src={LocationIcon}
                alt="location icon"
                width={60}
                height={60}
              />
            </div>
          </div>
          <button
            disabled={locationName.length === 0}
            onClick={saveLocation}
            className={`w-full text-white text-[18px] font-medium rounded-lg py-2 duration-200 ${
              locationName.length === 0
                ? "bg-[#d7d9db]"
                : "bg-mainColor active:bg-[#23b574] md:hover:bg-[#23b574]"
            }`}
          >
            {t("location_modal_button")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
