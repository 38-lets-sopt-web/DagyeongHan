/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import Tabs from './Tabs';

export default function Header({ activeTab, onTabChange }) {
  return (
    <div css={headerStyle}>
      <h3 css={titleStyle}>두더지 게임</h3>
      <Tabs activeTab={activeTab} onTabChange={onTabChange} />
    </div>
  )
}

const headerStyle = css`
  display: flex;
  align-items: center;
  padding: 1em;
  gap: 0.5rem;
  box-sizing: border-box;
  background: #FFFBF1;
`;

const titleStyle = css`
  margin: 0;
`;