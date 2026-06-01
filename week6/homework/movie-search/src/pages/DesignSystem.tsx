const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mb-10">
    <h2 className="typo-h4 text-(--color-text-strong) border-b border-border-normal pb-2 mb-4">
      {title}
    </h2>
    {children}
  </section>
)

const Swatch = ({ label, varName }: { label: string; varName: string }) => (
  <div
    className="px-3 py-2 rounded-(--radius-small) typo-caption2 border border-border-normal"
    style={{
      backgroundColor: `var(${varName})`,
      color: `oklch(from var(${varName}) calc((0.623 - l) * infinity) 0 0)`,
    }}
  >
    {label}
  </div>
)

const SwatchGroup = ({ title, tokens }: { title: string; tokens: { label: string; varName: string }[] }) => (
  <div className="mb-6">
    <p className="typo-title3 text-(--color-text-normal) mb-3">{title}</p>
    <div className="flex flex-wrap gap-3">
      {tokens.map((t) => (
        <Swatch key={t.varName} {...t} />
      ))}
    </div>
  </div>
)

const BRAND_TOKENS = [
  { label: 'primary', varName: '--color-brand-primary' },
  { label: 'primary-light', varName: '--color-brand-primary-light' },
  { label: 'primary-dark', varName: '--color-brand-primary-dark' },
  { label: 'secondary', varName: '--color-brand-secondary' },
  { label: 'secondary-light', varName: '--color-brand-secondary-light' },
  { label: 'secondary-dark', varName: '--color-brand-secondary-dark' },
]

const BUTTON_TOKENS = [
  { label: 'primary', varName: '--color-button-primary' },
  { label: 'primary-pressed', varName: '--color-button-primary-pressed' },
  { label: 'disabled', varName: '--color-button-disabled' },
  { label: 'neutral-ghost', varName: '--color-button-neutral-ghost' },
  { label: 'neutral', varName: '--color-button-neutral' },
  { label: 'neutral-pressed', varName: '--color-button-neutral-pressed' },
]

const BG_TOKENS = [
  { label: 'primary', varName: '--color-bg-primary' },
  { label: 'secondary', varName: '--color-bg-secondary' },
  { label: 'input', varName: '--color-bg-input' },
  { label: 'elevated', varName: '--color-bg-elevated' },
  { label: 'skeleton', varName: '--color-bg-skeleton' },
]

const STATE_TOKENS = [
  { label: 'success', varName: '--color-state-success' },
  { label: 'success-light', varName: '--color-state-success-light' },
  { label: 'success-strong', varName: '--color-state-success-strong' },
  { label: 'caution', varName: '--color-state-caution' },
  { label: 'error', varName: '--color-state-error' },
  { label: 'error-light', varName: '--color-state-error-light' },
  { label: 'error-strong', varName: '--color-state-error-strong' },
]

const NEUTRAL_TOKENS = [
  { label: '50', varName: '--color-neutral-50' },
  { label: '100', varName: '--color-neutral-100' },
  { label: '150', varName: '--color-neutral-150' },
  { label: '200', varName: '--color-neutral-200' },
  { label: '250', varName: '--color-neutral-250' },
  { label: '300', varName: '--color-neutral-300' },
  { label: '350', varName: '--color-neutral-350' },
  { label: '400', varName: '--color-neutral-400' },
  { label: '500', varName: '--color-neutral-500' },
  { label: '600', varName: '--color-neutral-600' },
  { label: '700', varName: '--color-neutral-700' },
  { label: '800', varName: '--color-neutral-800' },
  { label: '900', varName: '--color-neutral-900' },
  { label: 'black', varName: '--color-neutral-black' },
  { label: 'white', varName: '--color-neutral-white' },
]

