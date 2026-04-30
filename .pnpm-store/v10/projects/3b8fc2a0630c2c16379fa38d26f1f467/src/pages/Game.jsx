/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import TotalPointBox from '../components/game/TotalPointBox';
import LeftTimeBox from '../components/game/LeftTimeBox';
import GameBoard from '../components/game/GameBoard';
import ResultBox from '../components/game/ResultBox';
import MessageBox from '../components/game/MessageBox';
import LevelSelect from '../components/game/LevelSelect';
import GameControls from '../components/game/GameControls';

export default function Game() {
  return (
    <div css={gameLayoutStyle}>
      <section css={[cardStyle, timeAreaStyle]}>
        <LeftTimeBox />
      </section>

      <section css={[cardStyle, scoreAreaStyle]}>
        <TotalPointBox />
      </section>

      <section css={resultAreaStyle}>
        <ResultBox label="성공" count={0} type="success" />
        <ResultBox label="실패" count={0} type="fail" />
      </section>

      <section css={[cardStyle, messageAreaStyle]}>
        <MessageBox />
      </section>

      <section css={gameAreaStyle}>
        <div css={gameTopStyle}>
          <LevelSelect />
          <GameControls />
        </div>

        <GameBoard />
      </section>
    </div>
  );
}

const gameLayoutStyle = css`
  display: grid;
  grid-template-columns: 15em 1fr;
  grid-template-areas:
    "time game"
    "score game"
    "result game"
    "message game";
  gap: 1em;
  align-items: stretch;
`;

const timeAreaStyle = css`
  grid-area: time;
`;

const scoreAreaStyle = css`
  grid-area: score;
`;

const resultAreaStyle = css`
  grid-area: result;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1em;
`;

const messageAreaStyle = css`
  grid-area: message;
`;

const gameAreaStyle = css`
  grid-area: game;
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding: 1em;
  border-radius: 12px;
  background: #FFF7CD;
`;

const cardStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em;
  border-radius: 12px;
  background: #FFF7CD;
`;

const gameTopStyle = css`
  display: flex;
  justify-content: space-between;
`;
