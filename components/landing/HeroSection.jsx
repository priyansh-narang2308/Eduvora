"use client"

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { SignUpButton } from '@clerk/nextjs';
import { motion } from 'framer-motion';

const HeroSection = () => {
    return (
        <section className="relative pt-44 pb-32 bg-white overflow-hidden">
            {/* Subtle Background Accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-blue-50/50 blur-[120px] rounded-full pointer-events-none opacity-50"></div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <div className="max-w-[900px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center px-4 py-1.5 rounded-full bg-zinc-50 border border-zinc-100 text-zinc-500 text-sm font-medium mb-10"
                    >
                        <span className="w-2 h-2 rounded-full bg-blue-600 mr-2.5 animate-pulse"></span>
                        Trusted by 50,000+ learners worldwide
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl md:text-[84px] font-bold tracking-tight text-black leading-[1.05] mb-8"
                    >
                        The intelligent way <br />
                        to <span className="text-zinc-400">master new skills.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl md:text-2xl text-zinc-500 mb-12 max-w-2xl mx-auto leading-relaxed"
                    >
                        Eduvora uses advanced AI to craft personalized learning paths
                        that adapt to your pace, style, and goals.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-5"
                    >
                        <SignUpButton mode="modal">
                            <Button size="lg" className="h-14 px-10 text-lg font-bold bg-black text-white hover:bg-zinc-800 rounded-full transition-all duration-300">
                                Start Your Journey
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </SignUpButton>
                        <Button
                            size="lg"
                            variant="ghost"
                            className="h-14 px-10 text-lg font-semibold text-zinc-500 hover:text-black hover:bg-zinc-50 rounded-full"
                        >
                            See how it works
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
