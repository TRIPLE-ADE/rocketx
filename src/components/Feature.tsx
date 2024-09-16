import Link from "next/link";

export default function Feature() {
    return (
        <section className="bg-[url('/bg.webp')] relative">
            <div className="px-12 z-[10] w-full py-40 relative overflow-hidden">
                <div className="shape-large"></div>
                <div className="pt-24 relative">
                    <div className="relative w-full font-black text-white text-7xl tracking-tighter">
                        <h2 className="backup-headline introduction-headline ms500 leading-[120px] w-full absolute left-0 top-[-30px]">Full featured</h2>
                        <h2 className="z-[2] relative pt-14">&amp; Decentralized</h2>
                    </div>
                    <div className="text-white pt-10 w-full h-full">
                        <div className="clear-fix pt-20 relative grid md:grid-cols-3 md:gap-20 md:pr-20">
                            <div className="flex relative">
                                <div className="bg-[url('/intro-shape-7.webp')] bg-contain  bg-no-repeat w-14 h-12 absolute left-0 top-0"></div>
                                <div className="ml-24">
                                    <h3 className="font-bold text-2xl">Access to Global Liquidity</h3>
                                    <p className="text-[15px] leading-8 tracking-tight pt-5 text-primary">
                                        We simplify access to 20,000+ tokens across 450+ exchanges via single intuitive UI &amp; APIs.
                                    </p>
                                </div>
                            </div>
                            <div className="flex relative">
                                <div className="bg-[url('/intro-shape-11.webp')] bg-contain  bg-no-repeat w-14 h-12 absolute left-0 top-0"></div>
                                <div className="ml-24">
                                    <h3 className="font-bold text-2xl">Swap 2 Any Wallet</h3>
                                    <p className="text-[15px] leading-8 tracking-tight pt-5 text-primary">
                                        With 1-click, you can swap from one wallet and receive tokens on a different wallet of your choice.
                                    </p>
                                </div>
                            </div>
                            <div className="flex relative">
                                <div className="bg-[url('/intro-shape-4.webp')] bg-contain  bg-no-repeat w-12 h-12 absolute left-0 top-0"></div>
                                <div className="ml-24">
                                    <h3 className="font-bold text-2xl">Interoperability</h3>
                                    <p className="text-[15px] leading-8 tracking-tight pt-5 text-primary">
                                        We are on a mission to simplify interoperability between all leading blockchains &amp; support 1-Click Cross Swaps.
                                    </p>
                                </div>
                            </div>
                            <div className="flex relative">
                                <div className="star-3d">
                                    <div className="star-particles"></div>
                                </div>
                                <div className="ml-24">
                                    <h3 className="font-bold text-2xl">Best Prices</h3>
                                    <p className="text-[15px] leading-8 tracking-tight pt-5 text-primary">
                                        Compare &amp; Save More with RocketX. We make it easy to compare cryptocurrency prices across hundreds of exchanges and save big with every swap.
                                    </p>
                                </div>
                            </div>
                            <div className="flex relative">
                                <div className="bg-[url('/intro-shape-9.webp')] bg-contain bg-no-repeat w-12 h-12 absolute left-0 top-0"></div>
                                <div className="ml-24">
                                    <h3 className="font-bold text-2xl">Non-custodial</h3>
                                    <p className="text-[15px] leading-8 tracking-tight pt-5 text-primary">Not your keys, not your tokens. We help users take complete control of their tokens.</p>
                                </div>
                            </div>
                            <div className="flex relative">
                                <div className="bg-[url('/intro-shape-8.webp')] bg-contain bg-no-repeat w-14 h-12 absolute left-0 top-0"></div>
                                <div className="ml-24">
                                    <h3 className="font-bold text-2xl">Trading History</h3>
                                    <p className="text-[15px] leading-8 tracking-tight pt-5 text-primary">
                                        All trades on RocketX are just a click away with RVFscan in real-time.
                                        <br />
                                        <Link
                                            href="https://rvfscan.io"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-500 underline"
                                            aria-label="show history"
                                        >
                                            View History
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-full absolute overflow-hidden top-0 left-0">
                <div className="w-full h-full absolute left-0 top-0 bg-[rgba(2,1,23,0.75)] z-[2] backdrop-blur-[80px]"></div>
                <div className="introduction-blur-contents"></div>
            </div>
        </section>
    )
}