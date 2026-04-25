"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section className="w-full pb-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-3xl font-bold mb-4 font-mono text-ide-text">
          <span className="text-ide-keyword">import</span> {'{'} <span className="text-ide-variable">education</span> {'}'} <span className="text-ide-keyword">from</span> <span className="text-ide-string">&quot;./academics&quot;</span>;
        </h2>
        <div className="h-px w-full bg-ide-border" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* UT Dallas */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-panel p-8 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-ide-function/5 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110" />
          <div className="flex items-center gap-3 mb-6 relative z-10">
            <div className="p-3 rounded-lg bg-ide-panel border border-ide-border text-ide-function">
              <GraduationCap size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">MS in Computer Engineering</h3>
              <p className="text-sm text-ide-muted font-mono">Jan 2019 - Dec 2020</p>
            </div>
          </div>
          <div className="relative z-10">
            <p className="text-ide-text font-medium mb-1">University of Texas at Dallas</p>
            <p className="text-sm text-ide-muted mb-4">Richardson, TX</p>
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-ide-function/30 bg-ide-function/10 text-ide-function text-sm font-mono">
              GPA: 3.67/4.0
            </div>
          </div>
        </motion.div>

        {/* University of Mumbai */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass-panel p-8 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-ide-accent/5 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110" />
          <div className="flex items-center gap-3 mb-6 relative z-10">
            <div className="p-3 rounded-lg bg-ide-panel border border-ide-border text-ide-accent">
              <GraduationCap size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">BTech in Electrical Engineering</h3>
              <p className="text-sm text-ide-muted font-mono">Jul 2014 - Apr 2018</p>
            </div>
          </div>
          <div className="relative z-10">
            <p className="text-ide-text font-medium mb-1">University of Mumbai</p>
            <p className="text-sm text-ide-muted mb-4">Mumbai, India</p>
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-ide-accent/30 bg-ide-accent/10 text-ide-accent text-sm font-mono">
              GPA: 3.59/4.0
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
