import React from "react";

export default function Feedback() {
  return (
    <section className="relative overflow-hidden py-16">
      <div className="container mx-auto max-w-6xl">
        <div className="bg-gray-950/5 p-2 dark:bg-white/10">
          <div className="flex flex-col gap-6 bg-white p-24 dark:bg-gray-950 dark:inset-ring dark:inset-ring-white/15">
            <p className="text-xl font-medium before:mr-1 after:ml-1 md:text-3xl/9.5">
              Using Tailark has been like unlocking a secret design superpower.
              It's the perfect fusion of simplicity and versatility, enabling us
              to create UIs that are as stunning as they are user-friendly.
            </p>
            <div className="flex items-center gap-3">
              <div className="ring-foreground/10 aspect-square size-10 overflow-hidden rounded-full border border-transparent shadow-md ring-1 shadow-black/15">
                <img
                  src="https://avatars.githubusercontent.com/u/47919550?v=4"
                  alt=""
                />
              </div>
              <div className="space-y-px">
                <p className="text-sm font-medium">Méschac Irung</p>
                <p className="text-muted-foreground text-xs">
                  Founder &amp; CEO, Stripe
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
