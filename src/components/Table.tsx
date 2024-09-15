export default function Table() {
    const data = [
        {
            exchange: "Paraswap",
            type: "DEX | INSTANT",
            logo: "https://avatars.githubusercontent.com/u/52015910?s=280&v=4",
            quote: "27,363.97 RVF(V2)",
            minReceived: "27,036.08 RVF(V2)",
            gasFee: "$0.64",
            youSave: "$0.39",
            fastest: true,
            best: true,
        },
        {
            exchange: "1INCH",
            type: "DEX | INSTANT",
            logo: "https://assets.coingecko.com/coins/images/13469/small/1inch-token.png?1608803028",
            quote: "27,363.97 RVF(V2)",
            minReceived: "27,035.71 RVF(V2)",
            gasFee: "$1.00",
            youSave: "$0.00",
            fastest: false,
            best: false,
        },
        {
            exchange: "UniswapV2",
            type: "DEX | INSTANT",
            logo: "https://assets.coingecko.com/markets/images/535/small/256x256_Black-1.png?1590893262",
            quote: "27,363.97 RVF(V2)",
            minReceived: "27,090.33 RVF(V2)",
            gasFee: "$0.77",
            youSave: "",
            fastest: false,
            best: false,
        },
    ];

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full table-auto p-6 border-separate border-spacing-y-5 mt-5 spaxe-y-5">
                <thead className="align-bottom text-primary text-[11px]">
                    <tr>
                        <th className="px-5 py-2.5 text-left">EXCHANGE</th>
                        <th className="px-5 py-2.5 text-left">QUOTE</th>
                        <th className="px-5 py-2.5 text-left">MIN. RECEIVED</th>
                        <th className="px-5 py-2.5 text-left">GAS FEE</th>
                        <th className="px-5 py-2.5 text-left">YOU SAVE</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={index} className="font-bold text-[11px] text-white rounded-md overflow-hidden">
                            <td className={`flex gap-3 items-center rounded-l-md p-5 ${index === 0 ? "bg-[#5757735c]" : "bg-[#5757731F]"}`}>
                                <span className="w-8 h-8 bg-slate-900 rounded-full p-1 flex flex-col justify-center items-center">
                                    <img src={row.logo} alt={row.exchange} className="w-6 h-6 rounded-full" />
                                </span>
                                <span className="flex flex-col">
                                    <span className="uppercase">{row.exchange}</span>
                                    <span className="text-[10px] text-primary whitespace-nowrap">{row.type}</span>
                                </span>
                            </td>
                            <td className={`p-5 ${index === 0 ? "bg-[#5757735c]" : "bg-[#5757731F]"}`}>{row.quote}</td>
                            <td className={`p-5 text-left ${index === 0 ? "bg-[#5757735c]" : "bg-[#5757731F]"}`}>{row.minReceived}</td>
                            <td className={`p-5 text-left ${index === 0 ? "bg-[#5757735c]" : "bg-[#5757731F]"}`}>{row.gasFee}</td>
                            <td className={`p-5 text-left rounded-r-md  relative ${index === 0 ? "bg-[#5757735c]" : "bg-[#5757731F]"}`}>
                                {row.youSave}
                                {row.fastest && <span className="text-[9px] absolute -left-2 -top-3 bg-yellow-400 text-black px-2 py-1 rounded ml-2">FASTEST</span>}
                                {row.best && <span className="text-[9px] absolute -top-3 bg-green-100 text-black px-2 py-1 rounded ml-2">BEST</span>}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};