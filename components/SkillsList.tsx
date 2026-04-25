"use client";

import { motion } from "framer-motion";

const skillsRow1 = [
  "Java", "JavaScript", "TypeScript", "Python", "MySQL", "PL/SQL", "GraphQL", 
  "BigQuery", "HTML", "CSS", "Spring Boot", "C#", "Redux", "Node.js", "Express.js"
];

const skillsRow2 = [
  "Terraform", "Microservices", "REST APIs", "React.js", "Material UI", "GCP", 
  "AWS", "PowerShell", "MongoDB", "Git", "Jenkins", "Postman", "JIRA", "Grafana", "Docker"
];

// Duplicate for seamless loop
const duplicatedRow1 = [...skillsRow1, ...skillsRow1];
const duplicatedRow2 = [...skillsRow2, ...skillsRow2];

export default function SkillsList() {
  return (
    <section className="w-full py-12 overflow-hidden relative">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-3xl font-bold mb-4 font-mono text-ide-text">
          <span className="text-ide-keyword">const</span> <span className="text-ide-variable">allSkills</span> = <span className="text-ide-keyword">new</span> <span className="text-ide-function">Set</span>();
        </h2>
        <div className="h-px w-full bg-ide-border" />
      </motion.div>

      <div className="relative flex flex-col gap-6 w-full overflow-hidden py-4">
        {/* Left fade out */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-ide-bg to-transparent z-10 pointer-events-none" />
        
        {/* Right fade out */}
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-ide-bg to-transparent z-10 pointer-events-none" />

        {/* Row 1 (Scrolls Left) */}
        <div className="flex w-full overflow-hidden">
          <motion.div
            className="flex gap-4 shrink-0 pr-4 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 30, // Adjust speed
            }}
          >
            {duplicatedRow1.map((skill, index) => (
              <div 
                key={`r1-${index}`} 
                className="px-6 py-3 font-mono text-sm bg-ide-panel border border-ide-border text-ide-string rounded-full whitespace-nowrap shadow-sm hover:border-ide-string transition-colors"
              >
                {skill}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2 (Scrolls Right) */}
        <div className="flex w-full overflow-hidden">
          <motion.div
            className="flex gap-4 shrink-0 pr-4 w-max"
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 25, // Slightly different speed for parallax feel
            }}
          >
            {duplicatedRow2.map((skill, index) => (
              <div 
                key={`r2-${index}`} 
                className="px-6 py-3 font-mono text-sm bg-ide-panel border border-ide-border text-ide-keyword rounded-full whitespace-nowrap shadow-sm hover:border-ide-keyword transition-colors"
              >
                {skill}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
