"use client";

import React, { Fragment, type PropsWithChildren } from "react";

export default function SessionProvider({ children }: PropsWithChildren) {
  return <Fragment>{children}</Fragment>;
}
