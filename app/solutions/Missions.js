"use client";

import Title from "@/app/_components/Title";
import VerticalCardSlider from "@/app/_components/MissionSlider";
import styles from "./mission.module.scss";

export default function Missions() {
  return (
    <div className={styles.missions}>
      <div className={styles.missionsTitle}>
        <Title title={"Let’s connect!"} type={"sol"} />
        <h1 className={styles.missionsTitleHeader}>Concept first.</h1>
        <p className={styles.missionsTitleText}>Keine Leistung von der Stange und nichts ohne ein klares und fokussiertes Konzept.</p>
      </div>
      <VerticalCardSlider />
    </div>
  );
}
