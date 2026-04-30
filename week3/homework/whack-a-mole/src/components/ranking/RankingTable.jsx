/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { RANKING_COLUMNS } from '../../constants/ranking';

const formatRankingValue = (ranking, key) => {
  if (key === 'score') {
    return `${ranking.score}점`;
  }

  return ranking[key];
};

export default function RankingTable({ rankings }) {
  return (
    <table css={tableStyle}>
      <thead>
        <tr css={headRowStyle}>
          {RANKING_COLUMNS.map((column) => (
            <th key={column.key} scope="col">
              {column.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rankings.map((ranking) => (
          <tr key={ranking.id} css={bodyRowStyle}>
            {RANKING_COLUMNS.map((column) => (
              <td key={column.key}>{formatRankingValue(ranking, column.key)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}



const tableStyle = css`
  width: 100%;
  border-collapse: collapse;
  text-align: center;
`;

const headRowStyle = css`
  background: #FDC3A1;

  th {
    padding: 0.5em 1em;
    font-size: 0.9em;
    font-weight: 700;
  }
`;

const bodyRowStyle = css`
  border-bottom: 1px solid rgba(251, 155, 143, 0.28);

  td {
    padding: 0.5em 1em;
    font-size: 0.8em;
    font-weight: 500;
  }
`;
