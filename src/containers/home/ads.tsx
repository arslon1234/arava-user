"use client";
import React, { useEffect, useRef } from "react";
import SlickSlider from "react-slick";
import Skeleton from "react-loading-skeleton";
import Container from "../container";
import Image from "next/image";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import Banner from "@/public/images/banner.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-loading-skeleton/dist/skeleton.css";

function Ads() {
  const [loading, setLoading] = React.useState(true);

  const PrevArrow = ({ onClick }: any) => (
    <div
      className={`slick-prev:before hidden slick-arrow absolute top-[40%] bg-[#fff] -left-[20px] ${
        loading ? "" : "md:flex"
      }`}
      onClick={onClick}
      style={{
        color: "#0ACC76",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1,
        cursor: "pointer",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
      }}
    >
      <div className="scale-150">
        <GrFormPrevious />
      </div>
    </div>
  );

  const NextArrow = ({ onClick }: any) => (
    <div
      className={`slick-next:before hidden slick-arrow absolute top-[40%] bg-[#fff] -right-[15px] ${
        loading ? "" : "md:flex"
      }`}
      onClick={onClick}
      style={{
        color: "#0ACC76",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1,
        cursor: "pointer",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
      }}
    >
      <div className="scale-150">
        <GrFormNext />
      </div>
    </div>
  );

  const sliderRef = useRef(null);

  const settings: any = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    draggable: true,
    swipe: true,
    leftMode: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
    ],
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <section className="pt-[100px] lg:pt-[130px] pb-7 md:pb-12 lg:pb-16">
      <Container>
        <div>
          {loading ? (
            <div className="mb-[6px]">
              <SlickSlider ref={sliderRef} {...settings}>
              <div className="px-[6px] sm:px-2">
                <div className="h-[70px] sm:h-[100px] lg:h-[140px] xl:h-[153px]">
                  <Skeleton style={{ borderRadius: "10px", height: "100%" }} />
                </div>
              </div>
              <div className="px-[6px] sm:px-2">
                <div className="h-[70px] sm:h-[100px] lg:h-[140px] xl:h-[153px]">
                  <Skeleton style={{ borderRadius: "10px", height: "100%" }} />
                </div>
              </div>
              <div className="px-[6px] sm:px-2">
                <div className="h-[70px] sm:h-[100px] lg:h-[140px] xl:h-[153px]">
                  <Skeleton style={{ borderRadius: "10px", height: "100%" }} />
                </div>
              </div>
              <div className="px-[6px] sm:px-2">
                <div className="h-[70px] sm:h-[100px] lg:h-[140px] xl:h-[153px]">
                  <Skeleton style={{ borderRadius: "10px", height: "100%" }} />
                </div>
              </div>
              <div className="px-[6px] sm:px-2">
                <div className="h-[70px] sm:h-[100px] lg:h-[140px] xl:h-[153px]">
                  <Skeleton style={{ borderRadius: "10px", height: "100%" }} />
                </div>
              </div>
              <div className="px-[6px] sm:px-2">
                <div className="h-[70px] sm:h-[100px] lg:h-[140px] xl:h-[153px]">
                  <Skeleton style={{ borderRadius: "10px", height: "100%" }} />
                </div>
              </div>
            </SlickSlider>
            </div>
          ) : (
            <SlickSlider ref={sliderRef} {...settings}>
              <div className="px-[6px] sm:px-2">
                <div className="h-[70px] sm:h-[100px] lg:h-[140px] xl:h-[153px] rounded-xl">
                  <Image
                    src={Banner}
                    alt="banner"
                    className="object-cover rounded-lg sm:rounded-xl w-full h-full"
                  />
                </div>
              </div>
              <div className="px-[6px] sm:px-2">
                <div className="h-[70px] sm:h-[100px] lg:h-[140px] xl:h-[153px] rounded-xl">
                  <Image
                    src={Banner}
                    alt="banner"
                    className="object-cover rounded-lg sm:rounded-xl w-full h-full"
                  />
                </div>
              </div>
              <div className="px-[6px] sm:px-2">
                <div className="h-[70px] sm:h-[100px] lg:h-[140px] xl:h-[153px] rounded-xl">
                  <Image
                    src={Banner}
                    alt="banner"
                    className="object-cover rounded-lg sm:rounded-xl w-full h-full"
                  />
                </div>
              </div>
              <div className="px-[6px] sm:px-2">
                <div className="h-[70px] sm:h-[100px] lg:h-[140px] xl:h-[153px] rounded-xl">
                  <Image
                    src={Banner}
                    alt="banner"
                    className="object-cover rounded-lg sm:rounded-xl w-full h-full"
                  />
                </div>
              </div>
              <div className="px-[6px] sm:px-2">
                <div className="h-[70px] sm:h-[100px] lg:h-[140px] xl:h-[153px] rounded-xl">
                  <Image
                    src={Banner}
                    alt="banner"
                    className="object-cover rounded-lg sm:rounded-xl w-full h-full"
                  />
                </div>
              </div>
            </SlickSlider>
          )}
        </div>
      </Container>
    </section>
  );
}

export default Ads;
