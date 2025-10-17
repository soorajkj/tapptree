import { Container } from "@/components/core/container";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-24 pb-16">
      <Container>
        <div className="relative mx-auto max-w-5xl text-center">
          <h1 className="mx-auto max-w-5xl text-center text-4xl font-medium tracking-tighter text-balance text-neutral-950 sm:text-5xl lg:text-6xl xl:text-7xl dark:text-white">
            Unify your online presence in one place
          </h1>
          <p className="mx-auto mt-4 mb-6 max-w-xl text-center text-base">
            Create a stylish, professional link-in-bio page with Taptree to
            showcase your profile and social links — all together in one place.
          </p>
          <div className="flex items-center justify-center gap-4"></div>
        </div>
      </Container>
    </section>
  );
}
