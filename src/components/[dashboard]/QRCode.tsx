"use client";

import React, { useState, useEffect } from "react";
import { type QrCodeGenerateData, renderSVG } from "uqr";

export default function QRCode({ data }: { data: QrCodeGenerateData }) {
  const [svg, setSvg] = useState("");

  useEffect(() => {
    const generatedSVG = renderSVG(data, {});
    setSvg(generatedSVG);
  }, [data]);

  return (
    <div
      dangerouslySetInnerHTML={{ __html: svg }}
      aria-label="QR Code"
      role="img"
      className="size-full"
    />
  );
}
