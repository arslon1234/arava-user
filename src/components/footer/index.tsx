import React from "react";
import Link from "next/link";
import { LiaInstagram, LiaTelegram, LiaFacebook } from "react-icons/lia";
import { GrApple } from "react-icons/gr";
import { FaGooglePlay } from "react-icons/fa6";
import Container from "@/src/containers/container";

const Footer = () => {
  return (
    <footer className="bg-[#F6F6FB] pt-10 pb-8">
      <Container>
        <div className="pb-10 border-b border-gray-300 flex items-start justify-between">
            <div className="flex items-center gap-5">
                <Link href="/">
                    <span className="text-gray-500">Biz haqimizda</span>
                </Link>
                <Link href="/">
                    <span className="text-gray-500">Aloqa uchun</span>
                </Link>
                <Link href="/">
                    <span className="text-gray-500">Foydalanuvchi shartnomasi</span>
                </Link>
            </div>
            <div>
                <p className="text-[20px] font-semibold mb-4">Ilovani yuklab olish</p>
                <div className="flex items-center gap-4">
                    <Link href="/" className="flex items-center gap-2 border border-gray-500 py-2 px-4 rounded-lg">
                        <GrApple className="text-[22px] text-gray-500" />
                        <p className="text-gray-500 text-[14px] font-medium">App Store</p>
                    </Link>
                    <Link href="https://play.google.com/store/apps/details?id=uz.aravva.delivery" target="_blank" className="flex items-center gap-2 border border-gray-500 py-2 px-4 rounded-lg">
                        <FaGooglePlay className="text-[22px] text-gray-500" />
                        <p className="text-gray-500 text-[14px] font-medium">Google Play</p>
                    </Link>
                </div>
            </div>
        </div>
        <div className="flex items-center justify-between pt-10">
            <div>
              <span className="text-gray-500">Tel:</span>
              <Link className="text-gray-500" href="tel:+998XXXXXXXXX">+998 XX XXX XXXX</Link>
            </div>
          <p className="text-gray-500">© 2024 «Aravva»</p>
          <div className="flex items-center gap-6">
            <Link href="/">
              <LiaInstagram className="text-[35px] hover:scale-110 duration-200 text-gray-500" />
            </Link>
            <Link href="/">
              <LiaTelegram className="text-[35px] hover:scale-110 duration-200 text-gray-500" />
            </Link>
            <Link href="/">
              <LiaFacebook className="text-[35px] hover:scale-110 duration-200 text-gray-500" />
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
