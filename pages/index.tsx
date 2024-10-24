import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Ads from "@/src/containers/home/ads"
import Restourants from "@/src/containers/home/restourants";
import Footer from "@/src/components/footer";
export default function Home() {
  return (
    <>
      <Ads />
      <Restourants />
      <Footer />
    </>
  );
}
export const getStaticProps = async ({ locale }:any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});