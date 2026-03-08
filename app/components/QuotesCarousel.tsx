"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./QuotesCarousel.module.css";

const quotes = [
  {
    text: "There is no limit to what we, as women, can accomplish.",
    author: "Michelle Obama",
  },
  {
    text: "A woman is like a tea bag - you can't tell how strong she is until you put her in hot water.",
    author: "Eleanor Roosevelt",
  },
  {
    text: "Think like a queen. A queen is not afraid to fail. Failure is another stepping stone to greatness.",
    author: "Oprah Winfrey",
  },
  {
    text: "Women are the real architects of society.",
    author: "Harriet Beecher Stowe",
  },
  {
    text: "Your strength and love remind me every day that women hold the universe together.",
    author: "Dedicated to You",
  },
];

export default function QuotesCarousel() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % quotes.length);
  const prev = () => setIndex((i) => (i - 1 + quotes.length) % quotes.length);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Quote className="w-10 h-10 text-rose-300 mb-4" />
          <h2 className={styles.title}>Words of Wisdom</h2>
        </div>

        <div className={styles.carouselWrapper}>
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.05, y: -10 }}
              transition={{ duration: 0.5 }}
              className={styles.quoteCard}
            >
              <p className={styles.quoteText}>&quot;{quotes[index].text}&quot;</p>
              <p className={styles.quoteAuthor}>— {quotes[index].author}</p>
            </motion.div>
          </AnimatePresence>

          <div className={styles.controls}>
            <button onClick={prev} className={styles.btn}>
              <ChevronLeft />
            </button>
            <div className={styles.dots}>
              {quotes.map((_, i) => (
                <div 
                  key={i} 
                  className={`${styles.dot} ${i === index ? styles.activeDot : ""}`} 
                />
              ))}
            </div>
            <button onClick={next} className={styles.btn}>
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
