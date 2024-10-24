"use client";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import { TbTruckDelivery } from "react-icons/tb";
import { GrStar } from "react-icons/gr";
import Container from "../container";
import SearchIcon from "@/public/icons/search-icon.svg";
import NoImage from "@/public/images/no-image.png"

import "react-loading-skeleton/dist/skeleton.css";

import BranchStore from "@/src/store/branchs";

const Restourants = () => {
  const [mounted, setMounted] = useState(false)
  const { getBranchs, isLoading, branches } = BranchStore();
  useEffect(() => {
    getBranchs();
  }, []);
  
  const { t } = useTranslation();
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="pb-14 md:pb-24">
      <Container>
        <div className="w-full relative flex items-center mb-4 lg:hidden">
          <Image
            className="absolute opacity-50 left-3 top-2"
            src={SearchIcon}
            alt="search icon"
          />
          <input
            className="h-full py-[10px] rounded-lg pl-11 pr-5 w-full outline-none ring-1 ring-[#9CA3AF] focus:ring-mainColor duration-200"
            type="text"
            placeholder={t("search_placeholder")}
          />
        </div>

        <div className="pb-4 md:pb-5">
          {isLoading ? (
            <div className="h-[25px] sm:h-[35px] mb-4 sm:mb-5 lg:mb-7">
              <Skeleton style={{ width: "230px", height: "100%" }} />
            </div>
          ) : (
            <h1 className="text-[28px] sm:text-[35px] lg:text-[45px] font-bold">
              {t("restaurants")}
            </h1>
          )}
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 min-[470px]:grid-cols-2 md:grid-cols-3 gap-7 sm:gap-8 lg:gap-10">
            {[...Array(6)].map((_, i) => (
              <div className="min-h-[290px]" key={i}>
                <div className="h-[200px] mb-[12px]">
                  <Skeleton
                    style={{
                      height: "100%",
                      width: "100%",
                      borderRadius: "16px 16px 0 0",
                    }}
                  />
                </div>
                <Skeleton
                  style={{
                    marginLeft: "12px",
                    width: "50%",
                    height: "20px",
                    marginBottom: "17px",
                  }}
                />
                <div className="px-3">
                  <Skeleton />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 min-[470px]:grid-cols-2 md:grid-cols-3 gap-7 sm:gap-8 lg:gap-10">
            {branches?.map((item, index: number) => (
              <Link key={index} href={`/store/${item.id}`}>
                <div className="min-h-[290px] flex flex-col shadow-lg rounded-2xl overflow-hidden">
                  <div className="w-full h-[200px]">
                    <Image
                      width={600}
                      height={400}
                      src={item.imageUrl && item.imageUrl !== 'false' ? `https://webtest.aravva.uz${item.imageUrl}` : NoImage}
                      alt="restaurant"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-3 flex flex-col justify-between h-[90px]">
                    <div className="flex flex-col gap-1">
                      <h3 className="text-[22px] font-semibold leading-7 line-clamp-1">
                        {item.name}
                      </h3>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <TbTruckDelivery className="text-[22px] mr-2 text-mainColor" />
                        <span className="font-medium text-[14px]">
                          10-50 min
                        </span>
                      </div>
                      <div className="flex items-center">
                        <GrStar className="text-[22px] mr-2 text-mainColor" />
                        <span className="font-medium text-[14px]">5.0</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
};

export default Restourants;
