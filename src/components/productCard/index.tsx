import React from "react";
import Image from "next/image";
import { FaPlus } from "react-icons/fa6";

interface CardProps {
  image: any;
  title: string;
  price: string | number;
}

const ProductCard = ({ image, title, price }: CardProps) => {
  return (
    <div className="xl:min-w-[205px] xl:max-w-[205px] h-[300px] md:min-h-[340px] md:max-h-[340px] bg-[#F3F3F8] rounded-xl p-2">
      <div className="w-full h-[55%] mb-1 rounded-xl overflow-hidden">
        <Image className="w-full h-full object-cover" src={image} alt="image" />
      </div>
      <div className="w-full h-[45%] flex flex-col justify-between p-1">
        <div>
          <p className="text-[20px] md:text-[24px] font-semibold">
            {price.toLocaleString()} so`m
          </p>
          <p className="text-[18px] line-clamp-1 md:line-clamp-2 text-gray-600">{title}</p>
        </div>
        <button className="flex items-center gap-2 w-full shadow-[0_0_10px_#00000013] bg-white hover:bg-white/50 duration-200 justify-center h-[40px] rounded-xl">
          <span>
            <FaPlus className="text-[20px]" />
          </span>
          <span className="text-[18px]">Qo`shish</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
