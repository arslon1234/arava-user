import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import Image from "next/image";
import { GrDown, GrLanguage, GrLocation } from "react-icons/gr";
import { FaCheck } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import Logo from "@/public/icons/logo.png";
import SearchIcon from "@/public/icons/search-icon.svg";
import LocationModal from "@/src/modals/location";
import LoginModal from "@/src/modals/login";

export default function Header() {
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [locationName, setLocationName] = useState<string | null>(null);
  const [activated, setActivated] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  const { t, i18n } = useTranslation("common");

  useEffect(() => {
    const storedLocation = localStorage.getItem("location_name");
    if (storedLocation) {
      setLocationName(storedLocation);
    }
  }, [isLocationModalOpen]);

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    router.push(router.asPath, router.asPath, { locale: lang });
    setLanguageDropdownOpen(false);
  };

  const handleScroll = () => {
    setScrolling(window.scrollY > 20);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setLanguageDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      setActivated(true);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (languageDropdownOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [languageDropdownOpen]);

  // const token = localStorage.getItem("access_token");
  return (
    <>
      <LocationModal
        isOpen={isLocationModalOpen}
        onClose={() => setIsLocationModalOpen(false)}
      />
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />

      <header
        className={`border-b border-silver sm:pb-1 bg-[#fff] px-5 xl:px-10 fixed top-0 w-full transition-shadow duration-300 z-30 ${
          scrolling ? "shadow-[0_0_25px_0px_#00000023]" : ""
        }`}
      >
        <nav className="h-16 flex items-center justify-between gap-5 md:gap-12">
          <div className="flex items-center gap-12">
            <Link href="/">
              <div className="flex items-center gap-[10px]">
                <Image
                  className="rounded-[10px] overflow-hidden w-[45px] md:w-[50px] h-[45px] md:h-[50px]"
                  src={Logo}
                  alt="arava logo"
                />
                <p className="text-[24px] font-semibold hidden min-[1100px]:block">
                  Aravva
                </p>
              </div>
            </Link>
            <div className="h-[45px] w-auto relative hidden lg:flex items-center">
              <Image
                className="absolute opacity-50 left-3 top-3"
                src={SearchIcon}
                alt="search icon"
              />
              <input
                className="h-full rounded-l-xl pl-11 pr-5 max:w-[365px] xl:w-[365px] outline-none ring-1 ring-[#9CA3AF] focus:ring-mainColor duration-200"
                type="text"
                placeholder={t("search_placeholder")}
              />
              <button className="h-full bg-mainColor hover:bg-[#23b574] duration-200 ring-1 ring-mainColor hover:ring-[#23b574] px-3 rounded-r-xl text-white text-[18px] font-medium">
                {t("header_search_button")}
              </button>
            </div>
            <div className="hidden md:block">
              <button
                onClick={() => setIsLocationModalOpen(true)}
                className="flex items-center gap-2 h-[45px] px-4 duration-200 rounded-xl bg-[#e4e6ea] hover:bg-[#d7dadf]"
              >
                <GrLocation className="text-[20px]" />
                <p className="font-medium max-w-[130px] line-clamp-1">
                  {locationName || "Manzilingiz"}
                </p>
                <GrDown />
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsLocationModalOpen(true)}
              className="flex items-center gap-2 h-[40px] px-2 duration-200 rounded-lg bg-[#e4e6ea] lg:hover:bg-[#d7dadf]"
            >
              <GrLocation className="text-[20px]" />
              <p className="font-medium max-w-[100px] line-clamp-1 text-[14px]">
                {locationName || "Manzilingiz"}
              </p>
              <GrDown />
            </button>
          </div>

          <div className="flex items-center gap-10">
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
                className="flex flex-col items-center cursor-pointer opacity-80 lg:hover:opacity-60 duration-200"
              >
                <GrLanguage className="text-[20px]" />
                <p className="text-[14px] font-medium">
                  {i18n.language === "uz"
                    ? "Uzbek"
                    : i18n.language === "ru"
                    ? "Русский"
                    : "English"}
                </p>
              </button>

              <div
                className={`absolute top-full mt-1 md:mt-2 w-[130px] md:w-[145px] -right-[50%] bg-white flex flex-col justify-start rounded-[10px] shadow-[0_0_20px_3px_#0000001A] overflow-hidden transition-all duration-300 ease-in-out transform ${
                  languageDropdownOpen
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-5 opacity-0 pointer-events-none"
                }`}
              >
                {["uz", "ru", "en"].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => handleLanguageChange(lang)}
                    className="cursor-pointer flex items-center justify-between py-[6px] md:py-2 hover:bg-[#e4e6ea9d] duration-300 text-start px-4"
                  >
                    <span className="font-medium text-[14px] md:text-[16px]">
                      {lang === "uz"
                        ? "Uzbek"
                        : lang === "ru"
                        ? "Русский"
                        : "English"}
                    </span>
                    {i18n.language === lang && (
                      <FaCheck className="text-[14px] md:text-[16px]" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="hidden md:block">
              <button
                onClick={() => setIsLoginModalOpen(true)}
                className={`h-[45px] px-5 rounded-xl text-[18px] font-medium bg-[#e4e6ea] hover:bg-[#d7dadf] duration-200 ${activated ? "hidden" : ""}`}
              >
                {t("header_login_button")}
              </button>
              <button onClick={() => router.push("/profile")} className={activated ? "md:flex flex-col items-center hidden" : "hidden"}>
                <span>
                  <FaRegUser className="text-[22px]" />
                </span>
                <span className="font-medium text-[14px]">{t("bottom_menu_profile")}</span>
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
