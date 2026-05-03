// @innexora/ui — Tailwind preset.
//
// Consumer apps register this in their tailwind.config.ts:
//
//   import preset from "@innexora/ui/tailwind";
//   export default {
//     presets: [preset],
//     content: [
//       "./app/**/*.{ts,tsx}",
//       "./components/**/*.{ts,tsx}",
//       "./node_modules/@innexora/ui/dist/**/*.{js,mjs}", // critical
//     ],
//   };
//
// Apps must also load tailwindcss-animate themselves (or include the
// equivalent plugin) — presets cannot pre-register npm-resolved plugins
// because the require() resolution context is the consumer's, not the
// preset's.
//
// Fonts: each consumer app loads its own Bricolage Grotesque / Inter /
// JetBrains Mono via next/font and exposes the CSS variables this preset
// expects: --font-display, --font-sans, --font-mono.

module.exports = {
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "ui-serif", "Georgia", "serif"],
        sans: [
          "var(--font-sans)",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "sans-serif",
        ],
        mono: [
          "var(--font-mono)",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "monospace",
        ],
      },
      colors: {
        // Innexora brand palette — teal -> indigo, pulled from the logo.
        brand: {
          teal: {
            50: "#e6f7f5",
            100: "#c2ebe7",
            200: "#8ed7d1",
            300: "#5cc4ba",
            400: "#2fb2a6",
            500: "#01b6ad",
            600: "#00a69c",
            700: "#008e86",
            800: "#006e68",
          },
          indigo: {
            50: "#eef0f9",
            100: "#d4d7ec",
            200: "#a9aed8",
            300: "#7e85c4",
            400: "#545db0",
            500: "#3a3fa3",
            600: "#2e3191",
            700: "#282a73",
            800: "#1f2159",
            900: "#171940",
            950: "#0E1330",
          },
        },
        // Editorial Atlas surface tokens.
        // `paper`: warm cream canvas; `ink`: indigo-tinted near-black text;
        // `brass`: amber accent for emphasis (single warm note in an
        // otherwise cool palette - used sparingly for active/hover/highlight).
        paper: {
          50: "#FFFDF8",
          100: "#FBFAF6",
          200: "#F4F1E9",
          300: "#E9E4D6",
        },
        ink: {
          DEFAULT: "#0E1330",
          900: "#0E1330",
          800: "#1A1F4A",
          700: "#2A2F5C",
          600: "#444976",
          500: "#6B6F94",
          400: "#9A9DB4",
          300: "#C8CAD7",
        },
        brass: {
          50: "#FAF4E6",
          100: "#F2E5C2",
          200: "#E5CB8C",
          300: "#D7B05B",
          400: "#C7944A",
          500: "#B07F3A",
          600: "#8E662E",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        // Warm, low-spread shadow that mimics paper sitting on paper -
        // an indigo-tinted blur (not pure black) so cards feel like part
        // of the cream canvas rather than floating planes.
        paper:
          "0 1px 2px rgba(14,19,48,0.04), 0 4px 16px rgba(14,19,48,0.06)",
        "paper-lg":
          "0 2px 4px rgba(14,19,48,0.06), 0 12px 32px rgba(14,19,48,0.08)",
        "brass-glow":
          "0 0 0 1px rgba(199,148,74,0.45), 0 6px 20px rgba(199,148,74,0.18)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        // Editorial Atlas motion vocabulary. All translate/opacity only -
        // GPU-friendly and free from layout thrash.
        "stagger-up": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-soft": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        // Slow drifting hue for hero gradients - moves the linear gradient
        // angle a few degrees on a 18s loop. Subtle enough to feel like
        // light shifting through a window, not a screensaver.
        "hue-drift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "dot-pulse": {
          "0%, 100%": { transform: "scale(1)", opacity: "0.55" },
          "50%": { transform: "scale(1.6)", opacity: "0" },
        },
        "underline-draw": {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
        "ticker-scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "rule-in": {
          "0%": { transform: "scaleY(0)" },
          "100%": { transform: "scaleY(1)" },
        },
        // Aurora - a single radial flare lazily traces a closed loop
        // across the surface. Transform-only so it never reflows; the
        // 22s cycle is slow enough to feel ambient (peripheral
        // movement) rather than active (foreground motion).
        "aurora-drift": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "25%": { transform: "translate(6%, -4%) scale(1.05)" },
          "50%": { transform: "translate(-3%, 5%) scale(0.97)" },
          "75%": { transform: "translate(-7%, -2%) scale(1.04)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "stagger-up": "stagger-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) both",
        "fade-in-soft": "fade-in-soft 0.6s ease-out both",
        "hue-drift": "hue-drift 18s ease-in-out infinite",
        "dot-pulse": "dot-pulse 2.4s ease-out infinite",
        "underline-draw":
          "underline-draw 0.5s cubic-bezier(0.22, 1, 0.36, 1) both",
        "ticker-scroll": "ticker-scroll 60s linear infinite",
        "rule-in": "rule-in 0.35s cubic-bezier(0.22, 1, 0.36, 1) both",
        "aurora-drift": "aurora-drift 22s ease-in-out infinite",
      },
    },
  },
};
