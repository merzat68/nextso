"use client";

import Title from "@/app/_components/Title";
import styles from "./contact-header.module.css";

export default function ContactPageHeader() {
  return (
    <div className={styles.ContactPageHeader}>
      <Title title={"Let’s connect!"} type={"rec"} />
      <h1 className={styles.ContactPageHeaderText}>
        Digital ist cool.
        <br />
        <strong className={styles.ContactPageHeaderStrong}> Ein persönliches Gespräch noch besser.</strong>
      </h1>
    </div>
  );
}
