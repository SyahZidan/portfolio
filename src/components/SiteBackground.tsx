import { useApp } from "../context/AppContext";

export function SiteBackground() {
  const { theme } = useApp();

  return (
    <div className="site-bg" data-theme={theme} aria-hidden="true">
      <div className="site-bg__mesh" />
      <div className="site-bg__grid" />
      <div className="site-bg__orb site-bg__orb--primary" />
      <div className="site-bg__orb site-bg__orb--secondary" />
      <div className="site-bg__orb site-bg__orb--accent" />
      <div className="site-bg__vignette" />
    </div>
  );
}
