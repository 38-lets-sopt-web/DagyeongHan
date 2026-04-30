/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const DEFAULT_RANKINGS = [
  {
    id: 1,
    rank: 1,
    level: 'Level 2',
    score: 20,
    recordedAt: '2026. 4. 25. 오전 11:44:15',
  },
];

export default function RankingBoard({ rankings = DEFAULT_RANKINGS, onReset }) {
  return (
    <section css={boardStyle}>
      <div css={headerStyle}>
        <h3 css={titleStyle}>랭킹 보드</h3>
        <button type="button" css={resetButtonStyle} onClick={onReset}>
          기록 초기화
        </button>
      </div>

      <table css={tableStyle}>
        <thead>
          <tr css={headRowStyle}>
            <th scope="col">순위</th>
            <th scope="col">레벨</th>
            <th scope="col">점수</th>
            <th scope="col">기록 시각</th>
          </tr>
        </thead>
        <tbody>
          {rankings.map((ranking) => (
            <tr key={ranking.id} css={bodyRowStyle}>
              <td>{ranking.rank}</td>
              <td>{ranking.level}</td>
              <td>{ranking.score}점</td>
              <td>{ranking.recordedAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
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

const tableStyle = css`
  width: 100%;
  border-collapse: collapse;
  text-align: center;
`;

const headRowStyle = css`
  background: #FDC3A1;

  th {
    font-size: 0.9em;
    font-weight: 700;
    padding: 0.5em 1em;
  }
`;

const bodyRowStyle = css`
  border-bottom: 1px solid rgba(251, 155, 143, 0.28);

  td {
    font-size: 0.8em;
    font-weight: 500;
    padding: 0.5em 1em;
  }
`;
