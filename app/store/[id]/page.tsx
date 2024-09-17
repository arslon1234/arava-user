"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import { IoIosArrowBack } from "react-icons/io";
import { MdOutlineStar } from "react-icons/md";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { ImInfo } from "react-icons/im";
import { TbTruckDelivery } from "react-icons/tb";
import Container from "@/src/containers/container";
import Footer from "@/src/components/footer";
import ProductCard from "@/src/components/productCard";
import ProductImage from "@/public/images/product-image.jpg";

import "react-loading-skeleton/dist/skeleton.css";

const Index = () => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      <section className="pt-[100px] lg:pt-[130px]">
        <Container>
          <div className="flex items-start justify-between gap-10 lg:gap-14">
            <div className="w-full md:w-[72%] pb-16 md:pb-20">
              <button
                onClick={() => router.back()}
                className="flex items-center gap-1 text-gray-500 font-medium mb-4 md:mb-8"
              >
                <span>
                  <IoIosArrowBack />
                </span>
                <span>Orqaga</span>
              </button>
              {loading ? (
                <div className="w-full h-[260px] sm:h-[300px] md:h-[340px] lg:h-[380px] mb-10">
                  <Skeleton
                    height="100%"
                    width="100%"
                    style={{ borderRadius: "24px" }}
                  />
                </div>
              ) : (
                <div className="w-full sm:h-[300px] h-[260px] md:h-[340px] lg:h-[380px] mb-10 bg-no-repeat overflow-hidden bg-cover rounded-3xl bg-[url('/images/restourant.jpg')]">
                  <div className="w-full h-full bg-[#000]/35 flex flex-col justify-end p-4 md:p-8 lg:p-10">
                    <h2 className="text-[30px] md:text-[40px] font-bold text-white mb-4">
                      Abi Express
                    </h2>
                    <div className="flex items-center gap-5">
                      <button className="bg-[#fff]/90 h-[35px] md:h-[45px] flex items-center gap-2 px-2 md:px-3 rounded-xl">
                        <MdOutlineStar className="text-[26px] md:text-[30px]" />
                        <span className="text-[18px] md:text-[20px]">4.7</span>
                      </button>
                      <button className="bg-[#fff]/90 h-[35px] md:h-[45px] flex items-center gap-2 px-2 md:px-3 rounded-xl">
                        <ImInfo className="text-[24px] md:text-[30px]" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
              <div>
                {loading ? (
                  <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                    <div className="xl:w-[205px] h-[270px] md:h-[330px]">
                      <Skeleton
                        style={{ borderRadius: "12px" }}
                        height="100%"
                        width="100%"
                      />
                    </div>
                    <div className="xl:w-[205px] h-[270px] md:h-[330px]">
                      <Skeleton
                        style={{ borderRadius: "12px" }}
                        height="100%"
                        width="100%"
                      />
                    </div>
                    <div className="xl:w-[205px] h-[270px] md:h-[330px]">
                      <Skeleton
                        style={{ borderRadius: "12px" }}
                        height="100%"
                        width="100%"
                      />
                    </div>
                    <div className="xl:w-[205px] h-[270px] md:h-[330px]">
                      <Skeleton
                        style={{ borderRadius: "12px" }}
                        height="100%"
                        width="100%"
                      />
                    </div>
                    <div className="xl:w-[205px] h-[270px] md:h-[330px]">
                      <Skeleton
                        style={{ borderRadius: "12px" }}
                        height="100%"
                        width="100%"
                      />
                    </div>
                    <div className="xl:w-[205px] h-[270px] md:h-[330px]">
                      <Skeleton
                        style={{ borderRadius: "12px" }}
                        height="100%"
                        width="100%"
                      />
                    </div>
                    <div className="xl:w-[205px] h-[270px] md:h-[330px]">
                      <Skeleton
                        style={{ borderRadius: "12px" }}
                        height="100%"
                        width="100%"
                      />
                    </div>
                    <div className="xl:w-[205px] h-[270px] md:h-[330px]">
                      <Skeleton
                        style={{ borderRadius: "12px" }}
                        height="100%"
                        width="100%"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                    <ProductCard
                      image={ProductImage}
                      title="Lavash"
                      price={40000}
                    />
                    <ProductCard
                      image={ProductImage}
                      title="Lavash"
                      price={40000}
                    />
                    <ProductCard
                      image={ProductImage}
                      title="Lavash"
                      price={40000}
                    />
                    <ProductCard
                      image={ProductImage}
                      title="Lavash"
                      price={40000}
                    />
                    <ProductCard
                      image={ProductImage}
                      title="Lavash"
                      price={40000}
                    />
                    <ProductCard
                      image={ProductImage}
                      title="Lavash"
                      price={40000}
                    />
                    <ProductCard
                      image={ProductImage}
                      title="Lavash"
                      price={40000}
                    />
                    <ProductCard
                      image={ProductImage}
                      title="Lavash"
                      price={40000}
                    />
                  </div>
                )}
              </div>
            </div>
            {loading ? (
              <div className="bg-[#fff] hidden md:block w-[28%] h-[600px] rounded-3xl overflow-hidden sticky top-[130px]">
                <Skeleton width="100%" height="100%" />
              </div>
            ) : (
              <div className="bg-[#fff] w-[28%] hidden md:block h-[600px] overflow-hidden border border-gray-300 rounded-3xl sticky top-[130px]">
                <div className="md-3 sticky top-0 bg-white w-full p-3">
                  <p className="text-[26px] font-semibold">Savat</p>
                </div>
                <div className="overflow-y-auto h-[540px] px-4">
                  <div className="w-full py-4 border-b border-gray-300 flex flex-col lg:flex-row gap-2 items-start justify-between">
                    <div className="flex gap-2 w-[55%]">
                      <div className="min-w-[60px] max-w-[60px] min-h-[60px] max-h-[60px] rounded-lg overflow-hidden">
                        <Image
                          className="object-cover w-full h-full"
                          src={ProductImage}
                          alt="image"
                        />
                      </div>
                      <div>
                        <p className="text-[15px] leading-4 line-clamp-2 mb-3 font-medium">
                          Lavash
                        </p>
                        <div className="bg-[#e4e6ea] rounded-[15px] flex items-center">
                          <button className="p-2">
                            <FaMinus />
                          </button>
                          <span className="w-[40px] text-center">1</span>
                          <button className="p-2">
                            <FaPlus />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="texy-[17px]">40000 so`m</p>
                    </div>
                  </div>
                  <div className="w-full py-4 border-b border-gray-300 flex flex-col lg:flex-row gap-2 items-start justify-between">
                    <div className="flex gap-2 w-[55%]">
                      <div className="min-w-[60px] max-w-[60px] min-h-[60px] max-h-[60px] rounded-lg overflow-hidden">
                        <Image
                          className="object-cover w-full h-full"
                          src={ProductImage}
                          alt="image"
                        />
                      </div>
                      <div>
                        <p className="text-[15px] leading-4 line-clamp-2 mb-3 font-medium">
                          Lavash
                        </p>
                        <div className="bg-[#e4e6ea] rounded-[15px] flex items-center">
                          <button className="p-2">
                            <FaMinus />
                          </button>
                          <span className="w-[40px] text-center">1</span>
                          <button className="p-2">
                            <FaPlus />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="texy-[17px]">40000 so`m</p>
                    </div>
                  </div>
                  <div className="w-full py-4 border-b border-gray-300 flex flex-col lg:flex-row gap-2 items-start justify-between">
                    <div className="flex gap-2 w-[55%]">
                      <div className="min-w-[60px] max-w-[60px] min-h-[60px] max-h-[60px] rounded-lg overflow-hidden">
                        <Image
                          className="object-cover w-full h-full"
                          src={ProductImage}
                          alt="image"
                        />
                      </div>
                      <div>
                        <p className="text-[15px] leading-4 line-clamp-2 mb-3 font-medium">
                          Lavash
                        </p>
                        <div className="bg-[#e4e6ea] rounded-[15px] flex items-center">
                          <button className="p-2">
                            <FaMinus />
                          </button>
                          <span className="w-[40px] text-center">1</span>
                          <button className="p-2">
                            <FaPlus />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="texy-[17px]">40000 so`m</p>
                    </div>
                  </div>
                </div>
                <div className="w-full p-3 border sticky bottom-0 bg-white">
                  <div className="flex items-center gap-3">
                    <TbTruckDelivery className="text-[20px]" />
                    <p>Yetkazib berish 5000 so`m</p>
                  </div>
                  <button className="bg-mainColor hover:bg-[#23b574] duration-200 w-full flex flex-col lg:flex-row items-center rounded-xl justify-between px-4 xl:px-5 py-2 xl:py-3 text-white mt-3 font-medium">
                    <p className="text-[14px] xl:text-[16px]">To`lov uchun</p>
                    <p className="xl:text-[20px] text-[18px]">40000 so`m</p>
                  </button>
                </div>
              </div>
            )}
          </div>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default Index;
