"use client";

import React from "react";
import Link from "next/link";
import CircularCarousel from "@/app/_components/recruiters/RoundedSlider";
import Clients from "@/app/_components/home/Clients";
import Title from "@/app/_components/Title";

export default function SecondSection() {
  const clients = ["Benz", "Lamborghini", "Acura", "Honda"];
  return (
    <div className="flex flex-col items-center justify-center gap-32 py-32">
      <div className="flex flex-col items-center gap-8">
        <Title title={"Referenzen"} type={"rec"} />
        <div>
          <h1 className="text-soDigital-grey-700 text-center text-[80px] font-bold leading-[105%]">Ansprechend.</h1>
          <h1 className="text-soDigital-grey-700 text-center text-[80px] font-bold leading-[105%]">Mit Reichweite.</h1>
        </div>
      </div>
      <div className="flex flex-col gap-0 items-center w-full">
        <CircularCarousel />
        <div className="w-[576px] px-12">
          <p className="self-stretch text-soDigital-grey-600 text-center text-xl font-normal leading-[140%]">
            Mit Fokus auf Mensch, Vertrauen und Storytelling bauen wir gemeinsam deine Recruiting Kampagne individuell und authentisch. Mit der Qualität im Vordergrund sorgen wir für echte Ergebnisse.
          </p>
        </div>
      </div>
      <div className="w-full">
        <p className="text-soDigital-grey-400 text-center text-base font-medium leading-[150%]">Kundenauswahl</p>
        <Clients clients={clients} />
      </div>
    </div>
  );
}
