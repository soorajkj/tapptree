"use client";

import React, { useState } from "react";
import { Icon } from "../core/icon";
import { Dialog } from "../core/dialog";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getAllPlatforms } from "@/utils/quries/platforms";
import {
  createSocialLinksOptions,
  getSocialLinksOptions,
} from "@/utils/quries/socials";
import { InferResponseType } from "hono";
import { rpc } from "@/lib/rpc";
import ChooseStage from "./ChooseStage";
import ListStage from "./LIstStage";
import CreateStage from "./CreateStage";
import UpdateStage from "./UpdateStage";
import SocialButton from "./SocialButton";
import SocialButtonPlaceholder from "./SocialButtonPlaceholder";

type Stage = "list" | "choose" | "add" | "update";
type Platform = InferResponseType<typeof rpc.api.me.platforms.$get>[number];

export default function ManageSocialLinks() {
  const [stage, setStage] = useState<Stage>("list");
  const platformsQuery = useQuery(getAllPlatforms());
  const socialLinksQuery = useQuery(getSocialLinksOptions());
  const socialLinksMutate = useMutation(createSocialLinksOptions());
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );

  const addedPlatformIds = new Set(
    socialLinksQuery.data?.map((link) => link.platformId) ?? []
  );

  const remainingPlatforms = platformsQuery.data?.filter(
    (p) => !addedPlatformIds.has(p.id)
  );

  const handleAddLink = async (platformId: string, url: string) => {
    await socialLinksMutate.mutateAsync({ platformId, url });
    setStage("list");
  };

  const handleUpdateLink = async (platform: string, url: string) => {
    // will comeback later
    setStage("list");
  };

  const handleCloseDialog = () => {
    setSelectedPlatform(null);
    setStage("list");
  };

  const handlePlaceholderClick = (platform: Platform) => {
    setSelectedPlatform(platform);
    setStage("list");
  };

  function renderStage() {
    const stages: Record<Stage, React.ReactNode> = {
      list: (
        <ListStage
          links={socialLinksQuery.data || []}
          onAdd={() => setStage("choose")}
        />
      ),
      choose: (
        <ChooseStage
          platforms={remainingPlatforms || []}
          setSelectedPlatform={setSelectedPlatform}
          back={() => setStage("list")}
          onSelect={() => setStage("add")}
        />
      ),
      add: (
        <CreateStage
          back={() => setStage("choose")}
          selectedPlatform={selectedPlatform}
          onSave={handleAddLink}
        />
      ),
      update: <UpdateStage back={() => setStage("update")} />,
    };

    return stages[stage];
  }

  return (
    <div className="mx-auto flex max-w-md flex-row flex-wrap items-center justify-center gap-2">
      <Dialog.DialogRoot
        onOpenChange={(open) => {
          if (!open) handleCloseDialog();
        }}
      >
        {!socialLinksQuery.data?.length
          ? platformsQuery.data?.slice(0, 3).map((platform, i) => (
              <Dialog.DialogTrigger key={i} asChild>
                <SocialButtonPlaceholder
                  item={platform}
                  onClick={() => handlePlaceholderClick(platform)}
                />
              </Dialog.DialogTrigger>
            ))
          : socialLinksQuery.data.map((link) => (
              <SocialButton key={link.id} item={link} />
            ))}
        <Dialog.DialogTrigger asChild>
          <button className="flex size-12 shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-full border border-dashed border-neutral-800 hover:scale-105 hover:bg-neutral-800/30">
            <div className="flex size-full items-center justify-center overflow-hidden rounded-full text-current">
              <span className="flex shrink-0 items-center justify-center rounded-sm">
                <Icon icon="Plus" className="size-5"></Icon>
              </span>
            </div>
          </button>
        </Dialog.DialogTrigger>
        <Dialog.DialogContent className="max-w-md" aria-describedby={undefined}>
          {renderStage()}
        </Dialog.DialogContent>
      </Dialog.DialogRoot>
    </div>
  );
}
