// components/SkillsSection.js
import { motion } from 'framer-motion';
import styles from '../styles/SkillsSection.module.css';

const skillCategories = [
  {
    title: "Frontend Development",
    skills: ["React.js", "Next.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Material-UI"]
  },
  {
    title: "Backend Development", 
    skills: ["Node.js", "Express.js", "MongoDB", "SQL", "GraphQL", "REST APIs", "Microservices", "Nginx"]
  },
  {
    title: "AI & Machine Learning",
    skills: ["Large Language Models", "RAG Systems", "Python", "TensorFlow", "NLP", "Computer Vision", "Agentic AI", "OpenAI APIs"]
  },
  {
    title: "DevOps & Tools",
    skills: ["Linux (Debian)", "Git", "Docker", "Webpack", "VS Code", "Vercel", "AWS", "CI/CD"]
  }
];

export default function SkillsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      rotateX: -15
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1] // This is the cubic-bezier equivalent of "easeOut"
      }
    }
  };

  const skillTagVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section className={styles.skillsSection} id="skills">
      <div className={styles.container}>
        <motion.h2 
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Skills & Technologies
        </motion.h2>
        
        <motion.div 
          className={styles.skillsGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index} 
              className={styles.skillCategory}
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <motion.h3 
                className={styles.categoryTitle}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                {category.title}
              </motion.h3>
              <motion.div 
                className={styles.skillsList}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.span 
                    key={skillIndex} 
                    className={styles.skillTag}
                    variants={skillTagVariants}
                    custom={skillIndex}
                    whileHover={{ 
                      scale: 1.05,
                      y: -2,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className={styles.specialization}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
        >
          <div className={styles.specializationContent}>
            <motion.h3 
              className={styles.specializationTitle}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Specialized In
            </motion.h3>
            <motion.p 
              className={styles.specializationText}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Building end-to-end AI solutions from concept to production, with expertise in 
              integrating Large Language Models into scalable web applications that deliver 
              real business value.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}