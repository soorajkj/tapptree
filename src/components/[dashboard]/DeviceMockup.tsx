import React, { type ComponentProps } from "react";

export default function DeviceMockup({ children }: ComponentProps<"div">) {
  return (
    <div className="iphone">
      <div className="iphone-camera" />
      <div className="iphone-display">{children}</div>
    </div>
  );
}
