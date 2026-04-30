/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { css } from '@emotion/react';
import GameBoard from '../components/game/GameBoard';
import GameControls from '../components/game/GameControls';
import LeftTimeBox from '../components/game/LeftTimeBox';
import LevelSelect from '../components/game/LevelSelect';
import MessageBox from '../components/game/MessageBox';
import ResultBox from '../components/game/ResultBox';
import TotalPointBox from '../components/game/TotalPointBox';
import { BOARD_SIZE } from '../constants/game';
import useWhackAMoleGame from '../hooks/useWhackAMoleGame';

export default function Game() {

  const [level, setLevel] = useState('2');
  
  const {
    failCount,
    handleHoleClick,
    handleStart,
    handleStop,
    isPlaying,
    message,
    score,
    successCount,
    target,
    timeLeft,
  } = useWhackAMoleGame({ level });

  return (
    <div css={gameLayoutStyle}>
      {/* 남은 시간 */}
      <section css={[cardStyle, timeAreaStyle]}>
        <LeftTimeBox timeLeft={timeLeft} />
      </section>

      {/* 총 점수 */}
      <section css={[cardStyle, scoreAreaStyle]}>
        <TotalPointBox score={score} />
      </section>

      {/* 결과 */}
      <section css={resultAreaStyle}>
        <ResultBox label="성공" count={successCount} type="success" />
        <ResultBox label="실패" count={failCount} type="fail" />
      </section>

      {/* 안내 메세지 */}
      <section css={[cardStyle, messageAreaStyle]}>
        <MessageBox message={message} />
      </section>

      {/* 게임 보드 */}
      <section css={gameAreaStyle}>
        <div css={gameTopStyle}>
          <LevelSelect value={level} onChange={setLevel} />
          <GameControls onStart={handleStart} onStop={handleStop} isPlaying={isPlaying} />
        </div>

        <GameBoard boardSize={BOARD_SIZE} target={target} onHoleClick={handleHoleClick} />
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
