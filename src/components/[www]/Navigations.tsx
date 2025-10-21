"use client";

import React, { ComponentProps } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/core/button";

const items = [
  { label: "Products", href: "/" },
  { label: "Solutions", href: "/" },
  { label: "Resources", href: "/" },
  { label: "Customers", href: "/" },
  { label: "Pricing", href: "/" },
];

interface NavigationsProps extends ComponentProps<typeof motion.nav> {}

export default function Navigations({ ...props }: NavigationsProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="flex w-full flex-col gap-4 bg-neutral-50 lg:hidden"
        style={{ height: "calc(100dvh -  calc(var(--spacing) * 16))" }}
        {...props}
      >
        <Items />
        <div className="flex flex-col gap-2">
          <Button variant="secondary" width="full" asChild={true}>
            <Link href="/signin">Sign In</Link>
          </Button>
          <Button width="full" asChild={true}>
            <Link href="/signup">Get started</Link>
          </Button>
        </div>
      </motion.nav>
    </AnimatePresence>
  );
}

function Items() {
  return (
    <ul className="flex flex-col divide-y divide-neutral-200">
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </ul>
  );
}

type Item = (typeof items)[number];
type ItemProps = { item: Item };

function Item({ item }: ItemProps) {
  return (
    <li className="flex py-3">
      <Link href={item.href} className="w-full text-neutral-800">
        {item.label}
      </Link>
    </li>
  );
}
