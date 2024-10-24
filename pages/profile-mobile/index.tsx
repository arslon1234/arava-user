import React, { useEffect, useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Login from "@/src/containers/profile-mobile/login";
import Profile from "@/src/containers/profile-mobile/profile";
import { auth } from "@/src/services/auth";

const ProfileMobile = () => {
  const [data, setData] = useState([]);
  const [activated, setActivated] = useState(false);
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
  }, [])
  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      setActivated(true);
    }
  }, [])
  return <>{activated ? <Profile data={data}/> : <Login />}</>;
};

export default ProfileMobile;

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});