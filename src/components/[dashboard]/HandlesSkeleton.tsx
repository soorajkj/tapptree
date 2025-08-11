import React from "react";
import HandleSkeleton from "./HandleSkeleton";

export default function HandlesSkeleton() {
  return (
    <div className="grid w-full grid-cols-1 gap-2">
      {[...Array(6)].map((_, i) => (
        <HandleSkeleton key={i} />
      ))}
    </div>
  );
}
