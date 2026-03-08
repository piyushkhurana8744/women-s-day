"use client";

import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.heartPulse}>❤️</div>
        <p className={styles.text}>
          Made with all my love for the most beautiful woman in my life.
        </p>
        <p className={styles.date}>8th March 2026</p>
        <div className={styles.signature}>Always yours, Forever.</div>
      </div>
      <div className={styles.bottomBar} />
    </footer>
  );
}
