import { Fragment, useState } from "react";
import { Dialog } from "../core/dialog";
import { Input } from "../core/input";
import { Button } from "../core/button";
import React from "react";
import { type THandleWithPlatform } from "@/types/handle";

export default function UpdateStage({
  back,
  handle,
  onSave,
}: {
  back: () => void;
  handle: THandleWithPlatform | null;
  onSave: (url: string) => void;
}) {
  const [url, setUrl] = useState<string>(handle?.url ?? "");
  // Update url if handle changes
  React.useEffect(() => {
    setUrl(handle?.url ?? "");
  }, [handle]);
  return (
    <Fragment>
      <Dialog.DialogHeader>
        <div className="flex items-center justify-between">
          <button onClick={back}>b</button>
          <Dialog.DialogTitle>Update icon</Dialog.DialogTitle>
          <Dialog.DialogClose>X</Dialog.DialogClose>
        </div>
      </Dialog.DialogHeader>
      <div className="flex flex-col gap-4">
        <Input value={url} onChange={(e) => setUrl(e.target.value)} />
        <Button disabled={!url} onClick={() => onSave(url)}>
          Save
        </Button>
      </div>
    </Fragment>
  );
}
