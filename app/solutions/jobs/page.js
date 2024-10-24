import Header from "@/app/_components/Header";
import Headline from "@/app/_components/Headline";
import Texts from "@/app/_components/Texts";
import CardsSlider from "@/app/_components/CardsSlider";
import Values from "@/app/_components/Values";
import Team from "@/app/_components/Team";
import Testimonial from "@/app/_components/Testimonial";
import ContactAction from "@/app/_components/ContactAction";
import Footer from "@/app/_components/Footer";

export default () => {
  const items = [
    {
      title: "Visionärisch & Pragmatisch",
      description: "Wir brennen für das Potenzial und die Möglichkeiten der Digitalisierung und setzen Visionen mit einem pragmatischen Ansatz iterativ in die Tat um.",
    },
    {
      title: "Innovativ & Adaptiv",
      description: "Digitale Lösungen leben nicht nur von Innovationen sondern von Anpassungen in bestehende Strukturen und von der Fähigkeit, sich nahtlos in bestehende Prozesse einzufügen.",
    },
    {
      title: "Finanzierbar & Zugänglich",
      description: "Durch individuelle Lösungen, flexible Ressourcenzuordnung und langjährige Erfahrung machen wir digitale Lösungen für Unternehmen jeder Größe zugänglich.",
    },
  ];

  const slides = [{ image: "/cards.jpeg" }, { image: "/cards1.png" }, { image: "/cards.jpeg" }, { image: "/cards.jpeg" }, { image: "/cards.jpeg" }];

  const title = "Unsere Werte";
  const headline = "Treiber und <br/> Motivatoren.";
  const description = "Unser Fokus liegt auf der nachhaltigen Entwicklung und Optimierung von Digital-Konzepten. Dabei haben wir immer den Menschen als Hauptbestandteil der digitalen Reise im Fokus.";

  const text =
    "Wir lieben digitale Lösungen. <strong>Seit 2019 ist es unsere Mission die Digitalisierung für alle Unternehmen unabhängig der Firmengröße</strong> zugänglich <strong>und</strong> finanzierbar <strong>zu machen.</strong>";

  const teams = [
    {
      name: "name",
      title: "title",
      image: "/tobi-team.png",
    },
    {
      name: "name",
      title: "title",
      image: "/marcel-team.png",
    },
    {
      name: "name",
      title: "title",
      image: "/marcel-team.png",
    },
    {
      name: "name",
      title: "title",
      image: "/marcel-team.png",
    },
    {
      name: "name",
      title: "title",
      image: "/marcel-team.png",
    },
  ];

  return (
    <div>
      <Header />
      <Headline />
      <section className="flex flex-col gap-32 w-full pb-[256px]">
        <Texts text={text} />
        <CardsSlider slides={slides} />
        <Values title={title} headline={headline} description={description} items={items} />
        <Team teams={teams} />
        <Testimonial />
        <ContactAction page={"sol"} image={"/marcel.png"} />
      </section>
      <Footer page={"sol"} />
    </div>
  );
};
