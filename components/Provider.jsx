"use client";
import * as React from "react";
import { SessionProvider } from "next-auth/react";

import { NextUIProvider } from "@nextui-org/react";

export default function Providers({ children, session }) {
  return (
    <NextUIProvider>
      <SessionProvider session={session}>{children}</SessionProvider>
    </NextUIProvider>
  );
}
