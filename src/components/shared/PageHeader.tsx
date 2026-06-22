interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export default function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="bg-canopy pt-36 pb-16">
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <span className="field-code uppercase text-clay-light">{eyebrow}</span>
        <h1 className="mt-4 font-display text-4xl md:text-5xl text-mist text-balance">{title}</h1>
        {description && (
          <p className="mt-5 text-mist/75 text-base md:text-lg leading-relaxed max-w-2xl">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}