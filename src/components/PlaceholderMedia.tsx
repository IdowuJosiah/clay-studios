const gradients = [
  "from-maroon via-maroon-700 to-maroon-900",
  "from-maroon-900 via-maroon-700 to-gold",
  "from-gold via-maroon-700 to-maroon-900",
  "from-maroon-700 via-maroon-900 to-black",
];

export default function PlaceholderMedia({
  label,
  index = 0,
  className = "",
}: {
  label?: string;
  index?: number;
  className?: string;
}) {
  const gradient = gradients[index % gradients.length];

  return (
    <div
      className={`relative flex items-end overflow-hidden bg-gradient-to-br ${gradient} ${className}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.18),transparent_55%)]" />
      {label && (
        <span className="relative z-10 m-4 rounded-md bg-black/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/80 backdrop-blur">
          {label}
        </span>
      )}
    </div>
  );
}
