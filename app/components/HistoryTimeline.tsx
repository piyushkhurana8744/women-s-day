"use client";

import { motion } from "framer-motion";
import { Award, Heart, Shield, Star, Sun } from "lucide-react";
import styles from "./HistoryTimeline.module.css";

const timelineData = [
  {
    year: "1908",
    title: "The First March",
    description: "15,000 women marched through NYC demanding shorter hours, better pay and voting rights.",
    icon: <Shield className="w-6 h-6" />,
  },
  {
    year: "1911",
    title: "First IWD",
    description: "International Women's Day was honored for the first time in Austria, Denmark, Germany and Switzerland.",
    icon: <Sun className="w-6 h-6" />,
  },
  {
    year: "1975",
    title: "UN Recognition",
    description: "The United Nations began celebrating International Women's Day on 8 March.",
    icon: <Award className="w-6 h-6" />,
  },
  {
    year: "2026",
    title: "Celebrating You",
    description: "Honoring the incredible strength, love, and light you bring to our world every single day.",
    icon: <Heart className="w-6 h-6" />,
  },
];

export default function HistoryTimeline() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={styles.header}
        >
          <Star className="w-8 h-8 text-gold-500 mb-4" />
          <h2 className={styles.title}>Through the Sands of Time</h2>
          <p className={styles.subtitle}>Celebrating the spirit that changed the world</p>
        </motion.div>

        <div className={styles.timeline}>
          <div className={styles.line} />
          
          {timelineData.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`${styles.item} ${index % 2 === 0 ? styles.left : styles.right}`}
            >
              <div className={styles.content}>
                <div className={styles.iconWrapper}>
                  {item.icon}
                </div>
                <div className={styles.textContainer}>
                  <span className={styles.year}>{item.year}</span>
                  <h3 className={styles.eventTitle}>{item.title}</h3>
                  <p className={styles.description}>{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
