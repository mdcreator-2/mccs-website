export default function SectionHeading({
  title,
  subtitle,
  align = 'center',
  className = '',
  light = false,
}) {
  const alignClasses = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <div className={`flex flex-col ${alignClasses} mb-12 ${className}`}>
      <h2 className={`font-serif text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight ${light ? 'text-white' : 'text-primary'}`}>
        {title}
      </h2>

      {/* Gold divider */}
      <div
        className="mt-5 h-px w-16"
        style={{
          background:
            'linear-gradient(to right, #B8976A, #D4BC94, transparent)',
        }}
      />

      {subtitle && (
        <p className={`font-body text-lg mt-4 max-w-2xl ${light ? 'text-white/70' : 'text-text-secondary'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
