"use client";

import { motion } from "framer-motion";
import { Server, Database, Activity } from "lucide-react";

export default function ExperienceNarrative() {
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
          <span className="text-ide-keyword">const</span> <span className="text-ide-variable">experience</span> = <span className="text-ide-string">"Project Stories"</span>;
        </h2>
        <div className="h-px w-full bg-ide-border" />
      </motion.div>

      <div className="space-y-16 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-ide-border before:to-transparent">
        {/* Story 1: Aloha Upgrade Suite */}
        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-ide-border bg-ide-bg text-ide-accent shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
            <Server size={18} />
          </div>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-panel p-6"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-sm text-ide-keyword">2023 - Present</span>
              <span className="text-xs font-medium px-2.5 py-0.5 rounded border border-ide-accent/20 bg-ide-accent/10 text-ide-accent">NCR Voyix</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Aloha Upgrade Suite Architecture</h3>
            <p className="text-ide-muted text-sm leading-relaxed mb-4">
              Modernized legacy POS infrastructure across 50,000+ global hospitality sites. To achieve a 50% reduction in manual operational labor, I architected a three-tier cloud-native solution. The backend leverages a scalable, event-driven architecture on GCP App Engine using Node.js and TypeScript, handling high-concurrency data syncs via Cloud Tasks, GCP Scheduler, and Firestore.
            </p>
          </motion.div>
        </div>

        {/* Story 2: Site-Readiness Analytics Engine */}
        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-ide-border bg-ide-bg text-ide-function shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
            <Database size={18} />
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-panel p-6"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-sm text-ide-keyword">2023 - Present</span>
              <span className="text-xs font-medium px-2.5 py-0.5 rounded border border-ide-function/20 bg-ide-function/10 text-ide-function">NCR Voyix</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Site-Readiness Analytics Engine</h3>
            <p className="text-ide-muted text-sm leading-relaxed mb-4">
              To guarantee seamless rollouts, I orchestrated a data pipeline using BigQuery to evaluate real-time hardware and software compatibility. By analyzing complex relational datasets, this engine prevents rollout failures before they happen, ensuring a 99%+ deployment success rate for mission-critical POS updates globally.
            </p>
          </motion.div>
        </div>

        {/* Story 3: High-Volume Deployment Agent */}
        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-ide-border bg-ide-bg text-ide-variable shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
            <Activity size={18} />
          </div>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-panel p-6"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-sm text-ide-keyword">2021 - 2023</span>
              <span className="text-xs font-medium px-2.5 py-0.5 rounded border border-ide-variable/20 bg-ide-variable/10 text-ide-variable">NCR Voyix</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Resilient Deployment Agent</h3>
            <p className="text-ide-muted text-sm leading-relaxed mb-4">
              Constructed a resilient Node.js/TypeScript agent for Windows Service to execute local hardware updates. Implemented self-healing capabilities via Choco CLI and JFrog CLI, maintaining 98.99% local agent availability while optimizing secure RESTful APIs for massive global enterprise telemetry data transfer.
            </p>
          </motion.div>
        </div>

        {/* Story 4: Image Processing Research */}
        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-ide-border bg-ide-bg text-ide-keyword shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
            <Activity size={18} />
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-panel p-6"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-sm text-ide-keyword">Jun 2018 - Dec 2018</span>
              <span className="text-xs font-medium px-2.5 py-0.5 rounded border border-ide-keyword/20 bg-ide-keyword/10 text-ide-keyword">Univ of Mumbai</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Diagnostic Image Processing Algorithm</h3>
            <p className="text-ide-muted text-sm leading-relaxed mb-4">
              Devised a Python-based image processing algorithm to compute the tortuosity of retinal blood vessels. Executed computer vision techniques like dynamic thresholding and arithmetic filtration to isolate complex vascular structures, supporting diagnostic medical research.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
