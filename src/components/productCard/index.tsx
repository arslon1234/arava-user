import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { FaPlus } from "react-icons/fa6";

interface CardProps {
  image: any;
  title: string;
  price: string | number;
}

const ProductCard = ({ image, title, price }: CardProps) => {
  const { t } = useTranslation()
  return (
    <div className="xl:min-w-[205px] xl:max-w-[205px] h-[270px] md:min-h-[330px] md:max-h-[330px] bg-[#F3F3F8] rounded-xl p-2">
      <div className="w-full h-[55%] mb-1 rounded-xl overflow-hidden">
        <Image width={200} height={200} className="w-full h-full object-cover" src={image} alt="image" />
      </div>
      <div className="w-full h-[45%] flex flex-col justify-between p-1">
        <div>
          <p className="text-[18px] md:text-[24px] font-semibold">
            {price.toLocaleString("fr-FR")} {t("soum")}
          </p>
          <p className="text-[16px] md:text-[18px] line-clamp-2 text-gray-600 leading-5 md:leading-6">{title}</p>
        </div>
        <button className="flex items-center gap-2 w-full shadow-[0_0_10px_#00000013] bg-white md:hover:bg-white/50 active:bg-white/50 duration-200 justify-center h-[35px] md:h-[40px] rounded-xl">
          <span>
            <FaPlus className="text-[18px] md:text-[20px]" />
          </span>
          <span className="text-[16px] md:text-[18px]">{t("add_to_cart")}</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
