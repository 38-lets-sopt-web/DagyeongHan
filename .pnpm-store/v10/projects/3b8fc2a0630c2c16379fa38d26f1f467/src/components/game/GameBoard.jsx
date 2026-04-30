/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export default function GameBoard() {

  const boardSize = 2;
  
  return (
    <div  css={boardStyle(boardSize)}>
      {Array.from({ length: boardSize * boardSize }).map((_, index) => (
        <button key={index} type="button" css={holeStyle} />
      ))}
    </div>
  )
}

const boardStyle =(boardSize)=> css`
  margin: 0 auto;
  padding: 1em;
  border-radius: 12px;
  background: #FDC3A1;

  display: grid;
  grid-template-columns: repeat(${boardSize}, 1fr);
  grid-template-rows: repeat(${boardSize}, 1fr);
  gap: 1em;
`;

const holeStyle = css`
  width: 12em;
  aspect-ratio: 1 / 1;
  border: none;
  border-radius: 50%;
  background: #FB9B8F;
`;
