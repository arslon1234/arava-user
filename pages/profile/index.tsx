"use client";
import React, { useEffect, useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Skeleton from "react-loading-skeleton";
import { auth } from "@/src/services/auth";
import Container from "@/src/containers/container";
import LoginModal from "@/src/modals/login";
import Footer from "@/src/components/footer";
import LogoutModal from "@/src/modals/logout";

const Profile = () => {
  const [data, setData]: any = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const getData = async () => {
    setIsLoading(true);
    try {
      const res = await auth.get_info();
      setData(res?.data);
      console.log(res);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  //   const handleChange = async (e: any) => {
  //     e.preventDefault();
  //     const newData = {
  //       phone: data?.login,
  //       firstname: e.target[0].value,
  //       lastName: e.target[1].value
  //     };
  //     try {
  //       const res = await auth.login(newData);
  //       console.log(res);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };

  return (
    <div className="hidden md:block">
      <LoginModal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)} />
      <LogoutModal isOpen={isLogoutModalOpen} onClose={() => setIsLogoutModalOpen(false)}/>  
      <section className="py-[90px] lg:py-[130px]">
        <Container>
          <h1 className="text-[28px] sm:text-[35px] lg:text-[45px] font-bold mb-5">
            Profile
          </h1>
          <div className={`flex gap-40 items-start ${data.length === 0 ? "hidden" : ""}`}>
            {isLoading ? (
              <div className="w-[550px] h-[345px] mb-4">
                <Skeleton style={{ width: "100%", height: "100%", borderRadius: "24px" }} />
              </div>
            ) : (
              <div className="w-[550px] border border-gray-300 rounded-3xl p-7">
                <p className="font-bold text-[22px] mb-5">
                  Mening ma’lumotlarim
                </p>
                <div className="flex items-center justify-between mb-7">
                  <p className="text-[18px] font-medium">+{data?.login}</p>
                  <button
                    onClick={() => setIsOpenModal(true)}
                    className="py-1 px-2 rounded-md bg-black/5 hover:bg-black/10 duration-200"
                  >
                    O’zgartirish
                  </button>
                </div>
                {/* <form onSubmit={handleChange}> */}
                <div className="flex flex-col gap-4">
                  <input
                    className="w-full border-2 text-[18px] border-gray-300 duration-200 focus:border-mainColor rounded-lg md:rounded-lg py-2 px-3 outline-none"
                    type="text"
                    placeholder="Ism"
                    value={data?.firstName}
                    name="firstName"
                  />
                  <input
                    className="w-full border-2 text-[18px] border-gray-300 duration-200 focus:border-mainColor rounded-lg md:rounded-lg py-2 px-3 outline-none"
                    type="text"
                    placeholder="Familiya"
                    value={data?.lastName}
                    name="lastName"
                  />
                  <button className="w-full h-[50px] bg-mainColor rounded-lg text-[18px] font-medium text-white hover:bg-[#23b574] duration-200">
                    Saqlash
                  </button>
                </div>
                {/* </form> */}
              </div>
            )}
            <div className="w-[390px] border border-gray-300 rounded-3xl p-7 flex flex-col gap-3">
              <button className="h-[45px] bg-gray-100 w-full text-start rounded-2xl px-4">
                Mening ma’lumotlarim
              </button>
              <button className="h-[45px] hover:bg-gray-50 w-full text-start duration-200 rounded-2xl px-4">
                To‘lov kartalari
              </button>
              <button className="h-[45px] hover:bg-gray-50 w-full text-start duration-200 rounded-2xl px-4">
                Yetkazish manzili
              </button>
              <button onClick={() => setIsLogoutModalOpen(true)} className="h-[45px] hover:bg-red-50 w-full text-start text-red-500 duration-200 rounded-2xl px-4">
                Chiqish
              </button>
            </div>
          </div>
        </Container>
      </section>
      <Footer />
    </div>
  );
};

export default Profile;

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
