"use client";

import React from "react";
import Title from "@/app/_components/Title";
import Image from "next/image";
import "@/app/_components/contact-action.css";

export default function ContactAction({ page, image }) {
  return (
    <div className="contact-action-container">
      <div className="rotated-box">
        <Image src={image} quality={100} alt="alt" width={480} height={854} />
        <div className="text-overlay">
          <div className={`highlight-box ${page === "rec" ? "bg-[#bdffc2]" : "bg-[#EDD5FF]"}`}>
            <p className="highlight-text">Lerne uns kennen</p>
          </div>
          <div className="subtitle">
            <p className="subtitle-text">Untertitel laufen hier</p>
          </div>
        </div>
      </div>
      <div className="bordered-box"></div>
      <div className="contact-info">
        <Title title="Kontakt" type={page} />
        <h1 className="headline">Bereit für Neues?</h1>
        <div className="support-section">
          <p className="support-text">Du bist dir unsicher, was du online erreichen kannst? Welche Kosten auf dich zukommen und wie du dich nachhaltig etablieren kannst? Wir unterstützen dich!</p>
          <div className="contact-actions">
            <div className="call-to-action">
              <p className="action-text">Discovery Call buchen</p>
            </div>
            <div className="contact-form">
              <p className="form-text">Kontaktformular nutzen</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
