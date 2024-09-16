import { AlignJustify, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Header() {
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
            <div className="lg:hidden flex w-1/2 justify-end">
                <AlignJustify />
            </div>
        </header>
    );
}
