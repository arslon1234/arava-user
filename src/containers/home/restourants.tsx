import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { GrStar } from "react-icons/gr";
import Container from "../container";
import Restourant from "@/public/images/restourant.jpg";
import Image from "next/image";
import Link from "next/link";

const Restourants = () => {
  return (
    <section className="mb-16">
      <Container>
        <h1 className="text-[45px] font-bold mb-5">Restaurants</h1>
        <div className="grid grid-cols-3 gap-10">
          <Link href="/">
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
          <Link href="/">
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
          <Link href="/">
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
          <Link href="/">
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
          <Link href="/">
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
          <Link href="/">
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
      </Container>
    </section>
  );
};

export default Restourants;
