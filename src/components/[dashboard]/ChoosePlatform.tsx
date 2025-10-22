"use client";

import React, { Fragment } from "react";
import { Dialog } from "@/components/core/dialog";
import Button from "@/components/core/button";
import { type Platform } from "@/types/platform";

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
        <Dialog.DialogTitle>Choose Platform</Dialog.DialogTitle>
      </Dialog.DialogHeader>
      <div className="flex flex-col gap-1">
        {!platforms.length && (
          <p>Every platform&apos;s been added. You&apos;re unstoppable! 🎉</p>
        )}
        {platforms.map((platform) => (
          <div
            key={platform.id}
            className="cursor-pointer overflow-hidden rounded-md border border-neutral-200 bg-white p-3 shadow-2xs"
            onClick={() => onSelect(platform)}
          >
            <p className="text-neutral-600">{platform.name}</p>
          </div>
        ))}
      </div>
      <Dialog.DialogFooter>
        <Button variant="secondary" width="full" onClick={onBack}>
          Back to my Handles
        </Button>
      </Dialog.DialogFooter>
    </Fragment>
  );
}
