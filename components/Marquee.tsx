type Props = {
  items: string[];
  className?: string;
  /** Slower speed suits long strings of text. */
  slow?: boolean;
};

/**
 * Infinite horizontal ticker. The list is rendered twice and translated by
 * -50%, which makes the loop seamless without measuring anything in JS.
 */
export default function Marquee({ items, className = "", slow = false }: Props) {
  const run = [...items, ...items];

  return (
    <div className={`overflow-hidden ${className}`} aria-hidden="true">
      <div
        className="flex w-max"
        style={{ animation: slow ? "var(--animate-marquee-slow)" : "var(--animate-marquee)" }}
      >
        {run.map((item, i) => (
          <span key={i} className="flex shrink-0 items-center">
            <span className="display px-6 text-[clamp(2.5rem,7vw,6rem)]">{item}</span>
            <span className="text-[clamp(1rem,2vw,2rem)] text-flame">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
