/**
 * Lightweight ambient background — static layered gradients only.
 * Animated radial blurs were removed because they re-paint full-screen
 * every frame and tanked scroll performance.
 */
const AmbientBackground = () => (
  <div
    className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    aria-hidden="true"
    style={{
      background:
        "radial-gradient(ellipse 60% 40% at 20% 30%, hsl(250 40% 14% / 0.45) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 80% 60%, hsl(190 50% 12% / 0.32) 0%, transparent 70%), radial-gradient(ellipse 40% 60% at 50% 80%, hsl(270 30% 10% / 0.28) 0%, transparent 60%)",
    }}
  />
);

export default AmbientBackground;
