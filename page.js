import Link from "next/link";
import Clients from "./_components/home/Clients";
import MainSplash from "./_components/home/mainSplash";

export default function Home() {
  const clients = ["Mercedes Benz", "BMW", "Porsche", "Volkswagen"];

  return (
    <div>
      <div className="flex flex-col gap-20 mb-12">
        <div className="flex flex-col desktop:flex-row gap-4 px-6 desktop:px-12">
          <MainSplash />
        </div>
        <div className="overflow-hidden relative py-6">
          <Clients clients={clients} />
        </div>
      </div>
    </div>
  );
}
