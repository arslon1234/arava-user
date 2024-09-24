import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Header from "@/src/components/header";
import Ads from "@/src/containers/home/ads"
import Restourants from "@/src/containers/home/restourants";
import Footer from "@/src/components/footer";
import BottomMenu from '@/src/components/bottomMenu';
export default function Home() {
  return (
    <>
      <Header />
      <Ads />
      <Restourants />
      <Footer />
      <BottomMenu />
    </>
  );
}
export const getStaticProps = async ({ locale }:any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});