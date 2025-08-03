"use client";

import React, { Fragment } from "react";
import ProfileForm from "./ProfileForm";
import SocialsButtons from "./SocialsButtons";

export default function ClientPage() {
  return (
    <Fragment>
      <div className="flex w-full flex-col gap-6 py-24">
        <ProfileForm />
        <SocialsButtons />
        {/* <SortableList
          items={[...Array(6)].map((_, i) => ({ id: i }))}
          onChange={() => {}}
          renderItem={(_) => (
            <SortableItem id={_.id} key={_.id}>
              <SocialCard id={_.id} />
            </SortableItem>
          )}
        ></SortableList> */}
      </div>
    </Fragment>
  );
}
