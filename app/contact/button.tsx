"use client";

import React from "react";

type ContactButtonProps = {
  label?: string;
  onClick?: () => void;
};

export default function ContactButton({
  label = "Click me",
  onClick,
}: ContactButtonProps) {
  const handleClick = () => {
    console.log("Button clicked");
    alert("Contact button clicked!");
    onClick?.();
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
    >
      {label}
    </button>
  );
}
