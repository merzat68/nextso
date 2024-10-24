import Header from "@/app/_components/Header";
import Headline from "./Headline";
import Texts from "@/app/_components/Texts";
import Clients from "@/app/_components/home/Clients";
import ContactAction from "@/app/_components/ContactAction";
import Footer from "@/app/_components/Footer";
import WebDevelopment from "./WebDevelopment";

export default () => {
  const text =
    "<strong>Stell dir vor du schmeißt eine Party aber erzählst niemand davon - so ähnlich ist das mit einer</strong> Website <strong>ohne</strong> Marketingkonzept.<strong> Wer verbinden genau das.</strong> Aus einer Hand.";
  const clients = ["Mercedes Benz", "BMW", "Porsche", "Volkswagen"];

  return (
    <div>
      <Header />
      <Headline />
      <section className="flex flex-col gap-32 pb-[256px]">
        <Texts text={text} />
        <WebDevelopment />
        <Clients clients={clients} color={"#ffffff"} />
        <ContactAction page={"sol"} image={"/marcel.png"} />
      </section>
      <Footer page={"sol"} />
    </div>
  );
};
