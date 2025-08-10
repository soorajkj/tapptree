"use client";

import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import Navigations from "./Navigations";
import { Container } from "../core/container";
import { Button } from "../core/button";

export default function Header() {
  const { scrollY } = useScroll();
  const [isHidden, setIsHidden] = useState(false);
  const lastYRef = useRef(0);

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
        className="border-carbon-900 bg-carbon-900/80 sticky top-0 z-40 mx-auto h-auto w-full border-b backdrop-blur-md"
      >
        <Container>
          <div className="border-carbon-900 border-x">
            <div className="flex h-16 w-full items-center gap-4 overflow-hidden rounded-2xl px-6">
              <div className="flex flex-1">
                <span className="text-2xl leading-none font-medium text-white">
                  Hoppscotch
                </span>
              </div>
              <div className="flex items-center">
                <Navigations />
              </div>
              <div className="flex flex-1 justify-end">
                <div className="flex items-center gap-2">
                  <Button>Login</Button>
                  <Button>Get started</Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </motion.header>
    </AnimatePresence>
  );
}
