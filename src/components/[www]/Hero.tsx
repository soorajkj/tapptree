import { Container } from "@/components/core/container";
import { Button } from "../core/button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-24">
      <Container>
        <div className="relative mx-auto max-w-5xl text-center">
          <h1 className="font-archivo text-4xl font-bold tracking-tight text-balance sm:mt-12 sm:text-7xl">
            Unify your online presence in one place
          </h1>
          <p className="mx-auto mt-4 mb-8 max-w-2xl text-lg text-balance">
            Create a stylish, professional link-in-bio page with Taptree to
            showcase your profile and social links — all together in one place.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button>Start Building</Button>
            <Button variant="outline">Book a demo</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
