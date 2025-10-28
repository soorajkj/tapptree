"use client";

import Link from "next/link";
import React, { type ComponentProps } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { twmx } from "twmx";
import { motion } from "framer-motion";
import { useSidebarStore } from "@/store/useSidebar";
import { Icon, type IconType } from "@/components/core/icon";
import Tapptree from "public/images/tapptree.svg";

interface SidebarProps
  extends ComponentProps<typeof motion.aside>,
    VariantProps<typeof sidebarStyles> {}

export default function Sidebar({ className, ...props }: SidebarProps) {
  const open = useSidebarStore((state) => state.isOpen);

  return (
    <motion.aside
      className={twmx(sidebarStyles({ open, className }))}
      {...props}
    >
      <div className="flex size-full gap-2">
        <div className="relative flex flex-col gap-4">
          <SidebarHeader />
          <SidebarContent />
          <SidebarFooter />
        </div>
        <div className="w-full rounded-md bg-neutral-100"></div>
      </div>
    </motion.aside>
  );
}

const sidebarStyles = tv({
  base: ["relative w-full max-w-72 overflow-hidden border border-transparent"],
  variants: {
    open: {
      true: "block",
      false: "hidden",
    },
  },
});

function SidebarHeader() {
  return (
    <div className="flex items-center justify-center">
      <Link href="/" className="flex size-11 items-center justify-center">
        <Tapptree width={40} height={40} />
      </Link>
    </div>
  );
}

function SidebarContent() {
  return (
    <div className="flex flex-1 flex-col gap-3 overflow-y-auto">
      <ul className="flex flex-col gap-3">
        {[
          { label: "Links", path: "/", icon: "Component" },
          { label: "Customize", path: "/", icon: "PenTool" },
          { label: "Insights", path: "/", icon: "SquareMousePointer" },
          { label: "Pro", path: "/", icon: "Gem" },
          { label: "Settings", path: "/", icon: "Cog" },
        ].map((item, i) => (
          <li key={i} className="relative">
            <Link
              href={item.path}
              className="flex size-11 items-center justify-center gap-2 overflow-hidden rounded-md text-neutral-700 hover:bg-neutral-100"
            >
              <span className="[&_svg]:size-5">
                <Icon icon={item.icon as IconType} />
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <ul className="mt-auto flex flex-col gap-3">
        {[
          { label: "Refferals", path: "/", icon: "Gift" },
          { label: "Support", path: "/", icon: "CircleQuestionMark" },
        ].map((item, i) => (
          <li key={i} className="relative">
            <Link
              href={item.path}
              className="flex size-11 items-center justify-center gap-2 overflow-hidden rounded-md text-neutral-700 hover:bg-neutral-100"
            >
              <span className="[&_svg]:size-5">
                <Icon icon={item.icon as IconType} />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SidebarFooter() {
  return <div className="flex flex-col gap-2 p-2"></div>;
}
