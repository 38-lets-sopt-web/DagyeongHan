/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export default function Tabs({ onTabChange }) {
  return (
        <nav css={buttonWrapperStyle}>
            <button 
              type="button" 
              onClick={() => onTabChange('game')} 
              css={[buttonStyle, gameButtonStyle]}
            >
              게임
            </button>
            
            <button 
              type="button"
              onClick={() => onTabChange('ranking')} 
              css={[buttonStyle, rankButtonStyle]}
            >
              랭킹
            </button>
        </nav>
  )
}


const buttonWrapperStyle = css`
  display: flex;
  gap: 0.5em;
`;

const buttonStyle = css`
  padding: 0.25em 0.5em;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  cursor: pointer;
`;

const gameButtonStyle = css`
  background: #FFB2B2;
  color: #fff;
`;

const rankButtonStyle = css`
  border: 1px solid #FFB2B2;
  background: #fff;
  color: #FFB2B2;
`;