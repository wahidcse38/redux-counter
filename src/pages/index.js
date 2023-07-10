import Image from "next/image";
import { Inter } from "next/font/google";
import Counter from "@/components/counter/Counter";
import HooksCounter from "@/components/counter/HooksContainer";
import StaticHooksCounter from "@/components/counter/StaticHooksCounter";
import ConditionalCounter from "@/components/counter/ConditionalCounter";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
      <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
        Simple Counter Application
      </h1>

      <div className="max-w-md mx-auto mt-10 space-y-5">
        {/* <Counter />
        <HooksCounter />
        <StaticHooksCounter /> */}
        <ConditionalCounter />
        <ConditionalCounter static />
      </div>
    </div>
  );
}
