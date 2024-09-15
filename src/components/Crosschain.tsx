export default function Crosschain() {
    return (
        <div className="bg-white relative">
            <div className="overflow-hidden relative py-[300px] w-full">
                <ul className="absolute top-0 w-full h-full z-[5] list-none skew-x-[59deg] skew-y-[59deg]">
                    <li className="float-left w-1/5 relative h-full"><span className="crosschain-line"></span></li>
                    <li className="float-left w-1/5 relative h-full"><span className="crosschain-line"></span></li>
                    <li className="float-left w-1/5 relative h-full"><span className="crosschain-line"></span></li>
                    <li className="float-left w-1/5 relative h-full"><span className="crosschain-line"></span></li>
                    <li className="float-left w-1/5 relative h-full"><span className="crosschain-line"></span></li>
                    <li className="float-left w-1/5 relative h-full"><span className="crosschain-line"></span></li>
                </ul>
                <div className="shape-crosschain"></div>
                <div className="relative m-auto w-full lg:w-3/5 lg:mb-0 text-black text-center">
                    <div className="z-10 relative w-full">
                        <h2 className="backup-headline font-black ms500 text-white text-[100px] text-center tracking-[-0.05em] leading-[120px] w-full absolute left-0 top-[-35px]">Swap</h2>
                        <h2 className="ms500 text-[100px] text-[#2f1c66] relative z-[2] mt-10 tracking-tighter font-black">Crosschain</h2>
                    </div>
                    <p className="text-primary z-10 relative pt-8 tracking-wide leading-8 text-xl text-center">Swap your assets seamlessly across multiple blockchain networks with RocketX cross-chain swap feature. Whether you want to swap BTC to ETH, ETH to BNB or ETH to AVAX, our platform allows you to exchange one cryptocurrency for another, on all leading blockchains, without any hassle. Enjoy fast and secure trades with our cutting-edge cross-chain swap technology.</p>
                    <ul className="font-bold list-none relative z-10 p-16">
                        {/* <li data-global-stat="swaps">
                            <img src="/networks-icon.png" alt="blockchains" className="crosschain-stats-icon" />
                            <h4>654,145</h4>
                            <h6>swaps</h6>
                        </li>
                        <li data-global-stat="volume">
                            <img src="/volume-icon-1.png" alt="volume" className="crosschain-stats-icon" />
                            <h4>$1.147B</h4>
                            <h6>Total volume</h6>
                        </li>
                        <li data-global-stat="networks">
                            <img src="/swap-icon.png" alt="swaps" className="crosschain-stats-icon swap-icon" />
                            <h4>161</h4>
                            <h6>networks</h6>
                        </li> */}
                        {/* <li className="clear-fix box-sizing crosschain-information-list">
                                <a href="https://app.rocketx.exchange/swap" target="_blank" rel="noopener noreferrer"><div className="crosschain-stats-button">Try it out</div></a>
                                <div className="crosschain-network"><img src="https://cdn.rocketx.exchange/pd135zq/website/ui/crosschain/bnb-chain.png" alt="bnb-chain" /></div>
                                <div className="crosschain-network"><img src="https://cdn.rocketx.exchange/pd135zq/website/ui/crosschain/eth.png" alt="eth" /></div>
                                <div className="crosschain-network"><img src="https://cdn.rocketx.exchange/pd135zq/website/ui/crosschain/btc.png" alt="btc" /></div>
                                <div className="crosschain-network"><img src="https://cdn.rocketx.exchange/pd135zq/website/ui/crosschain/polygon.png" alt="polygon" /></div>
                                <div className="crosschain-network"><img src="https://cdn.rocketx.exchange/pd135zq/website/ui/crosschain/avalanche.png" alt="avalanche" /></div>
                                <div className="crosschain-network"><img src="https://cdn.rocketx.exchange/pd135zq/website/ui/crosschain/optimism.png" alt="optimism" /></div>
                                <div className="crosschain-network"><img src="https://cdn.rocketx.exchange/pd135zq/website/ui/crosschain/fantom.png" alt="fantom" /></div>
                                <div className="crosschain-network"><img src="https://cdn.rocketx.exchange/pd135zq/website/ui/crosschain/solana.png" alt="solana" /></div>
                                <div className="crosschain-network"><img src="https://cdn.rocketx.exchange/pd135zq/website/ui/crosschain/arbitrum.png" alt="arbitrum" /></div>
                                <div className="crosschain-network"><img src="https://cdn.rocketx.exchange/pd135zq/website/ui/crosschain/kcc.png" alt="kcc" /></div>
                                <div className="crosschain-network"><img src="https://cdn.rocketx.exchange/pd135zq/website/ui/crosschain/telos.png" alt="telos" /></div>
                                <div className="crosschain-network"><img src="https://cdn.rocketx.exchange/pd135zq/website/ui/crosschain/klaytn.png" alt="klaytn" /></div>
                                <div className="crosschain-network"><img src="https://cdn.rocketx.exchange/pd135zq/website/ui/crosschain/aurora.png" alt="aurora" /></div>
                                <div className="crosschain-network"><img src="https://cdn.rocketx.exchange/pd135zq/website/ui/crosschain/moonbeam.png" alt="moonbeam" /></div>
                                <div className="crosschain-network plus-more">+</div>
                            </li> */}
                    </ul>
                </div>
                <div className="crosschain-blur-wrapper">
                    <div className="crosschain-blur-overlay"></div>
                    <div className="crosschain-blur-contents"></div>
                </div>
            </div>
        </div>
    );
}
