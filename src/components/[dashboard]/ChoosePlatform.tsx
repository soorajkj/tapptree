"use client";

import React, { Fragment } from "react";
import { Dialog } from "@/components/core/dialog";
import Button from "@/components/core/button";
import { type Platform } from "@/types/platform";
import { Icon } from "@/components/core/icon";

interface ChoosePlatformProps {
  platforms: Platform[];
  onSelect: (platform: Platform) => void;
  onBack: () => void;
}

export default function ChoosePlatform({
  platforms,
  onSelect,
  onBack,
}: ChoosePlatformProps) {
  return (
    <Fragment>
      <Dialog.DialogHeader>
        <button
          className="flex size-8 cursor-pointer items-center justify-center [&_svg]:size-5"
          onClick={onBack}
        >
          <Icon icon="ChevronLeft"></Icon>
        </button>
        <Dialog.DialogTitle>Choose Platform</Dialog.DialogTitle>
        <Dialog.DialogClose>
          <Icon icon="X" />
        </Dialog.DialogClose>
      </Dialog.DialogHeader>
      <div className="flex w-full flex-col gap-2">
        {!platforms.length && (
          <p>Every platform&apos;s been added. You&apos;re unstoppable! 🎉</p>
        )}
        <div className="flex w-full flex-col">
          {platforms.map((platform) => (
            <div
              key={platform.id}
              className="flex w-full cursor-pointer items-center justify-between overflow-hidden rounded-sm bg-neutral-50 p-3 transition outline-none hover:bg-neutral-100"
              onClick={() => onSelect(platform)}
            >
              <div className="flex items-center gap-2">
                <div className="flex size-8 items-center justify-center">
                  <div className="size-full rounded-md bg-neutral-200"></div>
                </div>
                <p className="font-semibold text-neutral-950">
                  {platform.name}
                </p>
              </div>
              <div className="ml-auto">
                <button className="[&_svg]:size-4">
                  <Icon icon="ChevronRight" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
}
