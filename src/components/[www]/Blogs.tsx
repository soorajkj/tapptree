import React from "react";
import { Container } from "@/components/core/container";

export default function Blogs() {
  return (
    <section className="relative overflow-hidden border-b border-neutral-200">
      <Container>
        <div className="border-x border-b border-neutral-200 px-2 lg:px-2">
          <div className="border-x border-neutral-200 py-16 md:py-24">
            <div className="mx-auto max-w-2xl space-y-4 text-center">
              <span className="font-mono text-sm text-neutral-950 uppercase">
                <span className="text-neutral-600">[01]</span> Complete Platform
              </span>
              <h2 className="mt-6 text-4xl font-medium tracking-tighter text-balance text-neutral-950 sm:text-5xl lg:text-5xl">
                Unveil the contact info you’ve been seeking
              </h2>
              <p className="text-lg text-balance text-neutral-600">
                Our powerful analytics platform helps you visualize complex
                data, identify trends, and make data-driven decisions with
                confidence.
              </p>
            </div>
          </div>
        </div>
        <div className="border-x border-neutral-200 px-2 lg:px-2">
          <div className="border-x border-neutral-200">
            <article className="relative overflow-hidden border-b border-neutral-200 bg-white sm:grid sm:grid-cols-3">
              <div className="relative m-1 aspect-square overflow-hidden rounded-xl">
                <img
                  alt="Embracing Remote Work Culture"
                  loading="eager"
                  width={6394}
                  height={4500}
                  decoding="async"
                  className="h-full w-full object-cover"
                  style={{ color: "transparent" }}
                  src="/images/blog.webp"
                />
              </div>
              <div className="col-span-2 grid gap-3 p-6">
                <time className="text-sm text-neutral-600" dateTime="">
                  Aug 18, 2025
                </time>
                <h2 className="text-lg font-semibold text-balance text-neutral-950 md:text-xl">
                  <a className="before:absolute before:inset-0" href="#">
                    Embracing Remote Work Culture
                  </a>
                </h2>
                <p className="text-neutral-600">
                  Explore the transformative shift towards remote work and how
                  it has reshaped business operations globally. Discover
                  strategies for effective communication, collaboration, and
                  productivity in a remote work environment.
                </p>
                <div className="mt-auto flex items-center gap-2">
                  <div className="flex items-center gap-2">
                    <div className="aspect-square size-6 overflow-hidden rounded-full">
                      <img
                        src="https://avatars.githubusercontent.com/u/68236786?v=4"
                        alt="Theo Balick"
                        width={460}
                        height={460}
                        className="size-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <span className="line-clamp-1 text-sm text-neutral-600">
                      Theo Balick
                    </span>
                  </div>
                </div>
              </div>
            </article>
            <div className="px-4 py-2">
              <h2 className="text-xs font-medium text-neutral-950 uppercase">
                More Articles
              </h2>
            </div>
            <div className="grid gap-px bg-neutral-200 sm:grid-cols-2 lg:grid-cols-3">
              {[...Array(6)].map((_, i) => (
                <Blog key={i} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Blog() {
  return (
    <article className="relative flex flex-col space-y-4 bg-white p-6 duration-200">
      <time className="block text-sm text-neutral-600" dateTime="">
        Sep 10, 2025
      </time>
      <h3 className="font-semibold text-neutral-950">
        <a className="before:absolute before:inset-0" href="#">
          The Top Industries and Business Models Using AI for Fraud Prevention
          and Detection
        </a>
      </h3>
      <p className="max-w-2xl text-base text-gray-600">
        Discover how various industries leverage AI tools to enhance fraud
        prevention and detection.
      </p>
      <div className="mt-auto flex justify-between gap-2">
        <div className="flex items-center gap-2">
          <div className="aspect-square size-6 overflow-hidden rounded-full">
            <img
              src="https://avatars.githubusercontent.com/u/68236786?v=4"
              alt="Theo Balick"
              width={460}
              height={460}
              className="size-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
          <span className="line-clamp-1 text-sm text-neutral-600">
            Theo Balick
          </span>
        </div>
      </div>
    </article>
  );
}
