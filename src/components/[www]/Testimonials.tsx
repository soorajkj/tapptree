"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/core/container";

interface Testimonial {
  feedback: string;
  name: string;
  title: string;
}

const testimonials: Testimonial[] = [
  {
    feedback:
      "Tapptree has completely transformed the way I share my content online. With just one link, my audience can explore everything I do, and the analytics help me understand what truly resonates.",
    name: "Ashwin Santiago",
    title: "Full Stack Developer",
  },
  {
    feedback:
      "Creating a Tapptree page was so simple, and now my audience has all my links in one place. The analytics are a game-changer!",
    name: "Katy Fuller",
    title: "Product Designer",
  },
  {
    feedback:
      "I love how customizable my Tapptree page is. It perfectly matches my brand, and my followers love it.",
    name: "Jordan Burgess",
    title: "Content Creator",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const testimonial = testimonials[index];
  const img = `/images/testimonials/${
    testimonial.name
      .toLowerCase() // convert to lowercase
      .replace(/\s+/g, "-") // replace spaces with dashes
  }.jpg`;

  return (
    <section className="relative overflow-hidden border-b border-neutral-200">
      <Container>
        <div className="border-x border-b border-neutral-200 px-2 lg:px-2">
          <div className="border-x border-neutral-200 py-16 md:py-24">
            <div className="mx-auto max-w-2xl space-y-4 text-center">
              <p className="font-mono text-sm text-neutral-950 uppercase">
                <span className="text-neutral-600">[02]</span> Testimonials
              </p>
              <h2 className="mt-6 text-4xl font-medium tracking-tighter text-balance text-neutral-950 sm:text-5xl lg:text-5xl">
                Hear What People Are Saying
              </h2>
              <p className="text-lg text-balance text-neutral-600">
                See how Tapptree helps creators, developers, and brands share
                everything they do with one simple Tapp. Our users love how easy
                it is to showcase their links and track engagement.
              </p>
            </div>
          </div>
        </div>
        <div className="border-x border-neutral-200 px-2 lg:px-2">
          <div className="relative border-x border-neutral-200 bg-white py-16">
            <Testimonial testimonial={testimonial} img={img} />
          </div>
        </div>
      </Container>
    </section>
  );
}

function Testimonial({
  testimonial,
  img,
}: {
  testimonial: Testimonial;
  img: string;
}) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={testimonial.name}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto flex h-72 max-w-2xl flex-col justify-center gap-8 px-6"
      >
        <p className="text-xl font-medium text-neutral-950 md:text-2xl">
          {testimonial.feedback}
        </p>
        <div className="flex items-center gap-3">
          <div className="aspect-square size-10 overflow-hidden rounded-full">
            <Image src={img} alt={testimonial.name} width={460} height={460} />
          </div>
          <div className="space-y-px">
            <p className="text-sm font-medium text-neutral-950">
              {testimonial.name}
            </p>
            <p className="text-xs text-neutral-600">{testimonial.title}</p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
