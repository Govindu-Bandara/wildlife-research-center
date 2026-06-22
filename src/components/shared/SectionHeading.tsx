interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "text-center mx-auto max-w-2xl" : ""}>
      <span className="field-code uppercase">{eyebrow}</span>
      <h2
        className={`mt-3 text-3xl md:text-4xl font-medium text-balance ${
          light ? "text-mist" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed ${
            light ? "text-mist/75" : "text-ink-soft"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}