import { useEffect, useRef, useState } from 'react';
import { DEFAULT_LEVEL, LEVEL_OPTIONS } from '../../constants/game';
import ChevronDownIcon from '../../assets/ic-chevron-down.svg?react';
import { arrowStyle, dropdownStyle, menuStyle, optionStyle, triggerStyle } from './LevelSelect.styles';

export default function LevelSelect({ value = DEFAULT_LEVEL, onChange, disabled = false }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const selectedOption =
    LEVEL_OPTIONS.find((option) => option.value === value) ??
    LEVEL_OPTIONS.find((option) => option.value === DEFAULT_LEVEL);

  const handleSelect = (nextValue) => {
    if (disabled) return;

    onChange?.(nextValue);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!dropdownRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div css={dropdownStyle} ref={dropdownRef}>
      <button
        type="button"
        css={triggerStyle(isOpen)}
        onClick={() => setIsOpen((prevIsOpen) => !prevIsOpen)}
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        {selectedOption.label}
        <ChevronDownIcon css={arrowStyle(isOpen)} aria-hidden="true" focusable="false" />
      </button>

      {isOpen && (
        <ul css={menuStyle} role="listbox">
          {LEVEL_OPTIONS.map((option) => (
            <li key={option.value}>
              <button
                type="button"
                css={optionStyle(option.value === value)}
                onClick={() => handleSelect(option.value)}
                role="option"
                aria-selected={option.value === value}
              >
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}