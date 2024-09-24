import React from "react";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Header from "@/src/components/header";
import BottomMenu from "@/src/components/bottomMenu";
import Container from "@/src/containers/container";

const Orders = () => {
  return (
    <>
      <Header />
      <section className="min-h-screen pt-[100px] lg:pt-[130px]">
        <Container>
          <h1>Orders</h1>
        </Container>
      </section>
      <BottomMenu />
    </>
  );
};

export default Orders;

export const getStaticProps = async ({ locale }:any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});