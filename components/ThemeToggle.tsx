"use client";

import { useTheme } from "next-themes";
import { Monitor, Moon, Sun, Palette } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    const cycleTheme = () => {
        if (theme === "default") {
            setTheme("cyberpunk");
        } else if (theme === "cyberpunk") {
            setTheme("matrix");
        } else {
            setTheme("default");
        }
    };

    const getIcon = () => {
        switch (theme) {
            case "cyberpunk":
                return <Moon className="w-5 h-5 text-pink-500 drop-shadow-[0_0_8px_rgba(236,72,153,0.8)]" />;
            case "matrix":
                return <Monitor className="w-5 h-5 text-green-500 drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]" />;
            default:
                return <Palette className="w-5 h-5 text-blue-500 drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]" />;
        }
    };

    return (
        <button
            onClick={cycleTheme}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-all backdrop-blur-md border border-white/10 hover:border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_var(--color-accent-glow)] group relative"
            aria-label="Toggle theme"
        >
            {getIcon()}
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity bg-background px-2 py-1 rounded backdrop-blur-md border border-white/10 whitespace-nowrap text-foreground z-50">
                {theme || "default"}
            </span>
        </button>
    );
}
