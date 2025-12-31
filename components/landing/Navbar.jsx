"use client"

import React from 'react';
import { Button } from '@/components/ui/button';
import { LayoutDashboard } from 'lucide-react';
import { SignInButton, SignUpButton, UserButton, SignedIn, SignedOut } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Navbar = () => {
    const navigate = useRouter();

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-2.5">
                    <div className="w-9 h-9 bg-black rounded-xl flex items-center justify-center">
                        <span className="text-white font-black text-xl tracking-tighter">E</span>
                    </div>
                    <span className="text-xl font-bold tracking-tight text-black hover:opacity-80 transition-opacity">
                        Eduvora
                    </span>
                </Link>

                <div className="hidden md:flex items-center space-x-8">
                    <a href="#features" className="text-sm font-medium text-zinc-500 hover:text-black transition-colors">Features</a>
                    <a href="#" className="text-sm font-medium text-zinc-500 hover:text-black transition-colors">Courses</a>
                    <a href="#" className="text-sm font-medium text-zinc-500 hover:text-black transition-colors">Pricing</a>
                </div>

                <div className="flex items-center space-x-4">
                    <SignedIn>
                        <Button
                            variant="ghost"
                            onClick={() => navigate.push('/workspace')}
                            className="text-zinc-600 hover:text-black hover:bg-zinc-50"
                        >
                            <LayoutDashboard className="mr-2 h-4 w-4" />
                            Dashboard
                        </Button>
                        <UserButton afterSignOutUrl="/" />
                    </SignedIn>
                    <SignedOut>
                        <SignInButton mode="modal">
                            <Button variant="ghost" className="text-zinc-600 hover:text-black font-medium">
                                Sign In
                            </Button>
                        </SignInButton>
                        <SignUpButton mode="modal">
                            <Button className="bg-black text-white hover:bg-zinc-800 font-semibold px-5 rounded-full shadow-lg shadow-black/5 transition-all">
                                Get Started
                            </Button>
                        </SignUpButton>
                    </SignedOut>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
