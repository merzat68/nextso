"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { useGSAP } from "@gsap/react";
import "./web-development.scss";

gsap.registerPlugin(ScrollToPlugin);

export default function WebDevelopment() {
  const activeButtonRef = useRef(null);
  const container = useRef();
  const webDevelopmentSection = useRef();
  const marketingSection = useRef();
  const workshopsSection = useRef();

  const { contextSafe } = useGSAP({ scope: container });

  const scrollToSection = (sectionRef) => {
    gsap.to(window, { duration: 2, scrollTo: sectionRef.current });
  };

  const handleActiveButton = contextSafe((e, sectionRef) => {
    e.preventDefault();

    scrollToSection(sectionRef);

    // Remove "active" class from the previously active button
    if (activeButtonRef.current) {
      activeButtonRef.current.classList.remove("active");
    }

    // Add "active" class to the currently clicked button
    e.currentTarget.classList.add("active");

    // Update the ref to the currently active button
    activeButtonRef.current = e.currentTarget;
  });

  return (
    <section className="web-development-container" ref={container}>
      <article className="web-development-header">
        <section className="web-development-btn-container">
          <Link href="#" className="web-development-header__btn active" onClick={(e) => handleActiveButton(e, webDevelopmentSection)} ref={activeButtonRef}>
            Webentwicklung
          </Link>
          <Link href="#" className="web-development-header__btn" onClick={(e) => handleActiveButton(e, marketingSection)}>
            Online Marketing
          </Link>
          <Link href="#" className="web-development-header__btn" onClick={(e) => handleActiveButton(e, workshopsSection)}>
            Workshops
          </Link>
        </section>
      </article>
      <article className="web-development-content" ref={webDevelopmentSection}>
        <h1>Webentwicklung</h1>
        <section className="web-development-content__item">
          <div className="web-development-item__image">
            <Image src="/references-item.jpeg" alt="alt" width={576} height={432} />
          </div>
          <div className="web-development-item__text">
            <div className="web-development-item-text__title">
              <p>01</p>
              <h3>Webseiten</h3>
            </div>
            <div className="web-development-item-text__description">
              <p>
                Geschichten erzählen, ohne zu überfordern, emotionalisieren, ohne abzuschweifen, und Besucher*innen zum Ziel führen, ohne aufdringlich zu sein. Gemeinsam entwickeln wir genau das &
                mehr!
              </p>
              <Link href="#">Mehr erfahren</Link>
            </div>
          </div>
        </section>
        <section className="web-development-content__item">
          <div className="web-development-item__image">
            <Image src="/references-item.jpeg" alt="alt" width={576} height={432} />
          </div>
          <div className="web-development-item__text">
            <div className="web-development-item-text__title">
              <p>01</p>
              <h3>Webseiten</h3>
            </div>
            <div className="web-development-item-text__description">
              <p>
                Geschichten erzählen, ohne zu überfordern, emotionalisieren, ohne abzuschweifen, und Besucher*innen zum Ziel führen, ohne aufdringlich zu sein. Gemeinsam entwickeln wir genau das &
                mehr!
              </p>
              <Link href="#">Mehr erfahren</Link>
            </div>
          </div>
        </section>
      </article>
      <article className="web-development-content" ref={marketingSection}>
        <h1>Online Marketing</h1>
        <section className="web-development-content__item">
          <div className="web-development-item__image">
            <Image src="/references-item.jpeg" alt="alt" width={576} height={432} />
          </div>
          <div className="web-development-item__text">
            <div className="web-development-item-text__title">
              <p>01</p>
              <h3>Webseiten</h3>
            </div>
            <div className="web-development-item-text__description">
              <p>
                Geschichten erzählen, ohne zu überfordern, emotionalisieren, ohne abzuschweifen, und Besucher*innen zum Ziel führen, ohne aufdringlich zu sein. Gemeinsam entwickeln wir genau das &
                mehr!
              </p>
              <Link href="#">Mehr erfahren</Link>
            </div>
          </div>
        </section>
        <section className="web-development-content__item">
          <div className="web-development-item__image">
            <Image src="/references-item.jpeg" alt="alt" width={576} height={432} />
          </div>
          <div className="web-development-item__text">
            <div className="web-development-item-text__title">
              <p>01</p>
              <h3>Webseiten</h3>
            </div>
            <div className="web-development-item-text__description">
              <p>
                Geschichten erzählen, ohne zu überfordern, emotionalisieren, ohne abzuschweifen, und Besucher*innen zum Ziel führen, ohne aufdringlich zu sein. Gemeinsam entwickeln wir genau das &
                mehr!
              </p>
              <Link href="#">Mehr erfahren</Link>
            </div>
          </div>
        </section>
        <section className="web-development-content__item">
          <div className="web-development-item__image">
            <Image src="/references-item.jpeg" alt="alt" width={576} height={432} />
          </div>
          <div className="web-development-item__text">
            <div className="web-development-item-text__title">
              <p>01</p>
              <h3>Webseiten</h3>
            </div>
            <div className="web-development-item-text__description">
              <p>
                Geschichten erzählen, ohne zu überfordern, emotionalisieren, ohne abzuschweifen, und Besucher*innen zum Ziel führen, ohne aufdringlich zu sein. Gemeinsam entwickeln wir genau das &
                mehr!
              </p>
              <Link href="#">Mehr erfahren</Link>
            </div>
          </div>
        </section>
      </article>
      <article className="web-development-content" ref={workshopsSection}>
        <h1>Workshops</h1>
        <section className="web-development-content__item">
          <div className="web-development-item__image">
            <Image src="/references-item.jpeg" alt="alt" width={576} height={432} />
          </div>
          <div className="web-development-item__text">
            <div className="web-development-item-text__title">
              <p>01</p>
              <h3>Webseiten</h3>
            </div>
            <div className="web-development-item-text__description">
              <p>
                Geschichten erzählen, ohne zu überfordern, emotionalisieren, ohne abzuschweifen, und Besucher*innen zum Ziel führen, ohne aufdringlich zu sein. Gemeinsam entwickeln wir genau das &
                mehr!
              </p>
              <Link href="#">Mehr erfahren</Link>
            </div>
          </div>
        </section>
        <section className="web-development-content__item">
          <div className="web-development-item__image">
            <Image src="/references-item.jpeg" alt="alt" width={576} height={432} />
          </div>
          <div className="web-development-item__text">
            <div className="web-development-item-text__title">
              <p>01</p>
              <h3>Webseiten</h3>
            </div>
            <div className="web-development-item-text__description">
              <p>
                Geschichten erzählen, ohne zu überfordern, emotionalisieren, ohne abzuschweifen, und Besucher*innen zum Ziel führen, ohne aufdringlich zu sein. Gemeinsam entwickeln wir genau das &
                mehr!
              </p>
              <Link href="#">Mehr erfahren</Link>
            </div>
          </div>
        </section>
      </article>
    </section>
  );
}
