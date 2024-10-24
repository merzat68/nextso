import TransparentBox from "@/app/_components/3DElement";
import Header from "@/app/_components/Header";
import "@/app/_styles/globals.scss";
import Footer from "./_components/Footer";

export const metadata = {
  title: {
    default: "Sodigital",
    template: "%s | Sodigital",
    description: "sodigital is a digital company in Germany",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#efeeef] overflow-x-hidden relative">
        <TransparentBox styleConfig={"absolute top-[15%] w-[800px] left-0 right-0 m-auto h-[800px]"} />
        <Header />
        <main className="max-w-[1536px] m-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
