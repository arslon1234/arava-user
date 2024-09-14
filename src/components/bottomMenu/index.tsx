import React from "react";
import { KnifeForkIcon, BoxIcon, UserIcon } from "@/public/icons/icon";

const BottomMenu = () => {
  return (
    <div className="sticky bottom-0 bg-white shadow-[0_-5px_20px_#D7D7D766] rounded-t-2xl md:hidden px-5 z-50">
      <div className="flex items-end justify-between">
        <button className="flex flex-col items-center gap-[3px] py-2 w-[100px]">
          <KnifeForkIcon color={"#0BCB76"}/>
          <p className="text-[14px] text-[#0BCB76]">Buyurtmalar</p>
        </button>
        <button className="flex flex-col items-center gap-[3px] py-2 w-[100px]">
          <BoxIcon color={"#9F99A7"}/>
          <p className="text-[14px] text-[#9F99A7]">Restoranlar</p>
        </button>
        <button className="flex flex-col items-center  gap-[3px] py-2 w-[100px]">
          <UserIcon color={"#9F99A7"}/>
          <p className="text-[14px] font-medium text-[#9F99A7]">Profil</p>
        </button>
      </div>
    </div>
  );
};

export default BottomMenu;
