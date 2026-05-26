/**
 * Lightweight static section dividers — no animation to keep scroll smooth.
 */
export const SectionConnector = ({ variant = "default" }: { variant?: "default" | "accent" }) => {
  const color = variant === "accent"
    ? "hsl(190 80% 50% / 0.15)"
    : "hsl(250 60% 58% / 0.12)";

  return (
    <div className="relative py-2 flex justify-center" aria-hidden="true">
      <div
        className="w-px h-16"
        style={{ background: `linear-gradient(to bottom, transparent, ${color}, transparent)` }}
      />
    </div>
  );
};

export const SectionGlow = ({
  position = "center",
  color = "primary",
}: {
  position?: "left" | "center" | "right";
  color?: "primary" | "secondary";
}) => {
  const posMap = { left: "20%", center: "50%", right: "80%" };
  const hue = color === "secondary" ? "190 80% 50%" : "250 60% 58%";

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <div
        className="absolute w-[500px] h-[500px] rounded-full opacity-[0.04]"
        style={{
          left: posMap[position],
          top: "50%",
          transform: "translate(-50%, -50%)",
          background: `radial-gradient(circle, hsl(${hue} / 0.4) 0%, transparent 70%)`,
        }}
      />
    </div>
  );
};
