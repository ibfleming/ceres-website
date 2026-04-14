"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { Button } from "~/components/ui/button";
import { Sun, Moon } from "lucide-react";

const emptySubscribe = () => () => undefined;
const useIsMounted = () =>
  useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useIsMounted();

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={
        mounted ? `Switch to ${isDark ? "light" : "dark"} mode` : "Toggle theme"
      }
      suppressHydrationWarning
      className="absolute top-4 right-4 z-50 cursor-pointer bg-transparent transition-transform hover:scale-110 hover:bg-transparent dark:hover:bg-transparent"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 text-white transition-all dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 text-white transition-all dark:scale-100 dark:rotate-0" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
