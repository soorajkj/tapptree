"use client";

import { rpc } from "@/lib/rpc";
import { InferResponseType } from "hono";
import { Fragment } from "react";
import { Dialog } from "../core/dialog";
import { Icon } from "../core/icon";
import SortableList from "./SortableList";
import SortableItem from "./SortableItem";
import SocialCard from "./SocialCard";
import { Button } from "../core/button";

type Link = InferResponseType<typeof rpc.api.me.socials.$get>[number];

export default function ListStage({
  links,
  onAdd,
}: {
  links: Link[];
  onAdd: () => void;
}) {
  return (
    <Fragment>
      <Dialog.DialogHeader>
        <div className="flex items-center justify-between">
          <Dialog.DialogTitle>Social icons</Dialog.DialogTitle>
          <Dialog.DialogClose className="flex items-center justify-center rounded-lg p-2 hover:bg-neutral-800/30">
            <Icon icon="X" className="size-5" />
          </Dialog.DialogClose>
        </div>
      </Dialog.DialogHeader>
      <div className="flex flex-col gap-1">
        <h3 className="text-lg text-white">Show visitors where to find you</h3>
        <p>
          Add your social profiles, email and more as linked icons on your
          Linktree.
        </p>
      </div>
      <div className="flex h-full max-h-80 flex-col gap-4 overflow-y-auto">
        <SortableList
          items={links}
          onChange={() => {}}
          renderItem={(link) => (
            <SortableItem id={link.id} key={link.id}>
              <SocialCard id={link.id} item={link} />
            </SortableItem>
          )}
        ></SortableList>
      </div>
      <Dialog.DialogFooter>
        <Button onClick={onAdd} className="w-full">
          Add new button
        </Button>
      </Dialog.DialogFooter>
    </Fragment>
  );
}
