import { useEffect, useRef, useState } from 'react'
import { ChevronDownIcon } from '@/shared/assets/icons'
import type { Option } from '@/shared/types/common'

type DropdownProps = {
  options: Option[]
  value?: string
  onChange?: (value: string) => void
  placeholder?: string
}

const ChevronIcon = ({ open }: { open: boolean }) => (
  <ChevronDownIcon
    className={`shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : 'rotate-0'}`}
  />
)

const Dropdown = ({ options, value, onChange, placeholder = '선택하세요' }: DropdownProps) => {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const selected = options.find((o) => o.value === value)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div ref={ref} className="relative inline-block min-w-40">
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={`
          w-full flex items-center justify-between gap-2
          px-3.5 py-2.5 typo-body2 cursor-pointer
          bg-bg-input rounded-(--radius-small)
          border transition-colors duration-150
          ${open ? 'border-(--color-border-focus-primary)' : 'border-border-normal'}
          ${selected ? 'text-text-normal' : 'text-text-placeholder'}
        `}
      >
        <span>{selected ? selected.label : placeholder}</span>
        <ChevronIcon open={open} />
      </button>

      {/* Panel */}
      <div className={`
        absolute top-[calc(100%+6px)] left-0 right-0 z-50 overflow-hidden
        bg-bg-elevated border border-border-normal rounded-(--radius-small)
        shadow-[0_8px_24px_rgba(0,0,0,0.4)]
        transition-all duration-300 ease-[ease]
        ${open ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-1 pointer-events-none'}
      `}>
          {options.map((option) => {
            const isSelected = option.value === value
            return (
              <button
                key={option.value}
                type="button"
                onClick={() => {
                  onChange?.(option.value)
                  setOpen(false)
                }}
                className={`
                  w-full text-left px-3.5 py-2.5 typo-body2
                  cursor-pointer border-none transition-colors duration-100
                  hover:bg-(--color-bg-secondary)
                  ${isSelected
                    ? 'bg-(--color-bg-secondary) text-(--color-brand-primary)'
                    : 'bg-transparent text-text-normal'
                  }
                `}
              >
                {option.label}
              </button>
            )
          })}
      </div>
    </div>
  )
}

export default Dropdown
