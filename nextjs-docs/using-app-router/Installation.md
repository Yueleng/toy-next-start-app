# Installation

## Quick Start

## System requirements

## Supported browsers

## Create with the CLI

## Manual Installation

### Create the `app` directory

```ts
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

`app/page.tsx`

```ts
export default function Page() {
  return <h1>Hello, Next.js!</h1>;
}
```

### Create the `public` folder (optional)

```ts
import Image from "next/image";

export default function Page() {
  return <Image src="/profile.png" alt="Profile" width={100} height={100} />;
}
```

## Run the development server

## Set up Typescript

### IDE Plugin

## Set up Absolute Imports and Module Path Aliases
