import Image from "next/image";
import React from "react";

export default function Testimonial() {
  return (
    <figure className="flex max-w-4xl flex-col gap-8 px-20 text-center">
      <blockquote className="text-display-sm dark:text-gray-050 font-medium text-gray-900">
        Taptree has completely transformed the way I share my online presence.
        Instead of juggling multiple links across different platforms, I now
        have one beautiful, customizable page that showcases everything I do.
      </blockquote>
      <figcaption className="flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-4">
          <div className="relative flex">
            <div
              data-avatar="true"
              className="relative inline-flex size-16 shrink-0 items-center justify-center rounded-full"
            >
              <Image
                className="size-full rounded-full object-cover"
                src="/images/feedbacks/lyle-kauffman.jpg"
                alt="Kelly Williams"
                width={64}
                height={64}
              />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-md dark:text-gray-050 font-semibold text-gray-900">
              Lyle Kauffman
            </p>
            <cite className="text-sm font-medium text-gray-600 not-italic dark:text-gray-400">
              Content Creator
            </cite>
          </div>
        </div>
      </figcaption>
    </figure>
  );
}
