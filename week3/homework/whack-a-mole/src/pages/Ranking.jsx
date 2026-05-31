/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import RankingBoard from '../components/ranking/RankingBoard';
import useRankingRecords from '../hooks/useRankingRecords';

export default function Ranking() {
  
  const { rankings, resetRankings } = useRankingRecords();

  return (
    <main css={rankingPageStyle}>
      <RankingBoard rankings={rankings} onReset={resetRankings} />
    </main>
  );
}

const rankingPageStyle = css`
  min-height: 100%;
`;
