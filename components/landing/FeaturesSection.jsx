"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, Sparkles, Target } from 'lucide-react';

const features = [
    {
        icon: <Brain className="h-6 w-6" />,
        title: 'Adaptive AI Platform',
        description: 'Our core engine learns from your habits to optimize your study material dynamically.',
    },
    {
        icon: <Zap className="h-6 w-6" />,
        title: 'Instant Feedback',
        description: 'Solve questions and receive real-time reasoning and corrections from our AI tutor.',
    },
    {
        icon: <Sparkles className="h-6 w-6" />,
        title: 'Creative Curriculum',
        description: 'Generate courses on any topic instantly, tailored specifically to your existing knowledge.',
    },
    {
        icon: <Target className="h-6 w-6" />,
        title: 'Goal Orientation',
        description: 'Set your milestones and let the AI build the shortest and most effective path to reach them.',
    },
];

const FeaturesSection = () => {
    return (
        <section id="features" className="pt-12 pb-32 bg-white overflow-hidden border-t border-zinc-100">
            <div className="container mx-auto px-6 text-center lg:text-left">
                <div className="flex flex-col lg:flex-row justify-between items-start mb-24 gap-8">
                    <div className="max-w-xl">
                        <h2 className="text-3xl md:text-5xl font-bold text-black tracking-tight leading-tight">
                            Built for the next decade <br />
                            of digital learning.
                        </h2>
                    </div>
                    <div className="max-w-md">
                        <p className="text-lg text-zinc-500 leading-relaxed">
                            We've stripped away the complexity of traditional LMS platforms
                            to focus on what truly matters: your cognitive growth.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-zinc-50 flex items-center justify-center text-black mb-8 group-hover:bg-black group-hover:text-white transition-all duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-black mb-4 transition-transform duration-300">
                                {feature.title}
                            </h3>
                            <p className="text-zinc-500 leading-relaxed text-sm">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
