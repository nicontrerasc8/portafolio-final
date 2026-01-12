"use client";

import dynamic from "next/dynamic";

const OwnershipGraph = dynamic(() => import("./OwnershipGraph"), {
  ssr: false,
  loading: () => (
    <div className="h-[320px] w-full animate-pulse rounded-3xl border border-white/10 bg-[#0d1018] md:h-[380px]" />
  ),
});

export default function OwnershipGraphClient() {
  return <OwnershipGraph />;
}
