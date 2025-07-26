// components/Portfolio.js
"use client";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import { motion } from "framer-motion";

import styles from "../styles/Portfolio.module.css";
import AboutSection from "./aboutsection";
import ProjectsSection from "./projectssection";
import SkillsSection from "./skillssection";
import ContactSection from "./contactsection";
export default function Portfolio() {
  useEffect(() => {
    const handleNavClick = (e: {
      currentTarget: any;
      preventDefault: () => void;
    }) => {
      const anchor = e.currentTarget;
      if (anchor && anchor.hash) {
        e.preventDefault();
        const target = document.querySelector(anchor.hash);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });

          // Update active nav
          document.querySelectorAll(`.${styles.navLink}`).forEach((link) => {
            link.classList.remove(styles.active);
          });
          anchor.classList.add(styles.active);
        }
      }
    };

    const navLinks = document.querySelectorAll(`.${styles.navLink}`);
    navLinks.forEach((link) => {
      link.addEventListener("click", handleNavClick);
    });

    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener("click", handleNavClick);
      });
    };
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const heroTextVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  const profileImageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
        delay: 0.5,
      },
    },
  };

  const navVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <>
<Head>
  <title>Lucky Patel - Full Stack Gen AI Developer | AI Engineer Portfolio India</title>
  <meta name="description" content="Lucky Patel (luckypatel.in) - Full Stack Gen AI Developer from Ahmedabad, India. Specializing in RAG systems, LLMs, and AI integration with 2.5+ years experience." />
  <meta name="keywords" content="Lucky Patel, LuckyPatel, Patel Lucky, luckypatel.in, Gen AI Developer India, Full Stack Developer Ahmedabad, AI Engineer Gujarat" />
  <link rel="icon" type="image/x-icon" href="/favicon.ico" />
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
  <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
  {/* Canonical URL */}
  <link rel="canonical" href="https://luckypatel.in" />
  
  {/* Open Graph */}
  <meta property="og:title" content="Lucky Patel - Full Stack Gen AI Developer India" />
  <meta property="og:description" content="Portfolio of Lucky Patel (luckypatel.in) - Gen AI specialist from Ahmedabad, India" />
  <meta property="og:url" content="https://luckypatel.in" />
  <meta property="og:image" content="https://luckypatel.in/profile.png" />
  <meta property="og:site_name" content="Lucky Patel Portfolio" />
  
  {/* Enhanced Schema.org for .in domain */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Lucky Patel",
      "alternateName": ["LuckyPatel", "Patel Lucky"],
      "url": "https://luckypatel.in",
      "jobTitle": "Full Stack Gen AI Developer",
      "nationality": "Indian",
      "worksFor": {
        "@type": "Organization",
        "name": "Silvertouch Technologies",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "India"
        }
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Ahmedabad",
        "addressRegion": "Gujarat", 
        "addressCountry": "India"
      },
      "sameAs": [
        "https://linkedin.com/in/lucky7x",
        "https://github.com/lucky7xx"
      ],
      "knowsAbout": ["Artificial Intelligence", "Machine Learning", "Full Stack Development", "RAG Systems"],
      "alumniOf": "Gujarat, India",
      "email": "lbp7198@gmail.com",
      "telephone": "+91-9824697672"
    })}
  </script>
</Head>

      <div className={styles.container}>
        <motion.header
          className={styles.header}
          variants={navVariants}
          initial="hidden"
          animate="visible"
        >
          <nav className={styles.nav}>
            <motion.a
              href="#home"
              className={`${styles.navLink} ${styles.active}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Home
            </motion.a>
            <motion.a
              href="#about"
              className={styles.navLink}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              About
            </motion.a>
            <motion.a
              href="#projects"
              className={styles.navLink}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Projects
            </motion.a>
            <motion.a
              href="#skills"
              className={styles.navLink}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Skills
            </motion.a>
            <motion.a
              href="#contact"
              className={styles.navLink}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact
            </motion.a>
          </nav>
        </motion.header>

        <main className={styles.mainContent} id="home">
          <motion.div
            className={styles.heroSection}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className={styles.textContent}
              variants={heroTextVariants}
            >
              <motion.h1
                className={styles.heroTitle}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                Hi, I'm Lucky,
                <br />
                a Full Stack Gen AI
                <br />
                Developer
              </motion.h1>
            </motion.div>
            <motion.div
              className={styles.profileImageWrapper}
              variants={profileImageVariants}
              whileHover={{
                scale: 1.05,
                rotate: 2,
                transition: { duration: 0.3 },
              }}
            >
              <Image
                src="/profile.PNG"
                alt="Lucky"
                width={200}
                height={200}
                className={styles.profileImage}
                priority
              />
            </motion.div>
          </motion.div>
        </main>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <AboutSection />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <ProjectsSection />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <SkillsSection />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <ContactSection />
        </motion.div>
      </div>
    </>
  );
}
