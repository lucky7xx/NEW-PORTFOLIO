// components/AboutSection.js
import { motion, Variants } from 'framer-motion';
import styles from '../styles/AboutSection.module.css';

export default function AboutSection() {
  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.42, 0, 0.58, 1] // Using cubic-bezier array for easing
      }
    }
  };



  return (
    <section className={styles.aboutSection} id="about">
      <div className={styles.container}>
        <motion.h2 
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          About Me
        </motion.h2>
        
        <motion.div 
          className={styles.aboutContent}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div 
            className={styles.textContent}
            variants={textVariants}
          >
            <div className={styles.introText}>
              <p className={styles.leadParagraph}>
                I started as a Full Stack Developer and evolved into a Gen AI specialist, 
                working with LLMs and cutting-edge AI technologies to build solutions that matter.
              </p>
            </div>
            
            <div className={styles.storyContent}>
              <p>
                My journey began with traditional web development using React, Node.js, and building 
                scalable applications. As AI technology emerged, I was fascinated by the potential 
                of Large Language Models and decided to dive deep into the world of Generative AI.
              </p>
              
              <p>
                At Silvertouch Technologies, I&apos;ve successfully bridged the gap between full-stack 
                development and AI integration. From building RAG-based applications to implementing 
                machine learning models in production, I focus on creating AI solutions that deliver 
                real business value and exceptional user experiences.
              </p>
            </div>
            
            <div className={styles.highlights}>
              <div className={styles.highlight}>
                <span className={styles.number}>10+</span>
                <span className={styles.label}>AI-powered applications</span>
              </div>
              <div className={styles.highlight}>
                <span className={styles.number}>95%</span>
                <span className={styles.label}>Average model accuracy</span>
              </div>
              <div className={styles.highlight}>
                <span className={styles.number}>2.5+</span>
                <span className={styles.label}>Years of experience</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}