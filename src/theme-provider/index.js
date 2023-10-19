"use client";

import { ThemeProvider } from "next-themes";
import * as React from "react";

export default function NextThemeProvider({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      {children}
    </ThemeProvider>
  );
}
