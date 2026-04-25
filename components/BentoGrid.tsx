"use client";

import { motion } from "framer-motion";
import { Lock, Car, BarChart3, CloudCog } from "lucide-react";

export default function BentoGrid() {
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
          <span className="text-ide-keyword">export</span> <span className="text-ide-keyword">const</span> <span className="text-ide-variable">projects</span> = [ ... ];
        </h2>
        <div className="h-px w-full bg-ide-border" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Project 1 - Distributed Systems */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-panel p-8 flex flex-col group relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
            <Lock size={120} className="text-ide-function" />
          </div>
          <div className="flex-1 z-10">
            <div className="flex items-center gap-2 text-ide-function mb-4">
              <Lock size={20} />
              <span className="font-mono text-sm">Java • Linux • Sockets</span>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white">Distributed Mutual Exclusion System</h3>
            <p className="text-ide-muted text-sm leading-relaxed mb-6">
              Programmed a distributed mutual exclusion service for concurrent processes using Lamport&apos;s logical clock algorithm. Decoupled the architecture into Application and Mutual Exclusion modules, ensuring clean separation of concerns and robust inter-node synchronization without deadlocks.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 mt-auto z-10">
            <span className="text-xs bg-ide-panel border border-ide-border px-2 py-1 rounded">Lamport&apos;s Protocol</span>
            <span className="text-xs bg-ide-panel border border-ide-border px-2 py-1 rounded">High Fault Tolerance</span>
            <span className="text-xs bg-ide-panel border border-ide-border px-2 py-1 rounded">Scaled Architectures</span>
          </div>
        </motion.div>

        {/* Project 2 - Ride Sharing DB */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-panel p-8 flex flex-col group relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
            <Car size={80} className="text-ide-string" />
          </div>
          <div className="flex-1 z-10">
            <div className="flex items-center gap-2 text-ide-string mb-3">
              <Car size={16} />
              <span className="font-mono text-sm">SQL • React • AWS</span>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white">Relational Ride-Sharing Database</h3>
            <p className="text-ide-muted text-sm leading-relaxed mb-6">
              Modeled a highly normalized SQL database hosted on AWS. Formulated complex PL/SQL transactions to handle dynamic data relationships for real-world ride-matching and payment routing.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
