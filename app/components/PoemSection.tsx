"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import Image from "next/image";
import styles from "./PoemSection.module.css";

const poemLines = [
  { text: "आप हम सबका इतना ख्याल रखती हो,", delay: 0.1 },
  { text: "हर छोटी-बड़ी बात में हमेशा हमारे साथ खड़ी रहती हो।", delay: 0.3 },
  { text: "", delay: 0 },
  { text: "आप सच में बहुत strong हो,", delay: 0.5 },
  { text: "हमारी सबसे brave woman हो।", delay: 0.7 },
  { text: "", delay: 0 },
  { text: "मेरी प्यारी ब्योली (Byoli),", delay: 0.9 },
  { text: "म्यर ज़िंदगी म तुम सबसे खास छ।", delay: 1.1 },
  { text: "", delay: 0 },
  { text: "जब भी मैं थक जांलु या हिम्मत कम पड़ जाल,", delay: 1.3 },
  { text: "तुम ही म्यर सबसे बड़ी encourager बन जाल।", delay: 1.5 },
  { text: "", delay: 0 },
  { text: "सच बताऊँ…", delay: 1.7 },
  { text: "तुम सिर्फ म्यर ब्योली ना,", delay: 1.9 },
  { text: "तुम म्यर सबसे बड़ी ताकत और म्यर पूरी दुनिया छ। ❤️", delay: 2.1 },
];

export default function PoemSection() {
  return (
    <section className={styles.section}>
      <div className={styles.bgPattern} />

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        className={styles.container}
      >
        <div className={styles.sectionHeader}>
          <motion.div 
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className={styles.headerDecor}
          >
            <span>🌺</span>
            <span className={styles.headerLine} />
            <Heart className="w-6 h-6 text-rose-500 fill-rose-500 mx-2" />
            <span className={styles.headerLine} />
            <span>🌺</span>
          </motion.div>
          <h2 className={styles.sectionTitle}>For My Strongest Woman</h2>
          <p className={styles.sectionSubtitle}>
            शब्द जो दिल से निकले हैं, सिर्फ़ तुम्हारे लिए
          </p>
        </div>

        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={styles.poemCard}
        >
          <div className={styles.poemGlow} />

          <div className={styles.photoContainer}>
            <div className={styles.photoFrame}>
              <Image
                src="/our-memory.jpg" 
                alt="Our beautiful memory" 
                width={400}
                height={500}
                className={styles.photo}
              />
              <div className={styles.photoOverlay} />
            </div>
          </div>

          <div className={styles.poemContent}>
            {poemLines.map((line, i) =>
              line.text === "" ? (
                <div key={i} className={styles.poemBreak} />
              ) : (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: line.delay, duration: 0.5 }}
                  viewport={{ once: true }}
                  className={styles.poemLine}
                >
                  {line.text}
                </motion.p>
              )
            )}
          </div>

          <div className={styles.poemFooter}>
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className={styles.footerHearts}
            >
              💕 💖 💕
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
