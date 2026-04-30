export const getRankingRecords = () => {
  const savedRankings = localStorage.getItem('whack-a-mole-rankings');
  const rankings = savedRankings ? JSON.parse(savedRankings) : [];

  rankings.sort((a, b) => b.score - a.score);

  return rankings.map((ranking, index) => ({
    ...ranking,
    rank: index + 1,
  }));
};

export const saveRankingRecord = ({ level, score }) => {
  const rankings = getRankingRecords();
  const newRanking = {
    id: Date.now(),
    level,
    score,
    recordedAt: new Date().toLocaleString('ko-KR'),
  };

  rankings.push(newRanking);
  rankings.sort((a, b) => b.score - a.score);

  localStorage.setItem('whack-a-mole-rankings', JSON.stringify(rankings));
};

export const clearRankingRecords = () => {
  localStorage.removeItem('whack-a-mole-rankings');
};
