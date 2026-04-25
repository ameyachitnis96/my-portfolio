"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Network, ServerCog, LayoutTemplate } from "lucide-react";

export default function SkillsMatrix() {
  const [activeTab, setActiveTab] = useState<"architecture" | "backend" | "frontend">("architecture");

  const skills = {
    architecture: {
      icon: <Network size={20} />,
      color: "text-ide-function",
      bg: "bg-ide-function/10",
      border: "border-ide-function/30",
      title: "Architecture & System Design",
      items: [
        { name: "Microservices", context: "Decoupled domain logic ensuring high fault tolerance." },
        { name: "Event-Driven", context: "GCP Cloud Tasks & Scheduler for high-concurrency." },
        { name: "RESTful APIs", context: "Secure, low-latency endpoints for telemetry transfer." },
        { name: "CI/CD", context: "GitHub Actions & JFrog AQL for strict deployment gating." },
      ]
    },
    backend: {
      icon: <ServerCog size={20} />,
      color: "text-ide-variable",
      bg: "bg-ide-variable/10",
      border: "border-ide-variable/30",
      title: "Backend & Cloud (GCP/AWS)",
      items: [
        { name: "Node.js & TypeScript", context: "Strict type-safety for enterprise-scale agents." },
        { name: "GCP Services", context: "App Engine, Firestore, Cloud Tasks, and BigQuery." },
        { name: "Java & Spring Boot", context: "Legacy system integration and robust backend." },
        { name: "SQL/PL-SQL", context: "Complex relational queries reducing rendering speeds." },
      ]
    },
    frontend: {
      icon: <LayoutTemplate size={20} />,
      color: "text-ide-string",
      bg: "bg-ide-string/10",
      border: "border-ide-string/30",
      title: "Frontend & UI",
      items: [
        { name: "React.js & Next.js", context: "Building complex state management dashboards." },
        { name: "TypeScript", context: "Ensuring interface contracts between UI and Backend." },
        { name: "Tailwind CSS", context: "Utility-first scalable styling for modern interfaces." },
        { name: "Material UI", context: "Foundational component libraries for dashboards." },
      ]
    }
  };

  return (
    <section className="w-full">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-3xl font-bold mb-4 font-mono text-ide-text">
          <span className="text-ide-keyword">const</span> <span className="text-ide-function">skillsMatrix</span> = <span className="text-ide-keyword">new</span> <span className="text-ide-variable">Map</span>();
        </h2>
        <div className="h-px w-full bg-ide-border" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {(Object.keys(skills) as Array<keyof typeof skills>).map((key) => (
          <motion.div
            key={key}
            onClick={() => setActiveTab(key)}
            whileHover={{ scale: 1.02 }}
            className={`cursor-pointer glass-panel p-6 transition-all duration-300 ${activeTab === key ? `ring-2 ring-opacity-50 ring-offset-2 ring-offset-ide-bg ${key === 'architecture' ? 'ring-ide-function' : key === 'backend' ? 'ring-ide-variable' : 'ring-ide-string'}` : 'hover:border-ide-muted'}`}
          >
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${skills[key].bg} ${skills[key].color} border ${skills[key].border}`}>
              {skills[key].icon}
            </div>
            <h3 className="text-xl font-bold mb-2 capitalize">{skills[key].title}</h3>
            <p className="text-sm text-ide-muted font-mono">View {skills[key].items.length} implementations →</p>
          </motion.div>
        ))}
      </div>

      <motion.div 
        key={activeTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="mt-8 glass-panel p-6 md:p-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills[activeTab].items.map((item, idx) => (
            <div key={idx} className="group border border-ide-border rounded-lg p-4 hover:bg-ide-panel/80 transition-colors">
              <h4 className={`font-mono text-lg mb-2 ${skills[activeTab].color}`}>{item.name}</h4>
              <p className="text-sm text-ide-text/80 leading-relaxed">{item.context}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
