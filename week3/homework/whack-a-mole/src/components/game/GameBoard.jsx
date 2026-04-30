/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import moleImage from '../../assets/mole.png';
import bombImage from '../../assets/bomb.png';

export default function GameBoard({ boardSize = 2, target, onHoleClick }) {
  return (
    <div css={boardStyle(boardSize)}>
      {Array.from({ length: boardSize * boardSize }).map((_, index) => {
        const currentTarget = target?.index === index ? target : null;

        return (
          <button
            key={index}
            type="button"
            css={holeStyle(currentTarget?.type)}
            onClick={() => onHoleClick(index)}
          >
            {currentTarget?.type === 'mole' && (
              <img
                src={moleImage}
                alt="두더지"
                css={[targetImageStyle, currentTarget.status === 'hit' && hitImageStyle]}
              />
            )}
            {currentTarget?.type === 'bomb' && (
              <img src={bombImage} alt="폭탄" css={targetImageStyle} />
            )}
          </button>
        );
      })}
    </div>
  )
}

const boardStyle = (boardSize) => css`
  margin: 0 auto;
  padding: 1em;
  border-radius: 12px;
  background: #FDC3A1;

  display: grid;
  grid-template-columns: repeat(${boardSize}, 1fr);
  grid-template-rows: repeat(${boardSize}, 1fr);
  gap: 1em;
`;

const holeStyle = (type) => css`
  width: 12em;
  aspect-ratio: 1 / 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 50%;
  background: ${type === 'mole' ? '#54C63A' : type === 'bomb' ? '#F57799' : '#FB9B8F'};
  cursor: pointer;
  overflow: hidden;
`;

const targetImageStyle = css`
  width: 75%;
  height: 75%;
  object-fit: contain;
  pointer-events: none;
`;

const hitImageStyle = css`
  filter: grayscale(0.8) brightness(0.85);
  transform: rotate(-12deg) scale(0.9);
`;
