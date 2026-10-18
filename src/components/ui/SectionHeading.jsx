export default function SectionHeading({
  title,
  subtitle,
  align = 'center',
  className = '',
}) {
  const alignClasses = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <div className={`flex flex-col ${alignClasses} mb-12 ${className}`}>
      <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary">
        {title}
      </h2>

      {/* Gold accent line */}
      <div
        className="mt-4 h-[2px] w-20 rounded-full"
        style={{
          background:
            'linear-gradient(to right, #C5A55A, #E8D5A3, transparent)',
        }}
      />

      {subtitle && (
        <p className="text-text-secondary text-lg mt-4 max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
