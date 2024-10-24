import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FiChevronRight } from "react-icons/fi";
import Container from "@/src/containers/container";
import OrdersHistoryIcon from "@/public/icons/orders-history.svg";
import PromocodesIcon from "@/public/icons/promocodes.svg";
import SupportIcon from "@/public/icons/support.svg";
import PrivacyIcon from "@/public/icons/Lock_fill.svg";
import LogOutIcon from "@/public/icons/logout.svg";
import Image from "next/image";
import LogoutModal from "@/src/modals/logout";

const Profile = ({ data }: any) => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const router = useRouter();
  return (
    <>
      <LogoutModal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)}/>
      <section className="pt-[90px] md:hidden">
        <Container>
          <button
            onClick={() => router.push("/profile-info")}
            className="w-full flex items-center justify-between mb-6"
          >
            <div className="flex flex-col items-start">
              <p className="text-[22px] font-semibold">
                {data?.firstName === "" ? "Profile" : data?.firstName}
              </p>
              <p className="font-medium opacity-60">+{data?.login}</p>
            </div>
            <FiChevronRight className="text-[28px]" />
          </button>
          <div>
            <button className="flex items-center justify-between w-full h-[75px] border-b border-gray-300">
              <div className="flex items-center gap-[10px]">
                <div className="w-[40px] h-[40px] bg-[#E9FCF3] flex items-center justify-center rounded-full">
                  <Image src={OrdersHistoryIcon} alt="orders icon" />
                </div>
                <p className="ml-[10px] text-[18px] font-medium">
                  Buyurtmalar tarixi
                </p>
              </div>
              <FiChevronRight className="text-[28px]" />
            </button>
            <button className="flex items-center justify-between w-full h-[75px] border-b border-gray-300">
              <div className="flex items-center gap-[10px]">
                <div className="w-[40px] h-[40px] bg-[#E9FCF3] flex items-center justify-center rounded-full">
                  <Image src={PromocodesIcon} alt="promocode icon" />
                </div>
                <p className="ml-[10px] text-[18px] font-medium">Promokodlar</p>
              </div>
              <FiChevronRight className="text-[28px]" />
            </button>
            <button className="flex items-center justify-between w-full h-[75px] border-b border-gray-300">
              <div className="flex items-center gap-[10px]">
                <div className="w-[40px] h-[40px] bg-[#E9FCF3] flex items-center justify-center rounded-full">
                  <Image src={SupportIcon} alt="support icon" />
                </div>
                <p className="ml-[10px] text-[18px] font-medium">
                  Qo’llab quvvatlash
                </p>
              </div>
              <FiChevronRight className="text-[28px]" />
            </button>
            <button className="flex items-center justify-between w-full h-[75px] border-b border-gray-300">
              <div className="flex items-center gap-[10px]">
                <div className="w-[40px] h-[40px] bg-[#E9FCF3] flex items-center justify-center rounded-full">
                  <Image src={PrivacyIcon} alt="support icon" />
                </div>
                <p className="ml-[10px] text-[18px] font-medium">
                  Maxfiylik va xavfsizlik
                </p>
              </div>
              <FiChevronRight className="text-[28px]" />
            </button>
            <button onClick={() => setIsOpenModal(true)} className="flex items-center justify-between w-full h-[75px] border-b border-gray-300">
              <div className="flex items-center gap-[10px]">
                <div className="w-[40px] h-[40px] bg-[#E9FCF3] flex items-center justify-center rounded-full">
                  <Image src={LogOutIcon} alt="support icon" />
                </div>
                <p className="ml-[10px] text-[18px] font-medium">Chiqish</p>
              </div>
              <FiChevronRight className="text-[28px]" />
            </button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Profile;
