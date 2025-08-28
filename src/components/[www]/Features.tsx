import { Container } from "@/components/core/container";
import { Icon, IconType } from "@/components/core/icon";

export default function Features() {
  return (
    <section className="bg-muted/50 py-24">
      <Container>
        <div className="grid max-md:divide-y md:grid-cols-2 md:divide-x">
          <div className="row-span-2 grid grid-rows-subgrid gap-8 pb-12 md:pr-12">
            <div>
              <h3 className="text-foreground font-semibold">Link Management</h3>
              <p className="text-muted-foreground mt-4">
                Add, organize, and manage all your important links in one place.
                Make your bio fully interactive and professional.
              </p>
            </div>
            <div className="relative">
              <div className="h-fit overflow-hidden mask-b-from-55%">
                <div className="relative mx-auto mt-auto h-fit text-sm">
                  <div className="border-border-illustration bg-card absolute -bottom-6 left-0 z-10 h-64 w-3/4 overflow-hidden rounded-2xl border">
                    <div className="relative space-y-3 p-4">
                      <div className="flex items-center gap-1.5">
                        <svg
                          className="size-5"
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="0 0 32 32"
                        >
                          <g fill="none">
                            <path
                              fill="#2563eb"
                              d="M26 19.34c0 6.1-5.05 11.005-11.15 10.641c-6.269-.374-10.56-6.403-9.752-12.705c.489-3.833 2.286-7.12 4.242-9.67c.34-.445.689 3.136 1.038 2.742c.35-.405 3.594-6.019 4.722-7.991a.694.694 0 0 1 1.028-.213C18.394 3.854 26 10.277 26 19.34"
                            />
                            <path
                              fill="#3b82f6"
                              d="M23 21.851c0 4.042-3.519 7.291-7.799 7.144c-4.62-.156-7.788-4.384-7.11-8.739C9.07 14.012 15.48 10 15.48 10S23 14.707 23 21.851"
                            />
                          </g>
                        </svg>
                        <div className="text-foreground font-medium">
                          Link Activity
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="text-muted-foreground border-b border-white/10 pb-3 text-sm font-medium">
                          Your links are getting more clicks{/* */}{" "}
                          <span className="text-foreground">
                            compared to last year.
                          </span>
                        </div>
                        <div className="space-y-3">
                          <div className="space-y-1">
                            <div>
                              <span className="text-foreground align-baseline text-xl font-medium">
                                12,450
                              </span>{" "}
                              <span className="text-placeholder text-xs">
                                Clicks
                              </span>
                            </div>
                            <div className="flex h-5 items-center rounded bg-gradient-to-r from-indigo-600 to-purple-300 px-2 text-xs text-white">
                              2024
                            </div>
                          </div>
                          <div className="space-y-1">
                            <div>
                              <span className="text-foreground align-baseline text-xl font-medium">
                                8,920
                              </span>{" "}
                              <span className="text-placeholder text-xs">
                                Clicks
                              </span>
                            </div>
                            <div className="flex h-5 w-2/3 items-center rounded bg-white/20 px-2 text-xs text-white">
                              2023
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-card border-border-illustration mx-auto h-80 w-10/12 rounded-2xl border px-6 py-4">
                    <div className="space-y-2">
                      <div className="text-foreground font-medium">
                        Recently Added Links
                      </div>
                      <div className="*:hover:bg-muted -mx-2 flex flex-col gap-0.5 *:cursor-pointer *:rounded-md *:p-2">
                        <div className="flex items-center gap-1">
                          <div className="relative flex size-5 items-center justify-center rounded bg-linear-to-b from-amber-400 to-rose-500 shadow-md shadow-black/25 before:absolute before:inset-px before:rounded-[3px] before:border before:border-white/40 before:ring-1 before:ring-black/25 dark:before:border-transparent dark:before:ring-white/25">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={20}
                              height={20}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-link-2 size-3 stroke-white drop-shadow"
                            >
                              <path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3" />
                              <line x1="8" y1="12" x2="16" y2="12" />
                            </svg>
                          </div>
                          <div className="text-xs">Twitter</div>
                          <div className="text-muted-foreground ml-auto text-xs">
                            Now
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="border-background relative flex size-5 items-center justify-center rounded border bg-linear-to-b from-purple-300 to-blue-600 shadow-md">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={20}
                              height={20}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-link size-3 stroke-white drop-shadow"
                            >
                              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.08-7.08l-1.5 1.5" />
                              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.08 7.08l1.5-1.5" />
                            </svg>
                          </div>
                          <div className="text-xs">GitHub</div>
                          <div className="text-muted-foreground ml-auto text-xs">
                            12h ago
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="border-background relative flex size-5 items-center justify-center rounded border bg-linear-to-b from-lime-300 to-teal-600 shadow-md">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={20}
                              height={20}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-link-2-off size-3 stroke-white drop-shadow"
                            >
                              <path d="M9 15H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3m6 0h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3" />
                              <line x1="2" y1="2" x2="22" y2="22" />
                            </svg>
                          </div>
                          <div className="text-xs">LinkedIn</div>
                          <div className="text-muted-foreground ml-auto text-xs">
                            2 days ago
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row-span-2 grid grid-rows-subgrid gap-8 pb-12 max-md:pt-12 md:pl-12">
            <div>
              <h3 className="text-foreground font-semibold">
                Analytics Dashboard
              </h3>
              <p className="text-muted-foreground mt-4">
                Track clicks, views, and user engagement. Understand which links
                perform best and optimize your bio for maximum impact.
              </p>
            </div>
            <div className="relative">
              <div className="before:bg-background after:bg-background/50 group relative -mx-4 mask-b-from-65% px-4 pt-6 before:absolute before:inset-x-6 before:top-4 before:bottom-0 before:z-1 before:rounded-2xl before:border after:absolute after:inset-x-9 after:top-2 after:bottom-0 after:rounded-2xl after:border">
                <div className="relative z-10 overflow-hidden rounded-2xl border bg-white text-sm shadow-xl shadow-black/10">
                  {/* <div className="relative p-6">
                    <div className="text-foreground font-medium">
                      <span className="bg-amber-100 py-1 text-amber-900">
                        Spending
                      </span>{" "}
                      Limit
                    </div>
                    <div className="text-muted-foreground mt-0.5 text-sm">
                      New users by First user primary channel group
                    </div>
                    <div className="relative mt-4 mb-4 flex">
                      <div className="h-5 w-1/5 rounded-l-md bg-[color-mix(in_oklab,var(--color-foreground)50%,var(--color-primary))]" />
                      <div className="bg-primary h-5 w-1/5 duration-300 group-hover:w-2/5" />
                      <div className="h-5 w-3/5 rounded-r-md border [background-image:linear-gradient(-45deg,var(--stripes-color)_25%,transparent_25%,transparent_50%,var(--stripes-color)_50%,var(--stripes-color)_75%,transparent_75%,transparent)] [background-size:5px_5px] duration-300 [--stripes-color:theme(colors.zinc.300)] group-hover:w-2/5" />
                    </div>
                    <div className="flex gap-1 border-b border-dashed pb-3">
                      <div className="w-2/5">
                        <div className="text-foreground text-xl font-medium">
                          40%
                        </div>
                        <div className="text-muted-foreground text-sm">
                          Used
                        </div>
                      </div>
                      <div className="w-3/5">
                        <div className="text-foreground text-xl font-medium">
                          60%
                        </div>
                        <div className="text-muted-foreground text-sm">
                          Free
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 space-y-1">
                      <div className="grid grid-cols-[auto_1fr] items-center gap-2">
                        <div className="size-1.5 rounded-full bg-[color-mix(in_oklab,var(--color-foreground)50%,var(--color-primary))]" />
                        <div className="line-clamp-1 text-sm font-medium">
                          Running{" "}
                          <span className="text-muted-foreground">(20%)</span>{" "}
                          average of 12 Minutes
                        </div>
                      </div>
                      <div className="grid grid-cols-[auto_1fr] items-center gap-2">
                        <div className="bg-primary size-1.5 rounded-full" />
                        <div className="line-clamp-1 text-sm font-medium">
                          Swimming{" "}
                          <span className="text-muted-foreground">(20%)</span>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  <div className="relative p-6">
                    {/* Title */}
                    <div className="text-foreground font-medium">
                      <span className="bg-amber-100 py-1 text-amber-900">
                        Analytics
                      </span>{" "}
                      Dashboard
                    </div>
                    <div className="text-muted-foreground mt-0.5 text-sm">
                      Track clicks across all your links in real time
                    </div>
                    {/* Progress Bar */}
                    <div className="relative mt-4 mb-4 flex">
                      <div className="h-5 w-1/5 rounded-l-md bg-[color-mix(in_oklab,var(--color-foreground)50%,var(--color-primary))]" />
                      <div className="bg-primary h-5 w-2/5 duration-300 group-hover:w-3/5" />
                      <div className="h-5 w-2/5 rounded-r-md border [background-image:linear-gradient(-45deg,var(--stripes-color)_25%,transparent_25%,transparent_50%,var(--stripes-color)_50%,var(--stripes-color)_75%,transparent_75%,transparent)] [background-size:5px_5px] duration-300 [--stripes-color:theme(colors.zinc.300)] group-hover:w-1/5" />
                    </div>
                    {/* Summary */}
                    <div className="flex gap-1 border-b border-dashed pb-3">
                      <div className="w-2/5">
                        <div className="text-foreground text-xl font-medium">
                          40%
                        </div>
                        <div className="text-muted-foreground text-sm">
                          Engaged
                        </div>
                      </div>
                      <div className="w-3/5">
                        <div className="text-foreground text-xl font-medium">
                          60%
                        </div>
                        <div className="text-muted-foreground text-sm">
                          Unclicked
                        </div>
                      </div>
                    </div>
                    {/* Breakdown */}
                    <div className="mt-3 space-y-1">
                      <div className="grid grid-cols-[auto_1fr] items-center gap-2">
                        <div className="size-1.5 rounded-full bg-[color-mix(in_oklab,var(--color-foreground)50%,var(--color-primary))]" />
                        <div className="line-clamp-1 text-sm font-medium">
                          Twitter{" "}
                          <span className="text-muted-foreground">
                            (20% of clicks)
                          </span>
                        </div>
                      </div>
                      <div className="grid grid-cols-[auto_1fr] items-center gap-2">
                        <div className="bg-primary size-1.5 rounded-full" />
                        <div className="line-clamp-1 text-sm font-medium">
                          GitHub{" "}
                          <span className="text-muted-foreground">
                            (15% of clicks)
                          </span>
                        </div>
                      </div>
                      <div className="grid grid-cols-[auto_1fr] items-center gap-2">
                        <div className="size-1.5 rounded-full bg-zinc-400" />
                        <div className="line-clamp-1 text-sm font-medium">
                          LinkedIn{" "}
                          <span className="text-muted-foreground">
                            (5% of clicks)
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative grid grid-cols-1 gap-x-3 gap-y-6 border-t pt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {[
            {
              title: "Custom Themes",
              desc: "Choose from multiple designs to make your profile stand out.",
              icon: "Paintbrush",
            },
            {
              title: "Fast & Responsive",
              desc: "Load times are minimal, giving users a smooth experience.",
              icon: "Zap",
            },
            {
              title: "Secure",
              desc: "All links and data are protected with top-notch security.",
              icon: "Fingerprint",
            },
            {
              title: "AI Suggestions",
              desc: "Get smart suggestions for your bio to improve engagement.",
              icon: "WandSparkles",
            },
          ].map(({ title, desc, icon }) => (
            <div key={title} className="space-y-2">
              <div className="flex items-center gap-2">
                <Icon
                  icon={icon as IconType}
                  className="text-foreground size-4"
                />
                <h3 className="text-sm font-medium">{title}</h3>
              </div>
              <p className="text-muted-foreground text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
