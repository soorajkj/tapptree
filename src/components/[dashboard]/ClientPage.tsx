"use client";

import React from "react";
import ManageHandles from "./ManageHandles";
import Handles from "./Handles";

export default function ClientPage() {
  return (
    <div className="space-y-6">
      <Handles />
      <ManageHandles />
    </div>
  );
}
