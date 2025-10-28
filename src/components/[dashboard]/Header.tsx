"use client";

import React from "react";
import { Icon } from "@/components/core/icon";
import { useSidebarStore } from "@/store/useSidebar";

export default function Header() {
  const toggle = useSidebarStore((state) => state.toggle);

  return (
    <header className="relative border-b border-neutral-200">
      <div className="px-6">
        <div className="flex h-12 items-center justify-between">
          <div className="relative flex items-center justify-center">
            <button
              className="inline-flex size-6 cursor-pointer items-center justify-center [&_svg]:size-4"
              onClick={toggle}
            >
              <Icon icon="PanelLeft" />
            </button>
          </div>
          <div className="flex items-center justify-center gap-2">
            <button className="inline-flex size-6 cursor-pointer items-center justify-center [&_svg]:size-4">
              <Icon icon="Search" />
            </button>
            <button className="inline-flex size-6 cursor-pointer items-center justify-center [&_svg]:size-4">
              <Icon icon="Bell" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
