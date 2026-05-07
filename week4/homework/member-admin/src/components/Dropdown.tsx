/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { ChevronDownIcon } from "@/assets/icons";

interface DropdownProps {
  options: string[];
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
}

export default function Dropdown({ options, value, placeholder, onChange }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option: string) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div css={dropdownStyle}>
      <button
        type="button"
        css={dropdownButtonStyle(!value)}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {value || placeholder}
        <ChevronDownIcon css={chevronIconStyle(isOpen)} aria-hidden="true" />
      </button>

      {isOpen && (
        <ul css={dropdownMenuStyle}>
          {options.map((option) => (
            <li key={option}>
              <button
                type="button"
                css={dropdownItemStyle}
                onClick={() => handleSelect(option)}
              >
                {option}
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
  width: 30em;
`;

const dropdownButtonStyle = (isPlaceholder: boolean) => css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em 1em;
  border: none;
  border-radius: 8px;
  background: #fff;
  color: ${isPlaceholder ? "#75798a" : ""};
  font-weight: 500;
  font-size: 0.875em;
  cursor: pointer;
`;

const chevronIconStyle = (isOpen: boolean) => css`
  width: 1.25em;
  height: 1.25em;
  transform: rotate(${isOpen ? "180deg" : "0deg"});
  transition: transform 0.2s ease;
`;

const dropdownMenuStyle = css`
  position: absolute;
  top: calc(100% + 0.25em);
  left: 0;
  z-index: 10;
  width: 100%;
  margin: 0;
  padding: 0.25em 0;
  list-style: none;
  border-radius: 8px;
  background: #fff;
  overflow: hidden;
`;

const dropdownItemStyle = css`
  width: 100%;
  padding: 0.5em 1em;
  border: none;
  background: none;
  color: #0f1012;
  font-weight: 500;
  font-size: 0.875em;
  text-align: left;
  cursor: pointer;

  &:hover {
    background: #e8f8fd;
  }
`;
