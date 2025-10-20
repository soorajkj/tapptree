import { Container } from "@/components/core/container";
import { Icon, type IconType } from "@/components/core/icon";

export default function Features() {
  return (
    <section className="relative overflow-hidden border-b border-neutral-200">
      <Container>
        <div className="border-x border-b border-neutral-200 px-2 lg:px-2">
          <div className="border-x border-neutral-200 py-16 md:py-24">
            <div className="mx-auto max-w-2xl space-y-4 text-center">
              <p className="font-mono text-sm text-neutral-950 uppercase">
                <span className="text-neutral-600">[01]</span> Features
              </p>
              <h2 className="mt-6 text-4xl font-medium tracking-tighter text-balance text-neutral-950 sm:text-5xl lg:text-5xl">
                Everything You Need, One Tapp Away
              </h2>
              <p className="text-lg text-balance text-neutral-600">
                Tapptree empowers you to go beyond just sharing links. From
                detailed analytics to advanced customization and seamless
                integrations, our platform gives you the tools to grow, engage,
                and understand your audience
              </p>
            </div>
          </div>
        </div>
        <div className="border-x border-neutral-200 px-2 lg:px-2">
          <KeyFeatures />
          <SecondaryFeatures />
        </div>
      </Container>
    </section>
  );
}

const keyFeatures = [
  {
    title: "Advanced Analytics",
    description:
      "Visualize trends, track clicks, and understand what content resonates most — make data-driven decisions with confidence.",
  },
  {
    title: "Customizable Pages",
    description:
      "Choose layouts, colors, and designs to create a page that perfectly reflects your personal brand or business.",
  },
  {
    title: "Seamless Integrations",
    description:
      "Connect your social media, apps, and tools effortlessly to bring everything into one unified Tapp.",
  },
  {
    title: "Audience Growth Tools",
    description:
      "Optimize engagement, grow followers, and discover what content drives interaction with easy-to-use tools.",
  },
];

function KeyFeatures() {
  return (
    <div className="grid gap-px border-x border-neutral-200 bg-neutral-200 md:grid-cols-2">
      {keyFeatures.map((feat, i) => (
        <div
          key={i}
          className="row-span-2 grid grid-rows-subgrid gap-8 bg-neutral-50 px-4 py-12 md:px-12"
        >
          <div className="relative flex flex-col gap-2">
            <h3 className="text-base font-semibold text-neutral-950">
              {feat.title}
            </h3>
            <p className="text-base text-neutral-600">{feat.description}</p>
          </div>
          <div className="relative">
            <div className="group relative mask-b-from-65% px-4 pt-6 before:absolute before:inset-x-6 before:top-4 before:bottom-0 before:z-1 before:rounded-2xl before:border before:border-neutral-200 before:bg-white after:absolute after:inset-x-9 after:top-2 after:bottom-0 after:rounded-2xl after:border after:border-neutral-200 after:bg-white/50">
              <div className="relative z-10 flex min-h-64 items-center justify-center overflow-hidden rounded-2xl border border-transparent bg-white p-8 text-sm shadow-xl ring-1 shadow-black/10 ring-neutral-200">
                <span className="pointer-events-none rounded-lg text-lg font-medium text-neutral-300 select-none">
                  Coming soon...
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

const secondaryFeatures: {
  heading: string;
  desc: string;
  icon: IconType;
}[] = [
  {
    heading: "Fast setup",
    desc: "Create your page in seconds and start sharing instantly.",
    icon: "Gauge",
  },
  {
    heading: "Responsive Design",
    desc: "Looks perfect on mobile, tablet, and desktop.",
    icon: "LayoutPanelLeft",
  },
  {
    heading: "Secure & Reliable",
    desc: "Your data and pages are protected with top-level security.",
    icon: "GlobeLock",
  },
  {
    heading: "Smart AI Suggestions",
    desc: "Get AI-powered recommendations for maximum impact.",
    icon: "WandSparkles",
  },
];

function SecondaryFeatures() {
  return (
    <div className="relative grid grid-cols-1 gap-px border-x border-t border-neutral-200 bg-neutral-200 sm:grid-cols-2 md:grid-cols-4">
      {secondaryFeatures.map((feat, i) => (
        <div key={i} className="flex flex-col gap-2 bg-neutral-50 p-6">
          <div className="flex items-center gap-2 [&>_svg]:text-neutral-950">
            <Icon icon={feat.icon as IconType} className="size-4"></Icon>
            <h3 className="text-base font-medium text-neutral-950">
              {feat.heading}
            </h3>
          </div>
          <p className="text-sm text-neutral-600">{feat.desc}</p>
        </div>
      ))}
    </div>
  );
}
