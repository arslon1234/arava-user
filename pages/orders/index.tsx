import React from "react";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Container from "@/src/containers/container";

const Orders = () => {
  return (
    <>
      <section className="min-h-screen pt-[90px] lg:pt-[130px]">
        <Container>
          <h1>Orders</h1>
        </Container>
      </section>
    </>
  );
};

export default Orders;

export const getStaticProps = async ({ locale }:any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});