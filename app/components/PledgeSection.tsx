"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Sparkles, Send } from "lucide-react";
import styles from "./PledgeSection.module.css";

export default function PledgeSection() {
  const [pledged, setPledged] = useState(false);
  const [message, setMessage] = useState("");

  const handlePledge = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      setPledged(true);
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={styles.card}
        >
          <div className={styles.header}>
            <Heart className="w-12 h-12 text-rose-500 fill-rose-500 mb-4" />
            <h2 className={styles.title}>A Promise of Progress</h2>
            <p className={styles.subtitle}>
              Write a small vow or a message of appreciation to the woman who inspires you Most.
            </p>
          </div>

          <AnimatePresence mode="wait">
            {!pledged ? (
              <motion.form 
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                onSubmit={handlePledge}
                className={styles.form}
              >
                <textarea 
                  className={styles.textarea}
                  placeholder="I promise to always..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
                <button type="submit" className={styles.submitBtn}>
                  <span>Send My Vow</span>
                  <Send className="w-4 h-4 ml-2" />
                </button>
              </motion.form>
            ) : (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className={styles.success}
              >
                <div className={styles.successIcon}>
                  <Sparkles className="w-12 h-12 text-gold-500" />
                </div>
                <h3 className={styles.successTitle}>Heart Received!</h3>
                <p className={styles.successText}>
                  &quot;Your words have been etched into the stars of this digital universe.&quot;
                </p>
                <button 
                  onClick={() => setPledged(false)} 
                  className={styles.resetBtn}
                >
                  Write Another
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
