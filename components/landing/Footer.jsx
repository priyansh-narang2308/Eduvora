"use client"

import React from 'react';
import Link from 'next/link';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="py-24 bg-white border-t border-zinc-100 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="flex items-center space-x-2 mb-8">
                            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                                <span className="text-white font-black text-lg">E</span>
                            </div>
                            <span className="text-lg font-bold text-black font-sans">Eduvora</span>
                        </Link>
                        <p className="text-zinc-500 text-sm leading-relaxed max-w-[240px]">
                            Crafting the future of human learning through intelligent design and adaptive AI.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-black font-bold text-sm mb-8 tracking-wider uppercase">Product</h4>
                        <ul className="space-y-4 text-zinc-500 text-sm font-medium">
                            <li><a href="#features" className="hover:text-black transition-colors">Features</a></li>
                            <li><a href="#" className="hover:text-black transition-colors">Pricing</a></li>
                            <li><a href="#" className="hover:text-black transition-colors">Dashboard</a></li>
                            <li><a href="#" className="hover:text-black transition-colors">Courses</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-black font-bold text-sm mb-8 tracking-wider uppercase">Legal</h4>
                        <ul className="space-y-4 text-zinc-500 text-sm font-medium">
                            <li><a href="#" className="hover:text-black transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-black transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-black transition-colors">Cookie Policy</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-black font-bold text-sm mb-8 tracking-wider uppercase">Connect</h4>
                        <ul className="space-y-4 text-zinc-500 text-sm font-medium">
                            <li><a href="#" className="hover:text-black transition-colors">Twitter (X)</a></li>
                            <li><a href="#" className="hover:text-black transition-colors">GitHub</a></li>
                            <li><a href="#" className="hover:text-black transition-colors">Discord</a></li>
                            <li><a href="#" className="hover:text-black transition-colors">LinkedIn</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-zinc-500 text-xs tracking-wide font-medium">
                        &copy; {currentYear} Eduvora AI. Made with precision for the future.
                    </p>
                    <div className="flex items-center space-x-6 text-zinc-500 text-xs font-semibold">
                        <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.4)]"></span>
                        <span className="tracking-widest uppercase">All Systems Operational</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
