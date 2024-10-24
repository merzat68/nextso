"use client";

import { useState } from "react";
import "./contact-form.css";
import Image from "next/image";
import Link from "next/link";

export default function ContactForm({ onChange }) {
  const [selectedValue, setSelectedValue] = useState("Thema");
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
    if (onChange) {
      onChange(!checked);
    }
  };

  return (
    <div className="form-container">
      <div className="form-container-calendar">
        <h5>15 Minuten Kennenlernen. No strings attached.</h5>
        <Link href="#" className="form-container-calendar-btn">
          <Image src="/calendar.svg" alt="alt" width={24} height={24} />
          <p>Videocall buchen</p>
        </Link>
      </div>
      <div className="form-container-contact">
        <div className="form-container-contact-item">
          <h6>E-Mail</h6>
          <p>hallo@sodigital-gruppe.de</p>
        </div>
        <div className="form-container-contact-item">
          <h6>Telefon</h6>
          <p>+49 (0)160 93871335</p>
        </div>
        <div className="form-container-contact-item">
          <h6>Anschrift</h6>
          <p>
            Kreativpark Freiburg
            <br />
            Paul-Ehrlich-Straße 7<br />
            79106 Freiburg
          </p>
        </div>
      </div>
      <form className="form-container-input">
        <div className="form-container-input-header">
          <h5>Deine Anfrage</h5>
        </div>
        <div className="form-container-input-body">
          <div className="form-container-input-group">
            <input type="text" placeholder="Name oder Firma *" />
          </div>
          <div className="form-container-input-group">
            <input type="email" placeholder="Email Adresse *" />
            <input type="tel" placeholder="Telefonnummer *" />
          </div>
          <div className="form-container-input-group">
            <select value={selectedValue} onChange={(e) => setSelectedValue(e.target.value)}>
              <option disabled hidden>
                Thema
              </option>
              <option value="option1">Bereich</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
          <div className="form-container-input-group">
            <textarea rows={7} name="name" placeholder="Ihre Nachricht" />
          </div>
          <div className="form-container-input-group">
            <div className="form-container-input-check">
              <input type="checkbox" name="checked_privacy" checked={checked} onChange={handleCheckboxChange} />
              <span></span>
            </div>
            <p>
              Ich habe die Datenschutzerklärung gelesen & verstanden. Ich bin damit einverstanden, dass meine Angaben und Daten zur Beantwortung meiner Anfrage elektronisch erfasst und gespeichert
              werden. Du kannst deine Einwilligung jederzeit widerrufen.
            </p>
          </div>
        </div>
        <div className="form-container-input-footer">
          <button type="submit" className="">
            Absenden
          </button>
        </div>
      </form>
    </div>
  );
}
