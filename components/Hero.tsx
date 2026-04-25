"use client";

import { motion } from "framer-motion";
import { Terminal, Cloud, ServerCog, LayoutTemplate } from "lucide-react";

export default function Hero() {
  return (
    <section className="w-full py-12 flex flex-col items-start pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-2 text-ide-keyword font-mono text-sm mb-6 bg-ide-keyword/10 px-3 py-1 rounded-full border border-ide-keyword/20"
      >
        <Terminal size={14} />
        <span>System.out.println(&quot;Senior Software Engineer&quot;);</span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
      >
        Ameya Chitnis
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-xl md:text-2xl text-ide-muted max-w-3xl leading-relaxed mb-10"
      >
        Architecting <span className="text-ide-string">scalable solutions</span> and specializing in <span className="text-ide-accent">cloud-native enterprise systems</span>. Expert in <span className="text-ide-variable">Node.js</span>, <span className="text-ide-variable">React</span>, and <span className="text-ide-variable">GCP</span>, backed by foundational knowledge in <span className="text-ide-keyword">Java</span> and <span className="text-ide-keyword">Angular</span>.
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-wrap gap-4 font-mono text-sm"
      >
        <div className="flex items-center gap-2 bg-ide-panel border border-ide-border px-4 py-2 rounded-md">
          <Cloud size={16} className="text-ide-function" />
          <span>Cloud-Native Architecture</span>
        </div>
        <div className="flex items-center gap-2 bg-ide-panel border border-ide-border px-4 py-2 rounded-md">
          <ServerCog size={16} className="text-ide-keyword" />
          <span>Event-Driven Backend</span>
        </div>
        <div className="flex items-center gap-2 bg-ide-panel border border-ide-border px-4 py-2 rounded-md">
          <LayoutTemplate size={16} className="text-ide-string" />
          <span>React Dashboards</span>
        </div>
      </motion.div>
    </section>
  );
}
