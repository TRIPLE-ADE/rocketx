'use client';
import { Button } from "@/components/ui/button";
import BlurFade from "@/components/magicui/blur-fade";
import { Switch } from "../ui/switch";
import Image from "next/image";
import { useGetCoins, useGetExchangeRate, useGetCoinByID, Coin } from '@/api/coins';
import { useState, useEffect } from "react";

export default function Connect() {

    const [selectedFrom, setSelectedFrom] = useState<Coin | null>(null);
    const [selectedTo, setSelectedTo] = useState<Coin | null>(null);
    const [fromAmount, setFromAmount] = useState<string>('0.0');
    const [toAmount, setToAmount] = useState<string>('0.0');
    const [exchangeRate, setExchangeRate] = useState<number>(0);

    // Set default selections once coins are loaded
    const { data: coins = [], isLoading: loadingCoins } = useGetCoins();
    // Fetch coin details only after a coin is selected
    const { data: fromCoinDetail, isLoading: loadingFromCoin } = useGetCoinByID(selectedFrom?.id ?? '');
    const { data: toCoinDetail, isLoading: loadingToCoin } = useGetCoinByID(selectedTo?.id ?? '');

    useEffect(() => {
        if (coins.length > 0) {
            setSelectedFrom(coins[0]);
            setSelectedTo(coins[1]);
        }
    }, [coins]);

    const { data: exchangeRateData } = useGetExchangeRate(selectedFrom?.id ?? '', selectedTo?.id ?? '');

    // Update exchange rate when data is available
    useEffect(() => {
        if (exchangeRateData && selectedFrom && selectedTo) {
            const fromPrice = exchangeRateData[selectedFrom.id]?.usd;
            const toPrice = exchangeRateData[selectedTo.id]?.usd;
            if (fromPrice && toPrice) {
                setExchangeRate(toPrice / fromPrice);
            }
        }
    }, [exchangeRateData, selectedFrom, selectedTo]);

    const handleFromAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setFromAmount(value);
        setToAmount((parseFloat(value) * exchangeRate).toFixed(2));
    };

    const handleCoinChange = (type: 'from' | 'to', coin: Coin) => {
        if (type === 'from') {
            setSelectedFrom(coin);
        } else {
            setSelectedTo(coin);
        }
    };

    return (
        <BlurFade delay={0.15}>
            <div className="flex relative justify-center">
                <div className={`loader absolute z-50 top-[50%] ${loadingCoins || loadingFromCoin || loadingToCoin ? '' : 'hidden'}`}></div>
                <section className={`connect-card text-xs max-w-[480px] md:max-w-none ${loadingCoins || loadingFromCoin || loadingToCoin ? 'blur-sm' : ''}`}>
                    <div className="flex items-center justify-between pb-5">
                        <p className="uppercase py-[7px] px-2.5 ml-2">SWAP</p>
                        <Button size="icon">
                            <Image src="/setting.png" alt="setting icon" width="16" height="16" />
                        </Button>
                    </div>
                    <div className="flex gap-5">
                        <div className="font-bold text-[10px] cursor-pointer text-center w-14 flex gap-1.5 justify-center flex-col items-center">
                            <div className="flex gap-1.5 flex-col items-center">
                                <Image
                                    src={fromCoinDetail?.image || '/ethereum-grey.png'}
                                    alt={fromCoinDetail?.name || 'Coin Network'}
                                    width={24}
                                    height={24}
                                />
                                <span className="uppercase">{fromCoinDetail?.name || 'Ethereum Network'}</span>
                            </div>
                            <div className="my-2.5">
                                <Image src="/path.png" alt="divider" width={1} height={8} />
                            </div>
                            <div className="flex gap-1.5 flex-col items-center">
                                <Image
                                    src={toCoinDetail?.image || '/ethereum-grey.png'}
                                    alt={toCoinDetail?.name || 'Coin Network'}
                                    width={24}
                                    height={24}
                                />
                                <span className="uppercase">{toCoinDetail?.name || 'Ethereum Network'}</span>
                            </div>
                        </div>
                        <div className="font-bold text-[10px] relative cursor-pointer text-center w-full flex gap-2.5 flex-col">
                            <div className="bg-secondary py-2.5 px-3.5 h-20 rounded flex justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="rounded-full bg-secondary-foreground p-2 flex flex-col justify-center items-center">
                                        <Image
                                            src={fromCoinDetail?.image || '/ethereum-grey.png'}
                                            alt={fromCoinDetail?.name || 'Coin Network'}
                                            width={24}
                                            height={24}
                                            className="min-w-[20px] min-h-[20px]"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <input
                                            type="number"
                                            value={fromAmount}
                                            onChange={handleFromAmountChange}
                                            placeholder="0.0"
                                            className="token-amount-input w-full [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                        />
                                        <span className="text-[#7D8CA3] text-start mt-4 text-[11px]">
                                            {isNaN(parseFloat(fromAmount) * exchangeRate) ? '' : `~$ ${(parseFloat(fromAmount) * exchangeRate).toFixed(2)}`}
                                        </span>
                                    </div>
                                </div>
                                <select
                                    value={selectedFrom?.id ?? ''}
                                    onChange={(e) => handleCoinChange('from', coins.find(coin => coin.id === e.target.value)!)}
                                    className="rounded bg-secondary outline-none text-[13px] px-2 py-1 border-none focus-none w-16"
                                >
                                    {coins.map((coin) => (
                                        <option key={coin.id} value={coin.id}>{coin.symbol.toUpperCase()}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="absolute top-[40%] left-[43%] rounded-full bg-secondary-foreground w-9 h-9 flex flex-col justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="18" height="18" viewBox="0 0 512 512" preserveAspectRatio="xMidYMid meet">
                                    <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" stroke="none">
                                        <path fill="#fff9" d="M1710 3200 l0 -1490 -425 -2 -425 -3 635 -635 635 -635 0 2128 0 2127 -210 0 -210 0 0 -1490z"></path>
                                        <path fill="#fff9" d="M2990 2562 l0 -2132 210 0 210 0 0 1490 0 1490 425 0 c234 0 425 3 425 8 0 4 -286 293 -635 642 l-635 635 0 -2133z"></path>
                                    </g>
                                </svg>
                            </div>
                            <div className="bg-secondary py-2.5 px-3.5 h-20 rounded flex justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="rounded-full bg-secondary-foreground p-2 flex flex-col justify-center items-center">
                                        <Image
                                            src={toCoinDetail?.image || '/ethereum-grey.png'}
                                            alt={toCoinDetail?.name || 'Coin Network'}
                                            width={24}
                                            height={24}
                                            className="min-w-[20px] min-h-[20px]"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="token-amount-input text-center w-full">{isNaN(parseFloat(toAmount)) ? '' : toAmount}</span>
                                        <span className="text-[#7D8CA3] text-start mt-4 text-[11px]">
                                            {isNaN(parseFloat(toAmount) * exchangeRate) ? '' : ` ~$ ${(parseFloat(toAmount) * exchangeRate).toFixed(2)}`}
                                        </span>
                                    </div>
                                </div>
                                <select
                                    value={selectedTo?.id ?? ''}
                                    onChange={(e) => handleCoinChange('from', coins.find(coin => coin.id === e.target.value)!)}
                                    className="rounded bg-secondary outline-none  text-[13px] px-2 py-1 border-none focus-none w-16"
                                >
                                    {coins.map((coin) => (
                                        <option key={coin.id} value={coin.id}>{coin.symbol.toUpperCase()}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between mt-5 px-2.5">
                        <p className="uppercase text-primary font-bold">Fastest Quote</p>
                        <Switch />
                    </div>
                    <Button className="uppercase p-10 h-auto text-base connect-btn font-bold">
                        Connect Wallet
                    </Button>
                    <div className="font-bold flex flex-col gap-2.5 p-5">
                        <div className="flex items-center justify-between text-sm">
                            <p>YOU SAVE</p>
                            <p className="text-custom">~ $0.39</p>
                        </div>
                        <div className="w-full my-2.5">
                            <Image src="/divider.png" alt="divider" layout="responsive" width={100} height={2} />
                        </div>
                        <div className="flex items-center justify-between">
                            <p className="text-primary">SLIPPAGE TOLERANCE :</p>
                            <p>1.00 %</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <p className="text-primary">PRICE IMPACT</p>
                            <p>-0.5%</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <p className="text-primary">1 RVF(V2) BUY PRICE</p>
                            <p>~ $0.0906</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <p className="text-primary">1 ETH SELL PRICE</p>
                            <p>~ $2,412.92</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <p className="text-primary">PLATFORM FEE</p>
                            <p>~ 0.20%</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <p className="text-primary">FEE DISCOUNT</p>
                            <p>0%</p>
                        </div>
                    </div>
                </section>
            </div>
        </BlurFade>
    );
}
