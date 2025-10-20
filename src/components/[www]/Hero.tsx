import { Container } from "@/components/core/container";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-neutral-200 bg-gradient-to-t from-transparent via-transparent to-transparent">
      <Container>
        <div className="border-x border-neutral-200 px-2 lg:px-2">
          <div className="relative border-x border-neutral-200 py-16 lg:py-36">
            <div className="relative mx-auto flex max-w-5xl flex-col justify-center text-center">
              <h1 className="mx-auto text-center text-4xl font-medium tracking-tighter text-balance text-neutral-950 sm:text-5xl lg:text-6xl">
                From design to code, own every line of your interface.
              </h1>
              <p className="mx-auto mt-7 mb-9 max-w-3xl text-lg text-balance text-neutral-600">
                Catalix UI gives you accessible React components that you fully
                own and control. Built on top of Radix UI for accessibility and
                styled with Tailwind CSS for sleek, modern design, every
                component is easy to copy, customize, and make entirely yours.
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="flex w-full max-w-md flex-col items-center gap-2 md:flex-row">
                  <div className="flex h-10 w-full items-center justify-center rounded-md border border-neutral-950/5 bg-neutral-950/5 pr-px pl-4 text-base font-light whitespace-nowrap text-neutral-950 backdrop-blur-sm">
                    <span className="pointer-events-none shrink-0 select-none">
                      tapptree.com&#47;
                    </span>
                    <input
                      placeholder="johndoe"
                      className="size-full py-2 outline-none"
                    />
                  </div>
                  <button className="relative isolate inline-flex h-9 w-auto cursor-pointer items-center justify-center gap-x-2 rounded-md border border-transparent bg-orange-500 px-3.5 py-2.5 text-base/6 font-medium whitespace-nowrap text-white before:absolute before:inset-0 before:-z-10 before:rounded-md before:bg-orange-500 before:shadow-sm after:absolute after:inset-0 after:-z-10 after:rounded-md after:inset-shadow-2xs after:inset-shadow-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 disabled:pointer-events-none disabled:opacity-50 disabled:before:shadow-none disabled:after:shadow-none sm:px-3 sm:py-1.5 sm:text-sm/6 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4">
                    Start creating
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
