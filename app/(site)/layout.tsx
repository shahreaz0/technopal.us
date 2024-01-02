import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Lines from "@/components/Lines";
import ScrollToTop from "@/components/ScrollToTop";

import ToasterContext from "../context/ToastContext";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Lines />
      <Header />
      <ToasterContext />
      {children}
      <Footer />
      <ScrollToTop />
    </>
  );
}
