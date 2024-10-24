import Link from "next/link";
import TransparentBox from "@/app/_components/3DElement";
import Clients from "@/app/_components/home/Clients.js";
import MainSplash from "@/app/_components/home/mainSplash";
import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";

export default function Home() {
  const clients = ["Mercedes Benz", "BMW", "Porsche", "Volkswagen"];

  return (
    <div>
      <TransparentBox styleConfig={"absolute w-full right-0 left-0 top-[15%] h-[450px]"} />
      <Header />
      <div className="flex flex-col gap-20 mb-12">
        <div className="flex flex-col desktop:flex-row gap-4 px-6 desktop:px-12">
          <MainSplash />
        </div>
        <div className="overflow-hidden relative py-6">
          <Clients clients={clients} color={"rgba(239, 238, 239, 1)"} />
        </div>
      </div>
      <Footer page={"home"} />
    </div>
  );
}
