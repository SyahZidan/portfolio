import type { BorderGlowProps } from "../components/ui/BorderGlow";

type Theme = "dark" | "light";

const darkGlow: Pick<
  BorderGlowProps,
  "backgroundColor" | "glowColor" | "colors" | "glowIntensity" | "fillOpacity"
> = {
  backgroundColor: "rgba(14, 14, 16, 0.94)",
  glowColor: "72 100 63",
  colors: ["#d4ff3f", "#8fb100", "#ffffff"],
  glowIntensity: 0.9,
  fillOpacity: 0.35,
};

const lightGlow: Pick<
  BorderGlowProps,
  "backgroundColor" | "glowColor" | "colors" | "glowIntensity" | "fillOpacity"
> = {
  backgroundColor: "rgba(245, 242, 235, 0.82)",
  glowColor: "75 55 38",
  colors: ["#8fb100", "#d4ff3f", "#f3f0e8"],
  glowIntensity: 0.85,
  fillOpacity: 0.3,
};

export function getGlowTheme(theme: Theme) {
  return theme === "light" ? lightGlow : darkGlow;
}
