import React from "react";
import { Icon } from "@/components/core/icon";

export default function ShareTools() {
  return (
    <div className="flex items-center gap-2">
      <button className="bg-carbon-50 text-carbon-950 flex size-10 items-center justify-center rounded-lg px-2 py-2">
        <Icon icon="Share2" className="size-5" />
      </button>
      <button className="bg-carbon-50 text-carbon-950 flex w-full flex-1 items-center justify-center gap-2 rounded-lg px-4 py-2">
        <Icon icon="Framer" className="size-5" />
        sarahgreen.com
        <Icon icon="Copy" className="size-5" />
      </button>
      <button className="bg-carbon-50 text-carbon-950 flex size-10 items-center justify-center rounded-lg px-2 py-2">
        <Icon icon="QrCode" className="size-5" />
      </button>
    </div>
  );
}
