'use client'
import { AlignJustify, ChevronDown, PlusIcon, XIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { Button } from '../ui/button';
import useToggle from '@/utils/hooks';

export default function Header() {
    const { isOpen: isMobileMenuOpen, toggle: toggleMobileMenu } = useToggle();

    const [openSection, setOpenSection] = useState<string | null>(null); // Tracks the open section

    // Function to toggle the section
    const toggleSection = (section: string) => {
        setOpenSection(openSection === section ? null : section);
    };
    return (
        <header className="py-10 relative text-primary font-bold text-xs z-10 px-4 container mx-auto flex flex-wrap justify-between items-center">
            {/* Logo */}
            <Link href="./swap" className="block">
                <Image
                    src="/rocketx-new-logo.png"
                    alt="RocketX Logo"
                    loading="lazy"
                    width={140}
                    height={140}
                />
            </Link>

            {/* Navigation Links */}
            <nav className="hidden lg:block">
                <ul className="flex justify-center space-x-4">
                    <li>
                        <Link href="./swap" className="text-white hover:text-white">
                            SWAP
                        </Link>
                    </li>
                    <li className='hidden xl:block'>
                        <Link href="./referral" className="hover:text-white">
                            REFERRAL
                        </Link>
                    </li>
                    <li>
                        <Link href="./analytics" className="hover:text-white">
                            ANALYTICS
                        </Link>
                    </li>
                    <li>
                        <Link href="./help" className="hover:text-white">
                            HELP
                        </Link>
                    </li>
                    <li>
                        <Link href="./staking" className="hover:text-white">
                            STAKING
                        </Link>
                    </li>

                    {/* More Dropdown */}
                    <li className="relative group">
                        <button className="hover:text-white flex items-start gap-1">MORE <ChevronDown className='-mt-1' /></button>
                        <ul className="absolute hidden group-hover:block bg-white shadow-lg py-2 isolate w-40 z-[10000]">
                            <li>
                                <Link href="#faq" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                                    FAQ
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>

            {/* Right Side (Desktop) */}
            <div className="hidden lg:flex space-x-4 items-center">
                <div className="text-primary rounded-sm whitespace-nowrap py-2 px-4 bg-secondary">$0.088 BUY RVF</div>
                <div className="flex text-white items-center rounded-sm space-x-2 whitespace-nowrap py-2 px-4 bg-secondary">
                    <Image src="/wallet.png" width={16} height={16} alt="Wallet" className="h-4" />
                    <span>CONNECT WALLET</span>
                </div>
                <div className="flex text-white items-center rounded-sm space-x-2 whitespace-nowrap py-2 px-4 bg-secondary">
                    <Image src="/historyIcon.png" width={16} height={16} alt="History" className="h-4" />
                    <span>HISTORY</span>
                </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex justify-end gap-2">
                <Button className='text-white font-semibold'>
                    <Image src="/wallet.png" alt="wallet" width={15} height={15} className='mr-1' />
                    CONNECT
                </Button>
                <Button className='p-2' onClick={toggleMobileMenu}>
                    <AlignJustify />
                </Button>
            </div>
            {/* Mobile Menu */}
            <div className={`lg:hidden fixed text-[13px] isolate  top-0 right-0 h-full w-full pt-10 bg-black text-white z-[10000] transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300`}>
                <div className="flex justify-end pr-4">
                    {/* Close button */}
                    <button onClick={toggleMobileMenu} className='bg-primary h-10 px-3.5 rounded-sm flex flex-col mt-7 items-center justify-center'>
                        <XIcon className="w-6 h-6 text-white" />
                    </button>
                </div>
                <ul className="flex flex-col p-4 space-y-4 uppercase">
                    {/* Home Dropdown */}
                    <li>
                        <button onClick={() => toggleSection('home')} className="flex uppercase font-bold justify-between items-center px-4 py-2 w-full">
                            Home
                            <PlusIcon className={`transition-transform ${openSection === 'home' ? 'rotate-180' : 'rotate-0'}`} />
                        </button>
                        {openSection === 'home' && (
                            <ul className="pl-4 space-y-2 text-[#7D8CA3]">
                                <li>
                                    <Link href="#features" className="block px-4 py-2">
                                        Features
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#audit" className="block px-4 py-2">
                                        Audit
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#roadmap" className="block px-4 py-2">
                                        Roadmap
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#rvf-utility" className="block px-4 py-2">
                                        RVF Utility
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </li>

                    {/* About Dropdown */}
                    <li>
                        <button onClick={() => toggleSection('about')} className="flex uppercase font-bold justify-between items-center px-4 py-2 w-full">
                            About
                            <PlusIcon className={`transition-transform ${openSection === 'about' ? 'rotate-180' : 'rotate-0'}`} />
                        </button>
                        {openSection === 'about' && (
                            <ul className="pl-4 space-y-2 text-[#7D8CA3]">
                                <li>
                                    <Link href="#ecosystem" className="block px-4 py-2">
                                        Ecosystem
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#timeline" className="block px-4 py-2">
                                        Timeline
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#partners" className="block px-4 py-2">
                                        Partners
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </li>

                    {/* Other Menu Items */}
                    <li>
                        <Link href="#blog" className="block px-4 py-2 font-bold uppercase">
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link href="#faq" className="block px-4 py-2 font-bold uppercase">
                            FAQ
                        </Link>
                    </li>
                    <li>
                        <Link href="#vision-paper" className="block px-4 py-2 font-bold uppercase">
                            VISION PAPER
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}
