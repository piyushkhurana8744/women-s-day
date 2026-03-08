"use client";

import { motion } from "framer-motion";
import styles from "./LoveLetterSection.module.css";

export default function LoveLetterSection() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionBg} />

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        className={styles.container}
      >
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <motion.span 
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className={styles.headerFlower}
          >
            🌹
          </motion.span>
          <h2 className={styles.sectionTitle}>A Letter From My Heart</h2>
          <p className={styles.sectionSubtitle}>
            Words I carry for you, always
          </p>
        </div>

        {/* Letter Card */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className={styles.letterCard}
        >
          <div className={styles.letterStamp}>💌</div>
          <div className={styles.letterContent}>
            <p className={styles.greeting}>My Dearest Love,</p>

            <p className={styles.letterPara}>
              Today the world celebrates women — their strength, their grace, their courage.
              But for me, every single day is a celebration of <strong>you</strong>.
            </p>

            <p className={styles.letterPara}>
              You are the first thought in my morning and the last prayer in my night.
              You are the heartbeat in my chest and the reason behind every smile I carry.
            </p>

            <p className={styles.letterPara}>
              You hold our world together with a love so pure, so fierce, so gentle —
              that I often wonder what I did to deserve someone as extraordinary as you.
            </p>

            <p className={styles.letterPara}>
              This page isn&apos;t just made of code and colors.
              It&apos;s made of every &quot;I love you&quot; I sometimes forget to say,
              every hug I owe you, and every moment of gratitude I feel just knowing
              you are mine.
            </p>

            <p className={styles.closing}>
              Forever &amp; Always Yours,
              <br />
              <span className={styles.signature}>Your Husband 💕</span>
            </p>
          </div>
          <motion.div 
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className={styles.letterSeal}
          >
            <span>❤️</span>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
