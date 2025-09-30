"use client";

import { Fragment, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import Link from "next/link";
import { authClient } from "@/lib/authClient";
import { Container } from "@/components/core/container";
import { Button } from "@/components/core/button";

export default function Header() {
  const { scrollY } = useScroll();
  const [isHidden, setIsHidden] = useState(false);
  const lastYRef = useRef(0);
  const { data } = authClient.useSession();

  useMotionValueEvent(scrollY, "change", (y) => {
    const difference = y - lastYRef.current;
    if (Math.abs(difference) > 64) {
      setIsHidden(difference > 0);
      lastYRef.current = y;
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.header
        animate={isHidden ? "hidden" : "isHidden"}
        whileHover="isHidden"
        onFocusCapture={() => setIsHidden(false)}
        variants={{ hidden: { y: "-100%" }, isHidden: { y: "0%" } }}
        transition={{ duration: 0.2 }}
        className="bg-secondary/50 sticky top-0 z-40 h-auto w-full backdrop-blur-md"
      >
        <Container>
          <div className="flex h-16 w-full items-center gap-4 overflow-hidden">
            <Link href="/" className="flex items-center gap-2"></Link>
            <div className="flex flex-1 justify-end">
              <div className="flex items-center gap-2">
                {!data?.session ? (
                  <Fragment>
                    <Button variant="ghost" size="sm" asChild={true}>
                      <Link href={"/signin"}>Login</Link>
                    </Button>
                    <Button variant="default" size="sm" asChild={true}>
                      <Link href={"/signup"}>Get started</Link>
                    </Button>
                  </Fragment>
                ) : (
                  <Button variant="default" size="sm" asChild={true}>
                    <Link href={"/dashboard"}>Dashboard</Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </Container>
      </motion.header>
    </AnimatePresence>
  );
}
