/** @jsxImportSource @emotion/react */
import { useEffect, useRef, useState } from 'react';
import { css } from '@emotion/react';
import ChevronDownIcon from '../../assets/ic-chevron-down.svg?react';

const LEVEL_OPTIONS = [
  { value: '1', label: 'Level 1' },
  { value: '2', label: 'Level 2' },
  { value: '3', label: 'Level 3' },
];

export default function LevelSelect({ value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value ?? '2');
  const dropdownRef = useRef(null);

  const currentValue = value ?? selectedValue;
  const selectedOption =
    LEVEL_OPTIONS.find((option) => option.value === currentValue) ?? LEVEL_OPTIONS[1];

  const handleSelect = (nextValue) => {
    setSelectedValue(nextValue);
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
                css={optionStyle(option.value === currentValue)}
                onClick={() => handleSelect(option.value)}
                role="option"
                aria-selected={option.value === currentValue}
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

const dropdownStyle = css`
  position: relative;
  width: 7.5em;
`;

const triggerStyle = (isOpen) => css`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.6em;
  padding: 0.5em 1em;
  border: none;
  border-radius: 12px;
  background: #fff;
  font-size: 1em;
  font-weight: 700;
  cursor: pointer;
  box-shadow: ${isOpen ? '0 0 0 3px rgba(255, 178, 178, 0.35)' : 'none'};
`;

const arrowStyle = (isOpen) => css`
  width: 1.2em;
  height: 1.2em;
  transform: ${isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
  transition: transform 120ms ease;
`;

const menuStyle = css`
  position: absolute;
  z-index: 10;
  top: calc(100% + 0.4em);
  left: 0;
  width: 100%;
  box-sizing: border-box;
  margin: 0;
  padding: 0.3em;
  list-style: none;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 0.5em 1.5em rgba(18, 52, 84, 0.14);
`;

const optionStyle = (isSelected) => css`
  width: 100%;
  padding: 0.25em 0.5em;
  border: none;
  border-radius: 9px;
  background: ${isSelected ? '#FFB2B2' : 'transparent'};
  color: ${isSelected ? '#fff' : '#123454'};
  font: inherit;
  font-weight: 700;
  text-align: left;
  cursor: pointer;

  &:hover {
    background: ${isSelected ? '#FFB2B2' : '#fff2f2'};
  }
`;
