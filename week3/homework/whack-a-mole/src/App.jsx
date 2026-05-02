/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { useState } from 'react';
import Header from "./components/Header";
import Game from './pages/Game';
import Ranking from './pages/Ranking';

export default function App() {

  const [activeTab, setActiveTab] = useState('game');

  return (
    <div css={rootStyle}>
      <Header activeTab={activeTab} onTabChange={setActiveTab} />

      {activeTab === 'game' ? <Game /> : <Ranking />}
    </div>
  )
}

const rootStyle = css`
  display: flex;
  flex-direction: column;
  gap: 1em;
  margin: 0;
  padding: 1em;
  box-sizing: border-box;
`;