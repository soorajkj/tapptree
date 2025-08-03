import { Fragment, useState } from "react";
import { Dialog } from "../core/dialog";
import { Input } from "../core/input";
import { Button } from "../core/button";

export default function UpdateStage({ back }: { back: () => void }) {
  const [url, setUrl] = useState<string>("");

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
        <Button disabled={!url} onClick={() => {}}>
          Save
        </Button>
      </div>
    </Fragment>
  );
}
