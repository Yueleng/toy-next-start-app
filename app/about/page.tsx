"use client";

import { useState } from "react";

export default function CountComponent() {
  const [count, setCount] = useState(0);
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex flex-1 items-center justify-center">
        <h1>About</h1>
        <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      </main>
    </div>
  );
}
