import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Index = () => {
  return (
    <></>
  )
}

export default Index

export const getStaticProps = async ({ locale }:any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});