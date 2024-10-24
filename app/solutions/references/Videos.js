"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import arrow from "@/public/projects-icon.png";
import "./videos.scss";

export default function Videos() {
  const activeButtonRef = useRef(null);
  const container = useRef();
  const webDevelopmentSection = useRef();
  const marketingSection = useRef();
  const workshopsSection = useRef();
  const posts = [
    { title: "ÄsthetikCrew", slug: "first-post", content: "Website | Online Marketing", image: "/references-item.png" },
    { title: "ÄsthetikCrew", slug: "second-post", content: "Website" },
  ];

  const handleActiveButton = (e, sectionRef) => {
    e.preventDefault();

    // Remove "active" class from the previously active button
    if (activeButtonRef.current) {
      activeButtonRef.current.classList.remove("active");
    }

    // Add "active" class to the currently clicked button
    e.currentTarget.classList.add("active");

    // Update the ref to the currently active button
    activeButtonRef.current = e.currentTarget;
  };

  return (
    <section className="videos-container" ref={container}>
      <article className="videos-header">
        <section className="videos-btn-container">
          <Link href="#" className="videos-header__btn active" onClick={handleActiveButton} ref={activeButtonRef}>
            Webentwicklung
          </Link>
          <Link href="#" className="videos-header__btn" onClick={handleActiveButton}>
            Online Marketing
          </Link>
          <Link href="#" className="videos-header__btn" onClick={handleActiveButton}>
            Workshops
          </Link>
        </section>
      </article>
      <article className="videos-content" ref={webDevelopmentSection}>
        {posts.map((post, index) => (
          <section className="videos-content__item" key={index}>
            <div className="videos-item__image">
              <Image src="/references-item.jpeg" alt="alt" width={576} height={432} />
              <Link href={`/solutions/references/${post.slug}`}>
                <Image className="" src={arrow} alt="alt" width={40} height={40} />
              </Link>
            </div>
            <div className="videos-item__text">
              <h3>{post.title}</h3>
              <p>{post.content}</p>
            </div>
          </section>
        ))}
      </article>
    </section>
  );
}
