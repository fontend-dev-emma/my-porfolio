"use client";

import { ThemeProvider } from "next-themes";

function ClientLayoutWrapper({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true}>
      {children}
    </ThemeProvider>
  );
}

export default ClientLayoutWrapper;