const TYPO_SAMPLES = [
  { cls: 'typo-h1', label: 'H1 · Bold 36px' },
  { cls: 'typo-h2', label: 'H2 · Bold 32px' },
  { cls: 'typo-h3', label: 'H3 · Bold 24px' },
  { cls: 'typo-h4', label: 'H4 · Bold 20px' },
  { cls: 'typo-title1', label: 'Title1 · Bold 18px' },
  { cls: 'typo-title2', label: 'Title2 · SemiBold 16px' },
  { cls: 'typo-title3', label: 'Title3 · SemiBold 14px' },
  { cls: 'typo-title4', label: 'Title4 · SemiBold 12px' },
  { cls: 'typo-body1', label: 'Body1 · Medium 16px' },
  { cls: 'typo-body2', label: 'Body2 · Medium 14px' },
  { cls: 'typo-caption1', label: 'Caption1 · Medium 14px' },
  { cls: 'typo-caption2', label: 'Caption2 · Medium 12px' },
  { cls: 'typo-caption3', label: 'Caption3 · Medium 10px' },
  { cls: 'typo-button1', label: 'Button1 · Bold 16px' },
  { cls: 'typo-button2', label: 'Button2 · SemiBold 14px' },
  { cls: 'typo-label1', label: 'Label1 · Bold 12px' },
  { cls: 'typo-label2', label: 'Label2 · Medium 12px' },
  { cls: 'typo-label3', label: 'Label3 · SemiBold 10px' },
]

const RADIUS_TOKENS = [
  { label: 'small · 8px', varName: '--radius-small' },
  { label: 'medium · 12px', varName: '--radius-medium' },
  { label: 'large · 25px', varName: '--radius-large' },
]

const SPACING_TOKENS = [
  { label: '100 · 4px', value: 'var(--spacing-100)' },
  { label: '200 · 8px', value: 'var(--spacing-200)' },
  { label: '300 · 12px', value: 'var(--spacing-300)' },
  { label: '400 · 16px', value: 'var(--spacing-400)' },
  { label: '500 · 20px', value: 'var(--spacing-500)' },
  { label: '600 · 24px', value: 'var(--spacing-600)' },
  { label: '700 · 32px', value: 'var(--spacing-700)' },
  { label: '800 · 40px', value: 'var(--spacing-800)' },
]

export default function DesignSystem() {
  return (
    <div
      className="min-h-dvh px-6 py-8"
      style={{ backgroundColor: 'var(--color-bg-primary)', color: 'var(--color-text-normal)' }}
    >
      <h1 className="typo-h2 text-(--color-text-strong) mb-8">Design System</h1>

      <Section title="Colors">
        <SwatchGroup title="Brand" tokens={BRAND_TOKENS} />
        <SwatchGroup title="Button" tokens={BUTTON_TOKENS} />
        <SwatchGroup title="Background" tokens={BG_TOKENS} />
        <SwatchGroup title="State" tokens={STATE_TOKENS} />
        <SwatchGroup title="Neutral" tokens={NEUTRAL_TOKENS} />
      </Section>

      <Section title="Typography">
        <div className="flex flex-col gap-3">
          {TYPO_SAMPLES.map(({ cls, label }) => (
            <div key={cls} className="flex items-baseline gap-4 border-b border-border-alternative pb-3">
              <span className="typo-caption2 text-text-caption w-28 shrink-0">{label}</span>
              <span className={cls} style={{ color: 'var(--color-text-strong)' }}>
                가나다라마바사 ABCDEFabcdef
              </span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Border Radius">
        <div className="flex gap-6 flex-wrap">
          {RADIUS_TOKENS.map(({ label, varName }) => (
            <div key={varName} className="flex flex-col items-center gap-2">
              <div
                className="w-16 h-16 bg-(--color-brand-primary)"
                style={{ borderRadius: `var(${varName})` }}
              />
              <span className="typo-caption2 text-text-caption">{label}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Spacing">
        <div className="flex items-end gap-4 flex-wrap">
          {SPACING_TOKENS.map(({ label, value }) => (
            <div key={label} className="flex flex-col items-center gap-1">
              <div
                className="bg-(--color-brand-primary) w-4"
                style={{ height: value }}
              />
              <span className="typo-caption3 text-text-caption">{label}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Border">
        <div className="flex gap-4 flex-wrap">
          {[
            { label: 'normal', varName: '--color-border-normal' },
            { label: 'strong', varName: '--color-border-strong' },
            { label: 'alternative', varName: '--color-border-alternative' },
            { label: 'focus-primary', varName: '--color-border-focus-primary' },
            { label: 'focus-error', varName: '--color-border-focus-error' },
          ].map(({ label, varName }) => (
            <div key={varName} className="flex flex-col gap-1">
              <div
                className="w-24 h-12 rounded-(--radius-small) bg-(--color-bg-secondary)"
                style={{ border: `2px solid var(${varName})` }}
              />
              <span className="typo-caption2 text-text-caption">{label}</span>
            </div>
          ))}
        </div>
      </Section>
    </div>
  )
}
