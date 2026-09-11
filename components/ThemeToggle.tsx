"use client";

import { useState } from "react";

type Theme = "dark" | "light";

function currentTheme(): Theme {
  if (typeof document === "undefined") return "dark";
  return document.documentElement.classList.contains("light") ? "light" : "dark";
}

// Theme control (design.md palette addendum): persists to localStorage,
// flips the .light class the ThemeScript bootstraps. Renders a neutral glyph
// until mounted so server/client markup never mismatches.
export function ThemeToggle({ className = "" }: { className?: string }) {
  const [theme, setTheme] = useState<Theme | null>(null);
  const resolved = theme ?? null;

  const toggle = () => {
    const next: Theme = currentTheme() === "light" ? "dark" : "light";
    document.documentElement.classList.toggle("light", next === "light");
    try {
      localStorage.setItem("ce-theme", next);
    } catch {
      /* private mode — theme still flips for the session */
    }
    setTheme(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={
        resolved === "light" ? "Switch to dark theme" : "Switch to light theme"
      }
      title={resolved === "light" ? "Switch to dark theme" : "Switch to light theme"}
      className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-sm border border-zinc-800 text-zinc-300 transition hover:border-zinc-700 hover:text-zinc-100 ${className}`}
    >
      <svg
        aria-hidden
        viewBox="0 0 16 16"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        {resolved === null ? (
          <circle cx="8" cy="8" r="3.25" />
        ) : resolved === "light" ? (
          /* moon — click for dark */
          <path
            d="M13.5 9.5A5.5 5.5 0 0 1 6.5 2.5a5.5 5.5 0 1 0 7 7Z"
            strokeLinejoin="round"
          />
        ) : (
          /* sun — click for light */
          <>
            <circle cx="8" cy="8" r="3" />
            <path
              d="M8 1.5v1.5M8 13v1.5M1.5 8H3M13 8h1.5M3.4 3.4l1 1M11.6 11.6l1 1M12.6 3.4l-1 1M4.4 11.6l-1 1"
              strokeLinecap="round"
            />
          </>
        )}
      </svg>
    </button>
  );
}
