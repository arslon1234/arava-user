"use client"
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { KnifeForkIcon, BoxIcon, UserIcon, OrderIcon } from "@/public/icons/icon";
import { useTranslation } from "react-i18next";

const BottomMenu = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  const { t } = useTranslation()
  if (!mounted) return null;
  return (
    <div className="fixed bottom-0 w-full bg-white shadow-[0_-5px_20px_#D7D7D766] rounded-t-3xl md:hidden px-4 z-50">
      <div className="flex items-end justify-between">
        <button onClick={() => router.push("/")} className="flex flex-col items-center gap-[1px] py-[6px] min-w-[70px]">
          <KnifeForkIcon color={pathname === "/" || pathname.slice(1, 6) === "store" ? "#0BCB76" : "#9F99A7"}/>
          <p  className={`text-[12px] ${pathname === "/" || pathname.slice(1, 6) === "store" ? "text-[#0BCB76]" : "text-[#9F99A7]"}`}>{t("bottom_menu_restaurants")}</p>
        </button>
        <button onClick={() => router.push("/cart")} className="flex flex-col items-center gap-[1px] py-[6px] min-w-[70px]">
          <BoxIcon color={pathname === "/cart" ? "#0BCB76" : "#9F99A7"}/>
          <p className={`text-[12px] ${pathname === "/cart" ? "text-[#0BCB76]" : "text-[#9F99A7]"}`}>{t("bottom_menu_cart")}</p>
        </button>
        <button onClick={() => router.push("/orders")} className="flex flex-col items-center gap-[1px] py-[6px] min-w-[70px]">
          <OrderIcon color={pathname === "/orders" ? "#0BCB76" : "#9F99A7"}/>
          <p className={`text-[12px] ${pathname === "/orders" ? "text-[#0BCB76]" : "text-[#9F99A7]"}`}>{t("bottom_menu_orders")}</p>
        </button>
        <button onClick={() => router.push("/profile-mobile")} className="flex flex-col items-center  gap-[1px] py-[6px] min-w-[70px]">
          <UserIcon color={pathname === "/profile-mobile" || pathname === "/profile-info" ? "#0BCB76" : "#9F99A7"}/>
          <p className={`text-[12px] ${pathname === "/profile-mobile" || pathname === "/profile-info" ? "text-[#0BCB76]" : "text-[#9F99A7]"}`}>{t("bottom_menu_profile")}</p>
        </button>
      </div>
    </div>
  );
};

export default BottomMenu;
