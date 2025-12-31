"use client"

import React from 'react';
import { Button } from '@/components/ui/button';
import { SignUpButton } from '@clerk/nextjs';
import { motion } from 'framer-motion';

const CTASection = () => {
    return (
        <section className="py-44 bg-zinc-50 border-t border-zinc-100 overflow-hidden relative">
            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-7xl font-bold text-black tracking-tighter mb-8 max-w-4xl mx-auto leading-tight">
                        The future of learning <br />
                        is just one click away.
                    </h2>
                    <p className="text-xl text-zinc-500 mb-12 max-w-xl mx-auto leading-relaxed">
                        Join 50,000+ others who are already upgrading their intelligence with Eduvora.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <SignUpButton mode="modal">
                            <Button size="lg" className="h-14 px-12 text-lg font-bold bg-black text-white hover:bg-zinc-800 rounded-full shadow-xl shadow-black/5 transition-all">
                                Get Started Free
                            </Button>
                        </SignUpButton>
                        <Button
                            size="lg"
                            variant="ghost"
                            className="h-14 px-10 text-lg font-semibold text-zinc-600 hover:text-black hover:bg-white"
                        >
                            Contact Sales
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTASection;
