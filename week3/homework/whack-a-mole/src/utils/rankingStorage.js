// 랭킹 기록 불러오기
export const getRankingRecords = () => {
  const savedRankings = localStorage.getItem('whack-a-mole-rankings');
  const rankings = savedRankings ? JSON.parse(savedRankings) : [];

  // 점수 내림차순 정렬
  rankings.sort((a, b) => b.score - a.score);

  // 정렬 순서대로 순위 추가해서 렌더링
  return rankings.map((ranking, index) => ({
    ...ranking,
    rank: index + 1,
  }));
};

//  새 랭킹 기록 저장하기
export const saveRankingRecord = ({ level, score }) => {
  // 기존 랭킹 기록 가져오기
  const rankings = getRankingRecords();

  // 새 랭킹 기록 생성
  const newRanking = {
    id: Date.now(),
    level,
    score,
    recordedAt: new Date().toLocaleString('ko-KR'),
  };

  // 새 기록 추가
  rankings.push(newRanking);

  // 점수 내림차순 정렬
  rankings.sort((a, b) => b.score - a.score);

  // 변경된 기록 localStorage에 저장
  localStorage.setItem('whack-a-mole-rankings', JSON.stringify(rankings));
};

// 랭킹 기록 초기화
export const clearRankingRecords = () => {
  localStorage.removeItem('whack-a-mole-rankings');
};
