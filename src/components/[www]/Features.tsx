import { Container } from "@/components/core/container";

export default function Features() {
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
          <div className="grid gap-px border-x border-neutral-200 bg-neutral-200 md:grid-cols-2">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="row-span-2 grid grid-rows-subgrid gap-8 bg-neutral-50 px-4 py-12 md:px-12"
              >
                <div>
                  <h3 className="text-base font-semibold text-neutral-950">
                    Intuitive Invoice Creation
                  </h3>
                  <p className="mt-2 text-base text-neutral-600">
                    Create professional invoices instantly with our intuitive
                    tools. Customize templates and automate billing to save
                    time.
                  </p>
                </div>
                <div aria-hidden="true" className="relative">
                  <div className="group relative mask-b-from-65% px-4 pt-6 before:absolute before:inset-x-6 before:top-4 before:bottom-0 before:z-1 before:rounded-2xl before:border before:border-neutral-200 before:bg-white after:absolute after:inset-x-9 after:top-2 after:bottom-0 after:rounded-2xl after:border after:border-neutral-200 after:bg-white/50">
                    <div className="relative z-10 overflow-hidden rounded-2xl border border-transparent bg-white p-8 text-sm shadow-xl ring-1 shadow-black/10 ring-neutral-200">
                      <div className="min-h-48" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="relative grid grid-cols-1 gap-px border-x border-t border-neutral-200 bg-neutral-200 sm:grid-cols-2 md:grid-cols-4">
            <div className="space-y-2 bg-neutral-50 p-6">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-zap size-4 text-neutral-950"
                >
                  <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
                </svg>
                <h3 className="text-base font-medium text-neutral-950">
                  Faaast
                </h3>
              </div>
              <p className="text-sm text-neutral-600">
                It supports an entire helping developers and innovate.
              </p>
            </div>
            <div className="space-y-2 bg-neutral-50 p-6">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-cpu size-4 text-neutral-950"
                >
                  <rect width={16} height={16} x={4} y={4} rx={2} />
                  <rect width={6} height={6} x={9} y={9} rx={1} />
                  <path d="M15 2v2" />
                  <path d="M15 20v2" />
                  <path d="M2 15h2" />
                  <path d="M2 9h2" />
                  <path d="M20 15h2" />
                  <path d="M20 9h2" />
                  <path d="M9 2v2" />
                  <path d="M9 20v2" />
                </svg>
                <h3 className="text-base font-medium text-neutral-950">
                  Powerful
                </h3>
              </div>
              <p className="text-sm text-neutral-600">
                It supports an entire helping developers and businesses.
              </p>
            </div>
            <div className="space-y-2 bg-neutral-50 p-6">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-lock size-4 text-neutral-950"
                >
                  <rect width={18} height={11} x={3} y={11} rx={2} ry={2} />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <h3 className="text-base font-medium text-neutral-950">
                  Security
                </h3>
              </div>
              <p className="text-sm text-neutral-600">
                An helping developers businesses innovate.
              </p>
            </div>
            <div className="space-y-2 bg-neutral-50 p-6">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-sparkles size-4 text-neutral-950"
                >
                  <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
                  <path d="M20 3v4" />
                  <path d="M22 5h-4" />
                  <path d="M4 17v2" />
                  <path d="M5 18H3" />
                </svg>
                <h3 className="text-base font-medium text-neutral-950">
                  AI Powered
                </h3>
              </div>
              <p className="text-sm text-neutral-600">
                Helping developers businesses innovate.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
