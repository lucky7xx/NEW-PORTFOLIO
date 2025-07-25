// components/ContactSection.js
"use client"
import { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import styles from '../styles/ContactSection.module.css';

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const formVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const contactInfoVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    const form = e.currentTarget;
    if (!form) {
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    try {
      const result = await emailjs.sendForm(
        'service_xkl5gsj',
        'template_czem4bb',
        form,
        '1WZH-hCaJrVHEyWh8'
      );

      console.log('Email sent successfully:', result.text);
      setSubmitStatus('success');
      form.reset();
    } catch (error) {
      console.error('Email send failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={styles.contactSection} id="contact">
      <div className={styles.container}>
        <motion.h2 
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Let's Work Together
        </motion.h2>
        
        <motion.div 
          className={styles.contactContent}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Contact Info */}
          <motion.div 
            className={styles.contactInfo}
            variants={contactInfoVariants}
          >
            <motion.div 
              className={styles.introText}
              variants={itemVariants}
            >
              <p className={styles.leadText}>
                Ready to build something amazing with Gen AI? I'm always open to discussing 
                new opportunities and exciting projects.
              </p>
            </motion.div>
            
            <motion.div 
              className={styles.contactDetails}
              variants={containerVariants}
            >
              <motion.div 
                className={styles.contactItem}
                variants={itemVariants}
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
              >
                <Mail className={styles.icon} size={20} />
                <span>lbp7198@gmail.com</span>
              </motion.div>
              <motion.div 
                className={styles.contactItem}
                variants={itemVariants}
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
              >
                <Phone className={styles.icon} size={20} />
                <span>+91 9824697672</span>
              </motion.div>
              <motion.div 
                className={styles.contactItem}
                variants={itemVariants}
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
              >
                <MapPin className={styles.icon} size={20} />
                <span>Ahmedabad, Gujarat, India</span>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className={styles.socialLinks}
              variants={containerVariants}
            >
              <motion.a 
                href="https://linkedin.com/in/lucky7x" 
                className={styles.socialLink} 
                target="_blank" 
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className={styles.icon} size={20} />
                <span>LinkedIn</span>
              </motion.a>
              <motion.a 
                href="https://github.com/lucky7xx" 
                className={styles.socialLink} 
                target="_blank" 
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className={styles.icon} size={20} />
                <span>GitHub</span>
              </motion.a>
              <motion.a 
                href="https://drive.google.com/file/d/1JPjnggqjZOtWhB0EEov766NcOjt4DGqR/view" 
                target='_blank'  
                className={styles.socialLink}
                variants={itemVariants}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className={styles.icon} size={20} />
                <span>Resume</span>
              </motion.a>
            </motion.div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            className={styles.contactForm}
            variants={formVariants}
          >
            <form onSubmit={handleSubmit} className={styles.form}>
              <input type="hidden" name="reply_to" value="" />
              
              <motion.div 
                className={styles.formGroup}
                variants={itemVariants}
              >
                <label htmlFor="name" className={styles.label}>Name</label>
                <motion.input
                  type="text"
                  id="name"
                  name="from_name"
                  className={styles.input}
                  required
                  whileFocus={{ scale: 1.02, transition: { duration: 0.2 } }}
                />
              </motion.div>
              
              <motion.div 
                className={styles.formGroup}
                variants={itemVariants}
              >
                <label htmlFor="email" className={styles.label}>Email</label>
                <motion.input
                  type="email"
                  id="email"
                  name="from_email"
                  className={styles.input}
                  required
                  whileFocus={{ scale: 1.02, transition: { duration: 0.2 } }}
                  onChange={(e) => {
                    const replyToField = document.querySelector('input[name="reply_to"]');
                    if (replyToField) replyToField.value = e.target.value;
                  }}
                />
              </motion.div>
              
              <motion.div 
                className={styles.formGroup}
                variants={itemVariants}
              >
                <label htmlFor="subject" className={styles.label}>Subject</label>
                <motion.input
                  type="text"
                  id="subject"
                  name="subject"
                  className={styles.input}
                  required
                  whileFocus={{ scale: 1.02, transition: { duration: 0.2 } }}
                />
              </motion.div>
              
              <motion.div 
                className={styles.formGroup}
                variants={itemVariants}
              >
                <label htmlFor="message" className={styles.label}>Message</label>
                <motion.textarea
                  id="message"
                  name="message"
                  rows={6}
                  className={styles.textarea}
                  required
                  whileFocus={{ scale: 1.02, transition: { duration: 0.2 } }}
                />
              </motion.div>
              
              <motion.button 
                type="submit" 
                className={styles.submitButton}
                disabled={isSubmitting}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 8px 25px rgba(0, 0, 0, 0.15)",
                  transition: { duration: 0.2 } 
                }}
                whileTap={{ scale: 0.95 }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div 
                  className={styles.successMessage}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  ✅ Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}
              {submitStatus === 'error' && (
                <motion.div 
                  className={styles.errorMessage}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  ❌ Failed to send message. Please try again or email me directly.
                </motion.div>
              )}
            </form>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className={styles.footer}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className={styles.footerText}>
            © 2025 Lucky Patel. Built with Next.js and passion for Gen AI.
          </p>
        </motion.div>
      </div>
    </section>
  );
}