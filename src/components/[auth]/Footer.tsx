import React from "react";

export default function Footer() {
  return (
    <footer className="w-full">
      <p className="text-tertiary text-sm">
        © Tapptree {new Date().getFullYear()}
      </p>
    </footer>
  );
}
