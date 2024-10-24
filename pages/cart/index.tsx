"use client";
import React, { useEffect, useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";
import Container from "@/src/containers/container";
import Image from "next/image";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { FaTrashAlt } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import ProductImage from "@/public/images/product-image.jpg";

const Cart = () => {
  const { t } = useTranslation();
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Lavash", price: 40000, quantity: 1 },
    { id: 2, name: "Lavash", price: 40000, quantity: 1 },
    { id: 3, name: "Lavash", price: 40000, quantity: 1 },
    { id: 4, name: "Lavash", price: 40000, quantity: 1 },
  ]);

  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null;

  const handleIncrement = (id: number) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrement = (id: number) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const formatNumber = (num: number) => {
    return num.toLocaleString("fr-FR");
  };


  return (
    <>
      <section className="min-h-screen pt-[90px] lg:pt-[130px] md:hidden">
        <Container>
          <div className="pb-[165px]">
            <div className="pb-4 flex items-center justify-between">
              <div>
                <p className="text-[20px] font-semibold">{t("cart")}</p>
                <p className="text-gray-600">Abi Express</p>
              </div>
              <button className="flex items-center gap-1 active:bg-gray-200 duration-150 rounded-md px-2 py-1 opacity-70">
                <FaTrashAlt />
                <p className="text-[14px]">{t("delete_cart")}</p>
              </button>
            </div>
            <div className="px-1">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="w-full py-4 border-b border-gray-300 flex gap-2 items-start justify-between"
                >
                  <div className="flex gap-3 w-[55%]">
                    <div className="min-w-[60px] max-w-[60px] min-h-[60px] max-h-[60px] rounded-lg overflow-hidden">
                      <Image
                        className="object-cover w-full h-full"
                        src={ProductImage}
                        alt="image"
                      />
                    </div>
                    <div>
                      <p className="text-[15px] leading-4 line-clamp-2 mb-3 font-medium">
                        {item.name}
                      </p>
                      <div className="bg-[#e4e6ea] rounded-[15px] flex items-center">
                        <button
                          className="p-2"
                          onClick={() => handleDecrement(item.id)}
                        >
                          <FaMinus />
                        </button>
                        <span className="w-[40px] text-center">
                          {item.quantity}
                        </span>
                        <button
                          className="p-2"
                          onClick={() => handleIncrement(item.id)}
                        >
                          <FaPlus />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-[17px]">
                      {formatNumber(item.price * item.quantity)} {t("soum")}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
        <div className="w-full pt-3 pb-[75px] px-4 border-t border-gray-400 fixed bottom-0 bg-white">
          <div className="flex items-center gap-3">
            <TbTruckDelivery className="text-[20px]" />
            <p>{t("cart_delivery_title")} {formatNumber(5000)} {t("soum")}</p>
          </div>
          <button className="bg-mainColor active:bg-[#23b574] duration-150 w-full flex items-center rounded-2xl justify-between px-4 xl:px-5 h-[50px] text-white mt-3 font-medium">
            <p className="text-[16px] font-bold">{t("cart_button")}</p>
            <p className="xl:text-[20px] text-[18px] font-bold">
              {formatNumber(
                cartItems.reduce(
                  (total, item) => total + item.price * item.quantity,
                  0
                )
              )}{" "}
              {t("soum")}
            </p>
          </button>
        </div>
      </section>
    </>
  );
};

export default Cart;

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
