"use client";

import dynamic from "next/dynamic";

type HeroSceneClientProps = {
  className?: string;
};

const HeroScene = dynamic(() => import("./HeroScene"), {
  ssr: false,
  loading: () => <div className="h-full w-full animate-pulse bg-[#0d1018]" />,
});

export default function HeroSceneClient({ className }: HeroSceneClientProps) {
  return <HeroScene />;
}
