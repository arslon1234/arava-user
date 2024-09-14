"use client";
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { TbTruckDelivery } from "react-icons/tb";
import { GrStar } from "react-icons/gr";
import Container from "../container";
import Restourant from "@/public/images/restourant.jpg";
import SearchIcon from "@/public/icons/search-icon.svg";
import Image from "next/image";
import Link from "next/link";

import "react-loading-skeleton/dist/skeleton.css";

const Restourants = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <section className="pb-28">
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
            placeholder="Restoran, taom va mahsulotlarni toping"
          />
        </div>
        <div className="pb-4 md:pb-5">
          {loading ? (
            <div className="h-[25px] sm:h-[35px] mb-4 sm:mb-5 lg:mb-7">
              <Skeleton
                style={{width: "230px", height: "100%"}}
              />
            </div>
          ) : (
            <h1 className="text-[28px] sm:text-[35px] lg:text-[45px] font-bold">
              Restoranlar
            </h1>
          )}
        </div>
        {loading ? (
          <div className="grid grid-cols-1 min-[470px]:grid-cols-2 md:grid-cols-3 gap-7 sm:gap-8 lg:gap-10">
            <div className="min-h-[290px]">
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
            <div className="min-h-[290px]">
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
            <div className="min-h-[290px]">
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
            <div className="min-h-[290px]">
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
            <div className="min-h-[290px]">
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
            <div className="min-h-[290px]">
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
          </div>
        ) : (
          <div className="grid grid-cols-1 min-[470px]:grid-cols-2 md:grid-cols-3 gap-7 sm:gap-8 lg:gap-10">
            <Link href="/store/id">
              <div className="min-h-[290px] flex flex-col shadow-lg rounded-2xl overflow-hidden">
                <div className="w-full h-[200px]">
                  <Image
                    src={Restourant}
                    alt="restourant"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3 flex flex-col justify-between h-[90px]">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-[22px] font-semibold leading-7 line-clamp-1">
                      Abi Exspress
                    </h3>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <TbTruckDelivery className="text-[22px] mr-2 text-mainColor" />
                      <span className="font-medium text-[14px]">10-50 min</span>
                    </div>
                    <div className="flex items-center">
                      <GrStar className="text-[22px] mr-2 text-mainColor" />
                      <span className="font-medium text-[14px]">5.0</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/store/id">
              <div className="min-h-[290px] flex flex-col shadow-lg rounded-2xl overflow-hidden">
                <div className="w-full h-[200px]">
                  <Image
                    src={Restourant}
                    alt="restourant"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3 flex flex-col justify-between h-[90px]">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-[22px] font-semibold leading-7 line-clamp-1">
                      Abi Exspress
                    </h3>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <TbTruckDelivery className="text-[22px] mr-2 text-mainColor" />
                      <span className="font-medium text-[14px]">10-50 min</span>
                    </div>
                    <div className="flex items-center">
                      <GrStar className="text-[22px] mr-2 text-mainColor" />
                      <span className="font-medium text-[14px]">5.0</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/store/id">
              <div className="min-h-[290px] flex flex-col shadow-lg rounded-2xl overflow-hidden">
                <div className="w-full h-[200px]">
                  <Image
                    src={Restourant}
                    alt="restourant"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3 flex flex-col justify-between h-[90px]">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-[22px] font-semibold leading-7 line-clamp-1">
                      Abi Exspress
                    </h3>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <TbTruckDelivery className="text-[22px] mr-2 text-mainColor" />
                      <span className="font-medium text-[14px]">10-50 min</span>
                    </div>
                    <div className="flex items-center">
                      <GrStar className="text-[22px] mr-2 text-mainColor" />
                      <span className="font-medium text-[14px]">5.0</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/store/id">
              <div className="min-h-[290px] flex flex-col shadow-lg rounded-2xl overflow-hidden">
                <div className="w-full h-[200px]">
                  <Image
                    src={Restourant}
                    alt="restourant"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3 flex flex-col justify-between h-[90px]">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-[22px] font-semibold leading-7 line-clamp-1">
                      Abi Exspress
                    </h3>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <TbTruckDelivery className="text-[22px] mr-2 text-mainColor" />
                      <span className="font-medium text-[14px]">10-50 min</span>
                    </div>
                    <div className="flex items-center">
                      <GrStar className="text-[22px] mr-2 text-mainColor" />
                      <span className="font-medium text-[14px]">5.0</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/store/id">
              <div className="min-h-[290px] flex flex-col shadow-lg rounded-2xl overflow-hidden">
                <div className="w-full h-[200px]">
                  <Image
                    src={Restourant}
                    alt="restourant"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3 flex flex-col justify-between h-[90px]">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-[22px] font-semibold leading-7 line-clamp-1">
                      Abi Exspress
                    </h3>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <TbTruckDelivery className="text-[22px] mr-2 text-mainColor" />
                      <span className="font-medium text-[14px]">10-50 min</span>
                    </div>
                    <div className="flex items-center">
                      <GrStar className="text-[22px] mr-2 text-mainColor" />
                      <span className="font-medium text-[14px]">5.0</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/store/id">
              <div className="min-h-[290px] flex flex-col shadow-lg rounded-2xl overflow-hidden">
                <div className="w-full h-[200px]">
                  <Image
                    src={Restourant}
                    alt="restourant"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3 flex flex-col justify-between h-[90px]">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-[22px] font-semibold leading-7 line-clamp-1">
                      Abi Exspress
                    </h3>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <TbTruckDelivery className="text-[22px] mr-2 text-mainColor" />
                      <span className="font-medium text-[14px]">10-50 min</span>
                    </div>
                    <div className="flex items-center">
                      <GrStar className="text-[22px] mr-2 text-mainColor" />
                      <span className="font-medium text-[14px]">5.0</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}
      </Container>
    </section>
  );
};

export default Restourants;
