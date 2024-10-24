import Header from "@/app/_components/Header";
import Headline from "@/app/_components/Headline";
import FirstSection from "@/app/_components/recruiters/MainSections";
import SecondSection from "@/app/_components/recruiters/SecondSection";
import ThirdSection from "@/app/_components/recruiters/ThirdSection";
import FourthSection from "@/app/_components/FourthSection";
import Values from "@/app/_components/Values";
import SixthSection from "@/app/_components/recruiters/SixthSection";
import Testimonial from "@/app/_components/Testimonial";
import ContactAction from "@/app/_components/ContactAction";
import Footer from "@/app/_components/Footer";

export default () => {
  const items = [
    {
      title: "Human Resources - Effektive Prozesse!",
      description:
        "Individuelle Anforderungen und flexible Vertragsmodelle haben bei uns Vorrang vor starren Laufzeitvereinbarungen. Eine Bindung an halb- oder ganzjährige Laufzeiten entfällt vollständig.",
    },
    {
      title: "Personalabteilung - Stellen besetzen!",
      description: "Flexible und faire Preismodelle machen unsere Lösungen sowohl für große Unternehmen als auch für kleine Betriebe zugänglich.",
    },
    {
      title: "Marketingabteilung - Arbeitgebermarke stärken!",
      description: "Klare Preisstrukturen bieten Budgettransparenz ohne versteckte Kosten. Keine Provision auf Werbebudget, alle Ausgaben sind im Daten-Dashboard zu jeder Zeit einsehbar.",
    },
  ];

  const title = "Werte";
  const headline = "360 Grad <br/> Support";
  const description = "Keine komplizierten Vertragsbedingungen, versteckten Kosten oder undurchsichtigen Prozesse. Wir setzen auf Transparenz und Menschlichkeit in einer digitalen Welt.";

  return (
    <div>
      <Header />
      <Headline />
      <section className="flex flex-col gap-32 w-full pb-[256px]">
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <Values title={title} headline={headline} description={description} items={items} />
        <SixthSection />
        <Testimonial />
        <ContactAction page={"rec"} image={"/tobi.png"} />
      </section>
      <Footer page={"rec"} />
    </div>
  );
};
