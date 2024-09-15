export default function Referral() {
    return (
        <section className="bg-accent-foreground relative">
            <div className="px-12 z-[10] w-full py-40 relative overflow-hidden">
                <ul className="absolute top-0 w-full h-full z-[5] list-none">
                    <li className="float-left w-1/5 relative h-full"><span className="rewards-line"></span></li>
                    <li className="float-left w-1/5 relative h-full"><span className="rewards-line"></span></li>
                    <li className="float-left w-1/5 relative h-full"><span className="rewards-line"></span></li>
                    <li className="float-left w-1/5 relative h-full"><span className="rewards-line"></span></li>
                    <li className="float-left w-1/5 relative h-full"><span className="rewards-line"></span></li>
                    <li className="float-left w-1/5 relative h-full"><span className="rewards-line"></span></li>
                </ul>
                <div className="relative pt-72 pb-36">
                    <div className="rewards-right w-1/2 h-full absolute top-0 right-0">
                        <div className="banner-rewards-1"></div>
                        <div className="shape-rewards"></div>
                    </div>
                    <div className="relative w-full font-black text-white text-[100px] tracking-tighter">
                        <h2 className="backup-headline referral-headline leading-[120px] text-black w-full absolute left-0 top-[-30px ms500">Referral</h2>
                        <h2 className="z-[2] relative pt-10 text-[#1f2e45] ms500">&amp; Rewards</h2>
                    </div>
                    <p>
                        Are you tired of simply holding your crypto assets with no added benefits? The wait is over!
                        <br />
                        <br />
                        If you refer RocketX to your friends and family, you will start earning 50% commission in USDT on a monthly basis.
                    </p>
                    <a href="referral" className="rewards-rvf-button font-bold" aria-label="about referral">Referral</a>
                    <a href="https://app.rocketx.exchange/referral" target="_blank" rel="noopener noreferrer" aria-label="get my referral link" className="rewards-ref-button font-bold">Get my ref link</a>
                    <ul className="rewards-stats clear-fix box-sizing font-bold">
                        <li className="box-sizing">
                            <img src="https://cdn.rocketx.exchange/pd135zq/website/ui/ref-icon.png" className="rewards-stats-icon" alt="referral" />
                            <h4>Refer &amp; Earn</h4>
                            <h6>Up to 50% Comission</h6>
                        </li>
                        <li className="box-sizing">
                            <img src="https://cdn.rocketx.exchange/pd135zq/website/ui/sign-up-icon.png" className="rewards-stats-icon" alt="sign-up" />
                            <h4>Get 100% Discount</h4>
                            <h6>
                                HODL RVF
                            </h6>
                        </li>
                    </ul>
                    <div className="check-out-benefits">
                        Check out the
                        <a href="https://www.rocketx.exchange/blog/top-3-benefits-of-holding-rvf-tokens" target="_blank" rel="noopener noreferrer">benefits</a> of holding RVF.
                    </div>
                </div>
                <div className="rewards-dapp-outer box-sizing">
                    <div className="reward-distribution box-sizing">
                        <ul className="reward-distribution-header clear-fix box-sizing">
                            <li className="reward-distribution-header-section font-bold">
                                <div className="reward-icon"></div>
                                <h3>$7,800</h3>
                                <h6>ready for distribution</h6>
                            </li>
                            <li className="reward-distribution-header-section font-bold">
                                <div className="reward-icon"></div>
                                <h3>$82,100</h3>
                                <h6>all time earnings</h6>
                            </li>
                        </ul>
                    </div>
                    <div className="reward-pending box-sizing">
                        <div className="reward-pending-inner box-sizing font-bold">
                            <div className="piggy"></div>
                            <h3>$920</h3>
                            <h6>pending this month</h6>
                        </div>
                    </div>
                    <div className="rewards-dapp-inner"></div>
                </div>
            </div>
            <div className="w-full h-full absolute overflow-hidden top-0 left-0">
                <div className="w-full h-full absolute left-0 top-0 bg-[rgba(255,255,255,.4)] z-[2] backdrop-blur-[130px]"></div>
                <div className="rewards-blur-contents"></div>
            </div>
        </section>
    )
}