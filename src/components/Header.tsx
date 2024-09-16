import { AlignJustify, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Header() {
    return (
        <header className="py-6 relative text-white font-bold text-xs z-10 px-10 container mx-auto flex flex-wrap justify-between items-center">
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
                <ul className="flex justify-center space-x-[5.5rem] uppercase font-normal">
                    <li>
                        <Link href="./about" className="hover:text-gray-300 tracking-[0.2em]">
                            About
                        </Link>
                    </li>
                    <li className="relative group hidden xl:block">
                        <button className="hover:text-gray-300 tracking-[0.2em] flex items-start gap-1">ROCKETX <ChevronDown className='-mt-1' /></button>
                        <ul className="absolute hidden group-hover:block bg-white shadow-lg py-2 isolate w-40 z-[10000]">
                            <li>
                                <Link href="#faq" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                                    FAQ
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li >
                        <Link href="./referral" className="hover:text-gray-300 tracking-[0.2em]">
                            REFERRAL
                        </Link>
                    </li>
                    {/* More Dropdown */}
                    <li className="relative group">
                        <button className="hover:text-gray-300 tracking-[0.2em] flex items-start gap-1">MORE <ChevronDown className='-mt-1' /></button>
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
                <p className="rounded-sm font-bold text-[11px] whitespace-nowrap py-2 px-6 bg-secondary">$0.088 BUY RVF</p>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex w-1/2 justify-end">
                <AlignJustify />
            </div>
        </header>
    );
}
