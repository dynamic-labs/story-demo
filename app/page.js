import Image from "next/image";
import { DynamicWidget } from "@dynamic-labs/sdk-react-core";

export default function Home() {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 font-[family-name:var(--font-geist-sans)] bg-[rgb(241,244,244)] bg-opacity-100">
      <main className="flex flex-col gap-8 items-center text-center">
        <Image
          src="/images/Story_Black.svg"
          alt="Story Protocol logo"
          width={180}
          height={38}
          priority
        />
        <h1 className="text-2xl font-bold">Welcome to Story Protocol Dynamic Demo</h1>
        <DynamicWidget />
      </main>
    </div>
  );
}
