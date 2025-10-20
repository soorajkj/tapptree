import React from "react";

export default function Navigation() {
  return (
    <aside className="text-neutral-950bg-neutral-950 h-auto w-full max-w-72 bg-neutral-50">
      <div className="flex h-full w-full flex-col">
        <div className="text-neutral-950border-white/15 flex h-14 w-full items-center gap-2 border-b border-dashed border-neutral-300 p-3">
          <span className="text-neutral-950bg-neutral-900 inline-flex size-7 items-center justify-center rounded bg-white">
            <svg
              width={28}
              height={28}
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <rect
                width={18}
                height={18}
                rx={3}
                fill="url(#pattern0_12336_14458)"
              />
              <defs>
                <pattern
                  id="pattern0_12336_14458"
                  patternContentUnits="objectBoundingBox"
                  width={1}
                  height={1}
                >
                  <use
                    xlinkHref="#image0_12336_14458"
                    transform="scale(0.0025)"
                  />
                </pattern>
                <image
                  id="image0_12336_14458"
                  width={400}
                  height={400}
                  preserveAspectRatio="none"
                  xlinkHref="data:image/png;base64,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"
                />
              </defs>
            </svg>
          </span>
          <p>Acme</p>
        </div>
        <nav className="flex-1"></nav>
        <div className="text-neutral-950border-white/15 flex h-14 w-full items-center gap-2 border-t border-dashed border-neutral-300 p-3">
          <div className="flex w-full items-center gap-2">
            <div className="size-7 bg-neutral-900"></div>
            <p>Ludvig Rask</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
