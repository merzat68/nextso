"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import "./main-menu.css";
import TransparentBox from "./3DElement";

import calendar from "@/public/calendar.svg";
import calendarPurple from "@/public/calendar-purple.svg";

export default function Menu({ menuOpen, onMenuToggle }) {
  const path = usePathname();
  let parentUrl = "/recruiters";
  let calendarIcon = calendar;

  const openMenu = () => {
    // Toggle the menu state and notify the parent
    onMenuToggle(!menuOpen);
  };

  if (path.includes("solutions")) {
    parentUrl = "/solutions";
    calendarIcon = calendarPurple;
  }

  return (
    <div className="menu-container">
      <div className="menu-container-3D">
        <TransparentBox styleConfig={"w-[576px] left-0 h-[600px]"} />
      </div>
      <div className="content-wrapper">
        <div className="content-wrapper-header">
          <div className="language-box">
            <p className="language-text">EN</p>
          </div>
          <div className="menu-items">
            {path.includes("solutions") && (
              <div className="menu-item solutions">
                <p>Solutions</p>
                <Image src="/threeDot.svg" alt="alt" width={5} height={10} />
              </div>
            )}
            {path.includes("recruiters") && (
              <div className="menu-item recruiting">
                <p>Recruiting</p>
                <Image src="/threeDot.svg" alt="alt" width={5} height={10} />
              </div>
            )}
            <div className="menu-item close" onClick={openMenu}>
              <span className="absolute block h-[2px] w-3 bg-white rotate-45"></span>
              <span className="block h-[2px] w-3 bg-white -rotate-45"></span>
            </div>
          </div>
        </div>
        <div className="content-wrapper-main">
          <div className="content-wrapper-main-links">
            <div className="titles">
              <Link href={parentUrl} className="title">
                Startseite
              </Link>
              {path.includes("solutions") && (
                <Link href={parentUrl + "/services"} className="title">
                  Leistungen
                </Link>
              )}
              <Link href={parentUrl + "/jobs"} className="title">
                Über uns
              </Link>
              <Link href={parentUrl + "/references"} className="title">
                Referenzen
              </Link>
            </div>
            <div className="main-menu-links">
              <Link href={parentUrl + "/jobs"} className="job">
                Jobs
              </Link>
              <Link href={parentUrl + "/contact"} className="contact">
                Kontakt
              </Link>
            </div>
          </div>
          <div className="content-wrapper-main-info">
            <div className="info-block">
              <p className="info-title">E-Mail</p>
              <p className="info-content">hallo@sodigital-gruppe.de</p>
            </div>
            <div className="info-block">
              <div className="info-title">Telefon</div>
              <div className="info-content">+49 (0)160 93871335</div>
            </div>
            <div className="info-block">
              <div className="info-title">Anschrift</div>
              <div className="info-content">
                Kreativpark Freiburg <br />
                Paul-Ehrlich-Straße 7 <br />
                79106 Freiburg
              </div>
            </div>
          </div>
        </div>
        <div className="content-wrapper-footer">
          <div className="social-buttons">
            <Link className="social-icon" href="https://facebook.com">
              <span></span>
              <Image className="absolute top-0 bottom-0 left-0 right-0 m-auto w-full" quality={100} src="/facebook.svg" alt="alt" width={24} height={24} />
            </Link>
            <Link className="social-icon" href="https://linkedin.com">
              <span></span>
              <Image className="absolute top-0 bottom-0 left-0 right-0 m-auto w-full" src="/linkedin.svg" alt="alt" width={24} height={24} />
            </Link>
          </div>
          <div className="learn-more">
            <p className="learn-more-text">
              15 Minuten Kennenlernen.
              <br /> No strings attached.
            </p>
            <div className="learn-more-button">
              <Image src={calendarIcon} alt="alt" width={24} height={24} />
              <p className="button-text">Lerne uns kennen</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
