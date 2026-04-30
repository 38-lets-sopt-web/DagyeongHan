/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import RankingBoard from '../components/ranking/RankingBoard';

export default function Ranking() {
  return (
    <main css={rankingPageStyle}>
      <RankingBoard />
    </main>
  );
}

const rankingPageStyle = css`
  min-height: 100%;
`;
