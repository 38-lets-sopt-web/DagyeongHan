import { useState } from 'react';
import {
  clearRankingRecords,
  getRankingRecords,
} from '../utils/rankingStorage';

// 랭킹 기록 관리
export default function useRankingRecords() {
  // 랭킹 기록 상태
  const [rankings, setRankings] = useState(() => getRankingRecords());

  // 랭킹 기록 초기화
  const resetRankings = () => {
    clearRankingRecords();
    setRankings([]);
  };

  // 값 반환
  return {
    rankings,
    resetRankings,
  };
}
