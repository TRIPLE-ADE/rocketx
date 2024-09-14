import Connect from "@/components/Connect";
import SwapFooter from "@/components/SwapFooter";
import SwapInfo from "@/components/SwapInfo";

export default function Swap() {
  return (
    <div className="w-full min-h-screen flex items-center flex-col justify-center bg-[url('/bg.png')] bg-cover bg-center bg-no-repeat relative overflow-hidden">
      <div className="absolute inset-0 overlay-bg"></div>
      <div className="w-full grid lg:grid-cols-3 gap-5 rounded-xl p-4 relative z-10">
        <Connect />
        <div className="lg:col-span-2">
          <SwapInfo />
        </div>
      </div>
      <SwapFooter />
    </div>
  );
}
