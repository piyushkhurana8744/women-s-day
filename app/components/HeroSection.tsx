"use client";

import { motion } from "framer-motion";
import { Heart, Sparkles, MoveDown } from "lucide-react";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      {/* Background decorative elements */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className={styles.bgOrb1} 
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1.1 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", delay: 1 }}
        className={styles.bgOrb2} 
      />
      <div className={styles.bgOrb3} />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={styles.content}
      >
        {/* Top decorative */}
        <div className={styles.topDecor}>
          <motion.span 
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className={styles.decorFlower}
          >
            🌸
          </motion.span>
          <span className={styles.decorLine} />
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Heart className="w-6 h-6 text-rose-500 fill-rose-500" />
          </motion.div>
          <span className={styles.decorLine} />
          <motion.span 
            animate={{ rotate: [0, -15, 15, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className={styles.decorFlower}
          >
            🌸
          </motion.span>
        </div>

        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className={styles.badge}
        >
          <Sparkles className="w-4 h-4 text-gold-500" />
          <span>8th March 2026</span>
          <Sparkles className="w-4 h-4 text-gold-500" />
        </motion.div>

        {/* Main Title */}
        <h1 className={styles.title}>
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className={styles.titleSmall}
          >
            Happy
          </motion.span>
          <motion.span 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
            className={styles.titleMain}
          >
            Women&apos;s Day
          </motion.span>
          <motion.span 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className={styles.titleSub}
          >
            My Life & My Heart 💕
          </motion.span>
        </h1>

        {/* Heart Divider */}
        <div className={styles.heartDivider}>
          <span className={styles.divLine} />
          <Heart className="text-rose-600 fill-rose-600 w-8 h-8 mx-4" />
          <span className={styles.divLine} />
        </div>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className={styles.subtitle}
        >
          To the most incredible woman in my life —<br />
          This page is my heart, written in pixels, just for you.
        </motion.p>

        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className={styles.scrollHint}
        >
          <span className={styles.scrollText}>Scroll with love</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <MoveDown className="w-6 h-6 text-rose-500" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
