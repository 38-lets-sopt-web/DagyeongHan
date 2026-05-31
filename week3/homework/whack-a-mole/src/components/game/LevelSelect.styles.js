/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const dropdownStyle = css`
  position: relative;
  width: 7.5em;
`;

export const triggerStyle = (isOpen) => css`
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

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const arrowStyle = (isOpen) => css`
  width: 1.2em;
  height: 1.2em;
  transform: ${isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
  transition: transform 120ms ease;
`;

export const menuStyle = css`
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

export const optionStyle = (isSelected) => css`
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