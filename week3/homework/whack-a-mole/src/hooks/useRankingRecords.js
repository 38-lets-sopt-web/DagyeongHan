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
    const confirmed = window.confirm('랭킹을 초기화하시겠습니까?'); // 초기화 여부 묻기

    if (!confirmed) return; // 취소 클릭 시 초기화 안함

    clearRankingRecords();
    setRankings([]);
  };

  // 값 반환
  return {
    rankings,
    resetRankings,
  };
}
