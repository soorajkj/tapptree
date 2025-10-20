import Link from "next/link";
import { Container } from "@/components/core/container";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      <Container>
        <div className="w-full space-y-16 py-16 pb-12 md:py-24 md:pb-0">
          <div className="grid gap-12 md:grid-cols-5">
            <div className="space-y-6 md:col-span-2 md:space-y-12">
              <Link href="/" className="flex items-center gap-0.5">
                <svg
                  viewBox="0 0 24 24"
                  width={36}
                  height={36}
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355ZM9.5 8.75C7.70507 8.75 6.25 10.2051 6.25 12C6.25 13.7949 7.70507 15.25 9.5 15.25C11.2949 15.25 12.75 13.7949 12.75 12C12.75 11.5858 13.0858 11.25 13.5 11.25C13.9142 11.25 14.25 11.5858 14.25 12C14.25 14.6234 12.1234 16.75 9.5 16.75C6.87665 16.75 4.75 14.6234 4.75 12C4.75 9.37665 6.87665 7.25 9.5 7.25C9.91421 7.25 10.25 7.58579 10.25 8C10.25 8.41421 9.91421 8.75 9.5 8.75ZM17.75 12C17.75 13.7949 16.2949 15.25 14.5 15.25C14.0858 15.25 13.75 15.5858 13.75 16C13.75 16.4142 14.0858 16.75 14.5 16.75C17.1234 16.75 19.25 14.6234 19.25 12C19.25 9.37665 17.1234 7.25 14.5 7.25C11.8766 7.25 9.75 9.37665 9.75 12C9.75 12.4142 10.0858 12.75 10.5 12.75C10.9142 12.75 11.25 12.4142 11.25 12C11.25 10.2051 12.7051 8.75 14.5 8.75C16.2949 8.75 17.75 10.2051 17.75 12Z"
                      fill="#FF6900"
                    />{" "}
                  </g>
                </svg>
                <span className="text-xl font-semibold tracking-tight text-neutral-950">
                  Tapptree
                </span>
              </Link>
              <p className="text-sm text-balance text-neutral-600">
                Tapptree is a platform for building AI-powered applications.
              </p>
            </div>
            <div className="col-span-3 grid gap-6 sm:grid-cols-3">
              <div className="space-y-4 text-sm">
                <span className="block font-medium text-neutral-950">
                  Product
                </span>
                <div className="flex flex-wrap gap-4 sm:flex-col">
                  <a
                    className="block text-neutral-600 duration-150 hover:text-neutral-800"
                    href="#"
                  >
                    <span>Features</span>
                  </a>
                  <a
                    className="block text-neutral-600 duration-150 hover:text-neutral-800"
                    href="#"
                  >
                    <span>Solution</span>
                  </a>
                  <a
                    className="block text-neutral-600 duration-150 hover:text-neutral-800"
                    href="#"
                  >
                    <span>Partnerships</span>
                  </a>
                  <a
                    className="block text-neutral-600 duration-150 hover:text-neutral-800"
                    href="#"
                  >
                    <span>Mobile App</span>
                  </a>
                </div>
              </div>
              <div className="space-y-4 text-sm">
                <span className="block font-medium text-neutral-950">
                  Company
                </span>
                <div className="flex flex-wrap gap-4 sm:flex-col">
                  <a
                    className="block text-neutral-600 duration-150 hover:text-neutral-800"
                    href="#"
                  >
                    <span>About</span>
                  </a>
                  <a
                    className="block text-neutral-600 duration-150 hover:text-neutral-800"
                    href="#"
                  >
                    <span>Licence</span>
                  </a>
                  <a
                    className="block text-neutral-600 duration-150 hover:text-neutral-800"
                    href="#"
                  >
                    <span>Privacy</span>
                  </a>
                </div>
              </div>
              <div className="space-y-4 text-sm">
                <span className="block font-medium text-neutral-950">
                  Community
                </span>
                <div className="flex flex-wrap gap-3 text-sm">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="X/Twitter"
                    className="block text-neutral-600 hover:text-neutral-800"
                    href="#"
                  >
                    <svg
                      className="size-5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M10.488 14.651L15.25 21h7l-7.858-10.478L20.93 3h-2.65l-5.117 5.886L8.75 3h-7l7.51 10.015L2.32 21h2.65zM16.25 19L5.75 5h2l10.5 14z"
                      />
                    </svg>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="block text-neutral-600 hover:text-neutral-800"
                    href="#"
                  >
                    <svg
                      className="size-5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-between gap-4 border-t border-dotted border-neutral-200 py-6">
            <span className="text-sm text-neutral-600">
              © {/* */}
              {new Date().getFullYear()}
              {/* */} Tapptree, All rights reserved{" "}
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
