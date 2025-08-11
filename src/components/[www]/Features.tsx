import Image from "next/image";
import { Container } from "../core/container";

export default function Features() {
  return (
    <section className="relative overflow-hidden">
      <Container>
        <div className="border-carbon-900 border-x">
          <div className="bg-carbon-900 grid grid-cols-1 gap-px md:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="bg-carbon-950 relative flex flex-col gap-10 p-8 lg:px-9 lg:py-10"
              >
                <Image
                  src="https://framerusercontent.com/images/nEXywAqloedAzBmmJ81l0eWFPDE.webp"
                  alt=""
                  width={200}
                  height={200}
                  className="overflow-hidden rounded-xl"
                />
                <div className="relative flex flex-col gap-1 text-base">
                  <h3 className="text-lg font-medium text-white">
                    Complimentary custom domain
                  </h3>
                  <div className="font-light">
                    Optimized to give you detailed events as they’re happening.
                    Gather insights into every click, lead, or sale events on
                    every link.
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
