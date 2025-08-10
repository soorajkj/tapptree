import { Container } from "@/components/core/container";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden py-4">
      <Container>
        <div className="flex flex-col gap-4 text-sm sm:flex-row xl:gap-8">
          <p className="mr-auto text-center">
            © Portrait Technology Inc. 2025
          </p>
        </div>
      </Container>
    </footer>
  );
}
