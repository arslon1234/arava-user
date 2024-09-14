"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { GrDown, GrLanguage, GrLocation } from "react-icons/gr";
import { FaCheck } from "react-icons/fa6";
import Logo from "@/public/icons/logo.png";
import SearchIcon from "@/public/icons/search-icon.svg";
import LocationModal from "@/src/modals/location";
import LoginModal from "@/src/modals/login";

const Header: React.FC = () => {
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

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

  return (
    <>
      <LocationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      <header
        className={`border-b border-silver pt-2 sm:pb-1 bg-[#fff] px-5 xl:px-10 fixed top-0 w-full transition-shadow duration-300 z-40 ${
          scrolling ? "shadow-[0_0_25px_0px_#00000023]" : ""
        }`}
      >
        <nav className="h-16 flex items-center justify-between gap-5 md:gap-12">
          <div className="flex items-center gap-12">
            <Link href="/">
              <div className="flex items-center gap-[10px]">
                <Image
                  className="rounded-[10px] overflow-hidden w-[40px] md:w-[50px] h-[40px] md:h-[50px]"
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
                placeholder="Restoran, taom va mahsulotlarni toping"
              />
              <button className="h-full bg-mainColor hover:bg-[#23b574] duration-200 ring-1 ring-mainColor hover:ring-[#23b574] px-3 rounded-r-xl text-white text-[18px] font-medium">
                Topish
              </button>
            </div>
            <div className="hidden md:block">
              <button
                onClick={() => setIsModalOpen(true)}
                className="flex items-center gap-2 h-[45px] px-4 duration-200 rounded-xl bg-[#e4e6ea] hover:bg-[#d7dadf]"
              >
                <div className="text-[20px]">
                  <GrLocation />
                </div>
                <p className="font-medium">Manzilingiz</p>
                <GrDown />
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 h-[35px] px-2 duration-200 rounded-lg bg-[#e4e6ea] hover:bg-[#d7dadf]"
            >
              <div className="text-[20px]">
                <GrLocation />
              </div>
              <p className="font-medium text-[14px]">Manzilingiz</p>
              <GrDown />
            </button>
          </div>

          <div className="flex items-center gap-10">
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
                className="flex flex-col items-center cursor-pointer hover:opacity-60 duration-200"
              >
                <div className="text-[18px] md:text-[20px]">
                  <GrLanguage />
                </div>
                <p className="text-[12px] md:text-[14px] font-medium">Uzbek</p>
              </button>
              <div
                className={`absolute top-full mt-1 md:mt-2 w-[130px] md:w-[145px] -right-[50%] bg-white flex flex-col justify-start rounded-[10px] shadow-[0_0_20px_3px_#0000001A] overflow-hidden transition-all duration-300 ease-in-out transform ${
                  languageDropdownOpen
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-5 opacity-0 pointer-events-none"
                }`}
              >
                <button className="cursor-pointer flex items-center justify-between py-[6px] md:py-2 hover:bg-[#e4e6ea9d] duration-300 text-start px-4">
                  <span className="font-medium text-[14px] md:text-[16px]">Uzbek</span>
                  <span className="text-[14px] md:text-[16px]">
                    <FaCheck />
                  </span>
                </button>
                <button className="cursor-pointer flex items-center justify-between py-[6px] md:py-2 hover:bg-[#e4e6ea9d] duration-300 text-start px-4">
                  <span className="font-medium text-[14px] md:text-[16px]">Русский</span>
                </button>
                <button className="cursor-pointer flex items-center justify-between py-[6px] md:py-2 hover:bg-[#e4e6ea9d] duration-300 text-start px-4">
                  <span className="font-medium text-[14px] md:text-[16px]">English</span>
                </button>
              </div>
            </div>
            <div className="hidden md:block">
              <button
                onClick={() => setIsLoginOpen(true)}
                className="h-[45px] px-5 rounded-xl text-[18px] font-medium bg-[#e4e6ea] hover:bg-[#d7dadf] duration-200"
              >
                Kirish
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
