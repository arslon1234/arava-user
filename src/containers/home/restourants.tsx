"use client";
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { TbTruckDelivery } from "react-icons/tb";
import { GrStar } from "react-icons/gr";
import Container from "../container";
import Restourant from "@/public/images/restourant.jpg";
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
    <section className="mb-28">
      <Container>
        <div className="pb-5">
          {loading ? (
            <Skeleton style={{ height: "40px", width: "300px", marginBottom: "20px" }} />
          ) : (
            <h1 className="text-[45px] font-bold">Restoranlar</h1>
          )}
        </div>
        {loading ? (
          <div className="grid grid-cols-3 gap-10">
            <div className="min-h-[330px] w-[394px]">
              <Skeleton
                style={{
                  minHeight: 200,
                  width: "100%",
                  borderRadius: "16px 16px 0 0",
                  marginBottom: "10px",
                }}
              />
              <Skeleton
                style={{
                  marginLeft: "12px",
                  width: "50%",
                  height: "20px",
                  marginBottom: "8px",
                }}
              />
              <Skeleton
                style={{
                  marginLeft: "12px",
                  width: "40%",
                  marginBottom: "25px",
                }}
              />
              <div className="px-3">
                <Skeleton style={{  }} />
              </div>
            </div>
            <div className="min-h-[330px] w-[394px]">
              <Skeleton
                style={{
                  minHeight: 200,
                  width: "100%",
                  borderRadius: "16px 16px 0 0",
                  marginBottom: "10px",
                }}
              />
              <Skeleton
                style={{
                  marginLeft: "12px",
                  width: "50%",
                  height: "20px",
                  marginBottom: "8px",
                }}
              />
              <Skeleton
                style={{
                  marginLeft: "12px",
                  width: "40%",
                  marginBottom: "25px",
                }}
              />
              <div className="px-3">
                <Skeleton style={{  }} />
              </div>
            </div>
            <div className="min-h-[330px] w-[394px]">
              <Skeleton
                style={{
                  minHeight: 200,
                  width: "100%",
                  borderRadius: "16px 16px 0 0",
                  marginBottom: "10px",
                }}
              />
              <Skeleton
                style={{
                  marginLeft: "12px",
                  width: "50%",
                  height: "20px",
                  marginBottom: "8px",
                }}
              />
              <Skeleton
                style={{
                  marginLeft: "12px",
                  width: "40%",
                  marginBottom: "25px",
                }}
              />
              <div className="px-3">
                <Skeleton style={{  }} />
              </div>
            </div>
            <div className="min-h-[330px] w-[394px]">
              <Skeleton
                style={{
                  minHeight: 200,
                  width: "100%",
                  borderRadius: "16px 16px 0 0",
                  marginBottom: "10px",
                }}
              />
              <Skeleton
                style={{
                  marginLeft: "12px",
                  width: "50%",
                  height: "20px",
                  marginBottom: "8px",
                }}
              />
              <Skeleton
                style={{
                  marginLeft: "12px",
                  width: "40%",
                  marginBottom: "25px",
                }}
              />
              <div className="px-3">
                <Skeleton style={{  }} />
              </div>
            </div>
            <div className="min-h-[330px] w-[394px]">
              <Skeleton
                style={{
                  minHeight: 200,
                  width: "100%",
                  borderRadius: "16px 16px 0 0",
                  marginBottom: "10px",
                }}
              />
              <Skeleton
                style={{
                  marginLeft: "12px",
                  width: "50%",
                  height: "20px",
                  marginBottom: "8px",
                }}
              />
              <Skeleton
                style={{
                  marginLeft: "12px",
                  width: "40%",
                  marginBottom: "25px",
                }}
              />
              <div className="px-3">
                <Skeleton style={{  }} />
              </div>
            </div>
            <div className="min-h-[330px] w-[394px]">
              <Skeleton
                style={{
                  minHeight: 200,
                  width: "100%",
                  borderRadius: "16px 16px 0 0",
                  marginBottom: "10px",
                }}
              />
              <Skeleton
                style={{
                  marginLeft: "12px",
                  width: "50%",
                  height: "20px",
                  marginBottom: "8px",
                }}
              />
              <Skeleton
                style={{
                  marginLeft: "12px",
                  width: "40%",
                  marginBottom: "25px",
                }}
              />
              <div className="px-3">
                <Skeleton style={{  }} />
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-10">
            <Link href="/store/id">
              <div className="min-h-[330px] flex flex-col shadow-lg rounded-2xl overflow-hidden">
                <div className="w-full h-[200px]">
                  <Image
                    src={Restourant}
                    alt="restourant"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3 flex flex-col justify-between h-[130px]">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-[24px] font-semibold leading-7 line-clamp-1">
                      Abi Exspress
                    </h3>
                    <p className="text-[18px] line-clamp-1 opacity-65">
                      Restoran
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <TbTruckDelivery className="text-[24px] mr-2 text-mainColor" />
                      <span className="font-medium">10-50 min</span>
                    </div>
                    <div className="flex items-center">
                      <GrStar className="text-[24px] mr-2 text-mainColor" />
                      <span className="font-medium">5.0</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/store/id">
              <div className="min-h-[330px] flex flex-col shadow-lg rounded-2xl overflow-hidden">
                <div className="w-full h-[200px]">
                  <Image
                    src={Restourant}
                    alt="restourant"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3 flex flex-col justify-between h-[130px]">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-[24px] font-semibold leading-7 line-clamp-1">
                      Abi Exspress
                    </h3>
                    <p className="text-[18px] line-clamp-1 opacity-65">
                      Restoran
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <TbTruckDelivery className="text-[24px] mr-2 text-mainColor" />
                      <span className="font-medium">10-50 min</span>
                    </div>
                    <div className="flex items-center">
                      <GrStar className="text-[24px] mr-2 text-mainColor" />
                      <span className="font-medium">5.0</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/store/id">
              <div className="min-h-[330px] flex flex-col shadow-lg rounded-2xl overflow-hidden">
                <div className="w-full h-[200px]">
                  <Image
                    src={Restourant}
                    alt="restourant"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3 flex flex-col justify-between h-[130px]">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-[24px] font-semibold leading-7 line-clamp-1">
                      Abi Exspress
                    </h3>
                    <p className="text-[18px] line-clamp-1 opacity-65">
                      Restoran
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <TbTruckDelivery className="text-[24px] mr-2 text-mainColor" />
                      <span className="font-medium">10-50 min</span>
                    </div>
                    <div className="flex items-center">
                      <GrStar className="text-[24px] mr-2 text-mainColor" />
                      <span className="font-medium">5.0</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/store/id">
              <div className="min-h-[330px] flex flex-col shadow-lg rounded-2xl overflow-hidden">
                <div className="w-full h-[200px]">
                  <Image
                    src={Restourant}
                    alt="restourant"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3 flex flex-col justify-between h-[130px]">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-[24px] font-semibold leading-7 line-clamp-1">
                      Abi Exspress
                    </h3>
                    <p className="text-[18px] line-clamp-1 opacity-65">
                      Restoran
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <TbTruckDelivery className="text-[24px] mr-2 text-mainColor" />
                      <span className="font-medium">10-50 min</span>
                    </div>
                    <div className="flex items-center">
                      <GrStar className="text-[24px] mr-2 text-mainColor" />
                      <span className="font-medium">5.0</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/store/id">
              <div className="min-h-[330px] flex flex-col shadow-lg rounded-2xl overflow-hidden">
                <div className="w-full h-[200px]">
                  <Image
                    src={Restourant}
                    alt="restourant"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3 flex flex-col justify-between h-[130px]">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-[24px] font-semibold leading-7 line-clamp-1">
                      Abi Exspress
                    </h3>
                    <p className="text-[18px] line-clamp-1 opacity-65">
                      Restoran
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <TbTruckDelivery className="text-[24px] mr-2 text-mainColor" />
                      <span className="font-medium">10-50 min</span>
                    </div>
                    <div className="flex items-center">
                      <GrStar className="text-[24px] mr-2 text-mainColor" />
                      <span className="font-medium">5.0</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/store/id">
              <div className="min-h-[330px] flex flex-col shadow-lg rounded-2xl overflow-hidden">
                <div className="w-full h-[200px]">
                  <Image
                    src={Restourant}
                    alt="restourant"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3 flex flex-col justify-between h-[130px]">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-[24px] font-semibold leading-7 line-clamp-1">
                      Abi Exspress
                    </h3>
                    <p className="text-[18px] line-clamp-1 opacity-65">
                      Restoran
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <TbTruckDelivery className="text-[24px] mr-2 text-mainColor" />
                      <span className="font-medium">10-50 min</span>
                    </div>
                    <div className="flex items-center">
                      <GrStar className="text-[24px] mr-2 text-mainColor" />
                      <span className="font-medium">5.0</span>
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
