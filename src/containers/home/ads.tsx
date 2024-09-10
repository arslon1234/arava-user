"use client";
import React, { useRef } from "react";
import SlickSlider from "react-slick";
import Container from "../container";
import Image from "next/image";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import Banner from "@/public/images/banner.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PrevArrow = ({ onClick }: any) => (
  <div
    className="slick-prev:before hidden md:flex slick-arrow absolute top-[40%] bg-[#fff] -left-[20px]"
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
    className="slick-next:before hidden md:flex slick-arrow absolute top-[40%] bg-[#fff] -right-[15px]"
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

function Ads() {
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

  return (
    <section className="pt-[130px] pb-16">
      <Container>
        <div>
          <SlickSlider ref={sliderRef} {...settings}>
            <div className="px-2">
              <Image src={Banner} alt="banner" className="rounded-xl" />
            </div>
            <div  className="px-2">
              <Image src={Banner} alt="banner" className="rounded-xl" />
            </div>
            <div className="px-2">
              <Image src={Banner} alt="banner" className="rounded-xl" />
            </div>
            <div className="px-2">
              <Image src={Banner} alt="banner" className="rounded-xl" />
            </div>
            <div className="px-2">
              <Image src={Banner} alt="banner" className="rounded-xl" />
            </div>
          </SlickSlider>
        </div>
      </Container>
    </section>
  );
}

export default Ads;
