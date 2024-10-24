"use client";

import React from "react";
import Link from "next/link";
import VerticalSlider from "@/app/_components/VerticalSlider";
import Title from "@/app/_components/Title";

export default function ThirdSection() {
  const slides = [
    { title: "Direkte Ansprache", content: "Verschiedene Anzeigen & Botschaften werden gleichzeitig getestet, um optimale Ergebnisse zu erzielen." },
    { title: "A/B Testing", content: "Verschiedene Anzeigen & Botschaften werden gleichzeitig getestet, um optimale Ergebnisse zu erzielen." },
    { title: "Vorqualifizierung", content: "Verschiedene Anzeigen & Botschaften werden gleichzeitig getestet, um optimale Ergebnisse zu erzielen." },
    { title: "Live-Chat", content: "Verschiedene Anzeigen & Botschaften werden gleichzeitig getestet, um optimale Ergebnisse zu erzielen." },
    { title: "Bewerbermanagement", content: "Verschiedene Anzeigen & Botschaften werden gleichzeitig getestet, um optimale Ergebnisse zu erzielen." },
  ];

  return (
    <div className="px-12">
      <div className="flex flex-col items-center justify-center gap-32 px-36">
        <div className="flex flex-col items-center gap-8">
          <Title title={"Tools"} type={"rec"} />
          <div>
            <h1 className="text-soDigital-grey-700 text-center text-[80px] font-bold leading-[105%]">Finden, statt suchen.</h1>
          </div>
          <div>
            <p className="w-[576px] text-soDigital-grey-700 text-center text-xl font-normal leading-[140%]">
              Rund 81% der Gesamtbevölkerung* sind auf Social Media vertreten und trotzdem kommunizieren Unternehmen und potenzielle Kandidat*innen auf unterschiedlichen Plattformen häufig aneinander
              vorbei.
            </p>
          </div>
        </div>
        <VerticalSlider slides={slides} />
      </div>
    </div>
  );
}
