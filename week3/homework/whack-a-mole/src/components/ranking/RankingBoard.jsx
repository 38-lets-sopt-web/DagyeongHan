/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import RankingTable from './RankingTable';

export default function RankingBoard({ rankings, onReset }) {
  return (
    <section css={boardStyle}>
      <div css={headerStyle}>
        <h3 css={titleStyle}>랭킹 보드</h3>
        <button type="button" css={resetButtonStyle} onClick={onReset}>
          기록 초기화
        </button>
      </div>

      <RankingTable rankings={rankings} />
    </section>
  );
}

const boardStyle = css`
  min-height: 32em;
  padding: 1em;
  border-radius: 12px;
  background: #FFF7CD;
`;

const headerStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1em;
`;

const titleStyle = css`
  margin: 0;
`;

const resetButtonStyle = css`
  padding: 0.5em 1em;
  border: none;
  border-radius: 100px;
  background: #F57799;
  color: #fff;
  font-weight: 700;
  cursor: pointer;
`;
