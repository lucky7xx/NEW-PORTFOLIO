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
        <title>Lucky - Full Stack Gen AI Developer</title>
        <meta
          name="description"
          content="Lucky - Full Stack Gen AI Developer Portfolio"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
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
