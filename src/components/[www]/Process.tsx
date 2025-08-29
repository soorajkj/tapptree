import React from "react";
import { Container } from "../core/container";

export default function Process() {
  return (
    <section className="bg-secondary/50 @container relative py-24">
      <Container>
        <div className="text-center @4xl:text-left">
          <h2 className="text-foreground text-3xl font-semibold">
            Simple Three-Step Workflow
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl text-lg text-balance">
            A simple, three-step process to take you from{" "}
            <span className="text-foreground">scattered links</span> to one
            beautiful, shareable home for everything you do.
          </p>
        </div>
        <div className="relative mx-auto mt-12">
          <div className="grid overflow-hidden border *:p-8 @max-4xl:divide-y @4xl:grid-cols-3 @4xl:divide-x">
            <div className="row-span-2 grid grid-rows-subgrid gap-8">
              <div className="relative flex flex-col justify-end">
                <div className="text-foreground top-0 flex size-6 -translate-x-1/3 -translate-y-1/2 items-center justify-center overflow-hidden rounded-full mask-y-from-55% mask-x-from-55% font-mono text-sm before:absolute before:inset-0 before:bg-[repeating-linear-gradient(-45deg,var(--color-foreground),var(--color-foreground)_0.5px,transparent_0.5px,transparent_3px)] before:opacity-35 @4xl:absolute">
                  1
                </div>
                <div className="before:bg-card after:bg-card before:border-border-illustration after:border-border-illustration group relative -mx-4 mask-b-from-65% px-4 pt-6 before:absolute before:inset-x-6 before:top-4 before:bottom-0 before:z-1 before:rounded-2xl before:border after:absolute after:inset-x-8 after:top-2 after:bottom-0 after:rounded-2xl after:border after:opacity-75">
                  <div className="bg-card border-border-illustration relative z-10 rounded-2xl border p-4 text-xs shadow-lg duration-300">
                    <div className="mb-0.5 text-sm font-semibold">Step One</div>
                    <div className="mb-4 flex gap-2 text-sm">
                      <span>Create your space,</span>
                      <span className="text-muted-foreground">
                        your own page
                      </span>
                    </div>
                    <div className="mb-4 grid gap-2 @md:grid-cols-1">
                      <div className="bg-illustration flex gap-2 rounded-md border p-2">
                        <div className="flex items-center gap-2">
                          <div className="bg-illustration border-border-illustration size-6 rounded-full border p-0.5 shadow shadow-zinc-950/5 *:rounded-full">
                            <img
                              src="https://avatars.githubusercontent.com/u/31113941?v=4"
                              className="aspect-square rounded-[calc(var(--avatar-radius)-2px)] object-cover"
                              alt="Bernard Ngandu"
                              width={460}
                              height={460}
                              loading="lazy"
                              decoding="async"
                            />
                          </div>
                          <div className="text-muted-foreground line-clamp-1">
                            Sooraj Janardhanan
                          </div>
                        </div>
                      </div>
                      <div className="bg-illustration flex gap-2 rounded-md border p-2">
                        <div>
                          <div className="text-muted-foreground line-clamp-3">
                            A senoior software enginner based in Kochi, India.
                            Crafting beautiful digital experience
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-foreground font-semibold">
                  Claim Your Page
                </h3>
                <p className="text-muted-foreground mt-2 text-sm">
                  Pick your unique link, add a profile photo, and start fresh
                  with a personal hub.
                </p>
              </div>
            </div>
            <div className="row-span-2 grid grid-rows-subgrid gap-8">
              <div className="relative flex flex-col">
                <div className="text-foreground top-0 flex size-6 -translate-x-1/3 -translate-y-1/2 items-center justify-center overflow-hidden rounded-full mask-y-from-55% mask-x-from-55% font-mono text-sm before:absolute before:inset-0 before:bg-[repeating-linear-gradient(-45deg,var(--color-foreground),var(--color-foreground)_0.5px,transparent_0.5px,transparent_3px)] before:opacity-35 @4xl:absolute">
                  2
                </div>
                <div className="relative pt-6">
                  <div className="relative w-full space-y-2">
                    <div className="pl-5">
                      <div className="text-foreground before:border-muted-foreground before:bg-background before:ring-background relative mt-0.5 inline-flex items-center gap-2 text-sm font-medium before:absolute before:inset-y-0 before:-left-[22px] before:my-auto before:size-[5px] before:rounded-full before:border before:ring">
                        <div className="text-muted-foreground text-xs">
                          06 AM
                        </div>
                        Poll Created
                      </div>
                    </div>
                    <div className="border-border-illustration relative flex rounded-xl border bg-white/5 p-2 text-xs shadow-md backdrop-blur">
                      <div className="before:border-primary before:bg-background before:ring-background relative mt-0.5 ml-7 inline-flex items-center gap-2 text-sm font-medium before:absolute before:inset-y-0 before:-left-[19px] before:my-auto before:size-[5px] before:rounded-full before:border before:ring">
                        <div className="flex items-center -space-x-2">
                          <div className="bg-illustration border-border-illustration size-6 rounded-full border p-0.5 shadow shadow-zinc-950/5 *:rounded-full">
                            <img
                              src="https://avatars.githubusercontent.com/u/47919550?v=4"
                              className="aspect-square rounded-[calc(var(--avatar-radius)-2px)] object-cover"
                              alt="Méschac Irung"
                              width={460}
                              height={460}
                              loading="lazy"
                              decoding="async"
                            />
                          </div>
                          <div className="bg-illustration border-border-illustration size-6 rounded-full border p-0.5 shadow shadow-zinc-950/5 *:rounded-full">
                            <img
                              src="https://avatars.githubusercontent.com/u/31113941?v=4"
                              className="aspect-square rounded-[calc(var(--avatar-radius)-2px)] object-cover"
                              alt="Bernard Ngandu"
                              width={460}
                              height={460}
                              loading="lazy"
                              decoding="async"
                            />
                          </div>
                        </div>
                        +50 Users voted
                      </div>
                    </div>
                    <div className="border-border-illustration relative flex rounded-xl border bg-white/5 p-2 text-xs shadow-md backdrop-blur">
                      <div className="before:border-primary before:bg-background before:ring-background relative mt-0.5 ml-7 inline-flex items-center gap-2 text-sm font-medium before:absolute before:inset-y-0 before:-left-[19px] before:my-auto before:size-[5px] before:rounded-full before:border before:ring">
                        <div className="flex items-center -space-x-2">
                          <div className="bg-illustration border-border-illustration size-6 rounded-full border p-0.5 shadow shadow-zinc-950/5 *:rounded-full">
                            <img
                              src="https://avatars.githubusercontent.com/u/47919550?v=4"
                              className="aspect-square rounded-[calc(var(--avatar-radius)-2px)] object-cover"
                              alt="Méschac Irung"
                              width={460}
                              height={460}
                              loading="lazy"
                              decoding="async"
                            />
                          </div>
                          <div className="bg-illustration border-border-illustration size-6 rounded-full border p-0.5 shadow shadow-zinc-950/5 *:rounded-full">
                            <img
                              src="https://avatars.githubusercontent.com/u/31113941?v=4"
                              className="aspect-square rounded-[calc(var(--avatar-radius)-2px)] object-cover"
                              alt="Bernard Ngandu"
                              width={460}
                              height={460}
                              loading="lazy"
                              decoding="async"
                            />
                          </div>
                        </div>
                        +50 Users voted
                      </div>
                    </div>
                    <div className="pl-5">
                      <div className="text-foreground before:border-muted-foreground before:bg-background before:ring-background relative mt-0.5 inline-flex items-center gap-2 text-sm font-medium before:absolute before:inset-y-0 before:-left-[22px] before:my-auto before:size-[5px] before:rounded-full before:border before:ring">
                        <div className="text-muted-foreground text-xs">
                          01 PM
                        </div>
                        Poll Closed
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-foreground font-semibold">
                  Add Everything You Do
                </h3>
                <p className="text-muted-foreground mt-2 text-sm">
                  From Instagram to YouTube, shops to portfolios—connect
                  unlimited links in seconds.
                </p>
              </div>
            </div>
            <div className="row-span-2 grid grid-rows-subgrid gap-8">
              <div
                aria-hidden="true"
                className="relative flex flex-col justify-center"
              >
                <div className="text-foreground top-0 flex size-6 -translate-x-1/3 -translate-y-1/2 items-center justify-center overflow-hidden rounded-full mask-y-from-55% mask-x-from-55% font-mono text-sm before:absolute before:inset-0 before:bg-[repeating-linear-gradient(-45deg,var(--color-foreground),var(--color-foreground)_0.5px,transparent_0.5px,transparent_3px)] before:opacity-35 @4xl:absolute">
                  3
                </div>
                <div
                  aria-hidden="true"
                  className="-mx-8 -mb-8 flex flex-col justify-end border-b mask-r-from-55% mask-l-from-85% px-8 pt-4 pb-8"
                >
                  <div className="space-y-2.5">
                    <span className="text-foreground block text-sm font-medium">
                      Memory Usage
                    </span>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground text-sm">
                        56 GB / 128 GB
                      </span>
                      <span className="text-foreground">45%</span>
                    </div>
                    <div className="bg-muted relative my-1.5 h-1.5 rounded-full before:absolute before:inset-0 before:z-1 before:w-2/5 before:rounded-full before:bg-linear-to-r before:from-white before:to-indigo-400 after:absolute after:inset-0 after:w-2/5 after:bg-linear-to-r after:from-white after:to-indigo-400 after:opacity-50 after:blur-xs" />
                  </div>
                </div>
              </div>
              <div className="mt-8 @4xl:mt-0">
                <h3 className="text-foreground font-semibold">
                  Share &amp; Grow
                </h3>
                <p className="text-muted-foreground mt-2 text-sm">
                  Put your link in bio, email signature, or QR code. Watch your
                  audience grow with built-in insights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
