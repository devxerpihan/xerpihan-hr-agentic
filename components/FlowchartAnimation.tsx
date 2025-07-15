'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Users, Building, Rocket } from 'lucide-react';

const phases = [
  {
    icon: Users,
    title: 'Survival',
    employees: '1 Employee',
    description: 'Basic compliance and onboarding to get your first hire started right.',
    color: 'text-red-400',
  },
  {
    icon: Building,
    title: 'Foundation',
    employees: '2-10 Employees',
    description: 'Structured HR policies, contracts, and performance management.',
    color: 'text-yellow-400',
  },
  {
    icon: Rocket,
    title: 'Scaling',
    employees: '11-50 Employees',
    description: 'Advanced talent acquisition, retention strategies, and growth planning.',
    color: 'text-green-400',
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.5,
      ease: 'easeOut' as const,
    },
  }),
};

const FlowchartAnimation = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="relative flex justify-between items-center">
        <motion.div
          className="absolute top-1/2 left-0 w-full h-1 bg-gray-700 -translate-y-1/2"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />
        {phases.map((phase, i) => (
          <motion.div
            key={phase.title}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="relative z-10"
          >
            <div className="bg-gray-800 rounded-full w-16 h-16 flex items-center justify-center border-4 border-gray-900">
              <phase.icon className={`w-8 h-8 ${phase.color}`} />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {phases.map((phase, i) => (
          <motion.div
            key={phase.title}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg text-center"
          >
            <h4 className={`text-xl font-bold ${phase.color}`}>{phase.title}</h4>
            <p className="text-gray-400 font-semibold">{phase.employees}</p>
            <p className="mt-2 text-gray-300">{phase.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FlowchartAnimation; 