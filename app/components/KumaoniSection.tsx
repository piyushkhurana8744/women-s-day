"use client";

import { motion } from "framer-motion";
import styles from "./KumaoniSection.module.css";

export default function KumaoniSection() {
  return (
    <section className={styles.section}>
      <div className={styles.gradientOverlay} />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className={styles.container}
      >
        <div className={styles.decorativeTop}>
          <span className={styles.goldLine} />
          <motion.span 
            animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className={styles.heartIcon}
          >
            💖
          </motion.span>
          <span className={styles.goldLine} />
        </div>

        <motion.div 
          whileHover={{ scale: 1.02 }}
          className={styles.messageBox}
        >
          <h2 className={styles.kumaoniText}>
            म्यर दिल तुमार छ, म्यर जान भी तुमी छ — मै तुमसे बहुत प्यार करूँछु ❤️
          </h2>
          <div className={styles.translation}>
            My heart is yours, you are my life — I love you so much.
          </div>
        </motion.div>

        <div className={styles.ornament}>
          <motion.span 
            animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0 }}
            className={styles.sparkle}
          >
            ✨
          </motion.span>
          <motion.span 
            animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            className={styles.sparkle}
          >
            ✨
          </motion.span>
          <motion.span 
            animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            className={styles.sparkle}
          >
            ✨
          </motion.span>
        </div>
      </motion.div>
    </section>
  );
}
