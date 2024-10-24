import React, { useEffect, useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Container from "@/src/containers/container";
import { auth } from "@/src/services/auth";

const Profile = () => {
  const [data, setData]: any = useState([]);
  const getInfo = async () => {
    try {
      const res = await auth.get_info();
      setData(res?.data);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getInfo();
  }, []);
  return (
    <section className="pt-[90px] md:hidden">
      <Container>
        <h1 className="text-[26px] font-bold mb-5">Mening ma’lumotlarim</h1>
        <div className="flex items-center justify-between mb-5">
          <p>+{data?.login}</p>
          <button
            // onClick={() => setIsOpenModal(true)}
            className="py-1 px-2 rounded-md bg-gray-200 active:bg-gray-300 duration-150"
          >
            O’zgartirish
          </button>
        </div>
        <div className="flex flex-col gap-4">
          <input
            className="w-full border-2 border-gray-300 duration-200 focus:border-mainColor rounded-lg md:rounded-lg py-2 px-3 outline-none"
            type="text"
            placeholder="Ism"
            value={data?.firstName}
            name="firstName"
          />
          <input
            className="w-full border-2 border-gray-300 duration-200 focus:border-mainColor rounded-lg md:rounded-lg py-2 px-3 outline-none"
            type="text"
            placeholder="Familiya"
            value={data?.lastName}
            name="lastName"
          />
        </div>
        <div className="w-full pb-[75px] pr-8 fixed bottom-0 bg-white">
          <button className="w-full rounded-2xl bottom-0 h-[50px] bg-mainColor text-[18px] font-medium text-white active:bg-[#23b574] duration-200">
            Saqlash
          </button>
        </div>
      </Container>
    </section>
  );
};

export default Profile;

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});