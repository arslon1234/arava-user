import React, { useEffect, useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Container from "@/src/containers/container";
import { auth } from "@/src/services/auth";
import { Toaster, toast } from "react-hot-toast";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Profile = () => {
  const [data, setData]: any = useState([]);
  const [isButtonLoading, setIsButtonLoading] = useState(false);
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

  const handleChange = async (e: any) => {
    e.preventDefault();
    const newData = {
      firstName: e.target[0].value,
      lastName: e.target[1].value,
    };
    setIsButtonLoading(true);
    try {
      await auth.update_info(newData);
      toast.success("Malumotlaringiz yangilandi!");
    } catch (err) {
      console.error(err);
    } finally {
      setIsButtonLoading(false);
    }
  };
  return (
    <>
      <Toaster />
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
          <form onSubmit={handleChange}>
            <div className="flex flex-col gap-4">
              <input
                className="w-full border-2 border-gray-300 duration-200 focus:border-mainColor rounded-lg md:rounded-lg py-2 px-3 outline-none"
                type="text"
                placeholder="Ism"
                defaultValue={data?.firstName}
                name="firstName"
              />
              <input
                className="w-full border-2 border-gray-300 duration-200 focus:border-mainColor rounded-lg md:rounded-lg py-2 px-3 outline-none"
                type="text"
                placeholder="Familiya"
                defaultValue={data?.lastName}
                name="lastName"
              />
            </div>
            <div className="w-full pb-[75px] pr-8 fixed bottom-0 bg-white">
              <button
                disabled={isButtonLoading}
                className="w-full rounded-2xl bottom-0 flex items-center justify-center h-[50px] bg-mainColor text-[18px] font-medium text-white active:bg-[#23b574] duration-200"
              >
                {isButtonLoading ? (
                  <AiOutlineLoading3Quarters className="text-[20px] animate-spin" />
                ) : (
                  "Saqlash"
                )}
              </button>
            </div>
          </form>
        </Container>
      </section>
    </>
  );
};

export default Profile;

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
