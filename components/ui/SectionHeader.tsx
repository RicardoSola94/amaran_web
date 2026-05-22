interface SectionHeaderProps {
  eyebrow?: string
  title: string
  subtitle?: string
  centered?: boolean
  light?: boolean
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeaderProps) {
  const textAlign = centered ? 'text-center' : 'text-left'
  const titleColor = light ? 'text-brand-white' : 'text-brand-black'
  const subtitleColor = light ? 'text-brand-gray-400' : 'text-brand-gray-600'

  return (
    <div className={`mb-12 ${textAlign}`}>
      {eyebrow && (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 16 }}>
          <div style={{ width: 24, height: 1, backgroundColor: '#C9A84C' }} />
          <span style={{ fontFamily: 'var(--font-body)', fontSize: 10, fontWeight: 500, letterSpacing: '0.20em', textTransform: 'uppercase', color: '#C9A84C' }}>
            {eyebrow}
          </span>
          <div style={{ width: 24, height: 1, backgroundColor: '#C9A84C' }} />
        </div>
      )}
      <h2
        className={`${titleColor} text-4xl md:text-5xl font-display leading-tight mb-4`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`${subtitleColor} text-lg max-w-2xl ${centered ? 'mx-auto' : ''} font-body`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
