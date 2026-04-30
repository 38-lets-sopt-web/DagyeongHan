import { useState } from 'react';
import {
  clearRankingRecords,
  getRankingRecords,
} from '../utils/rankingStorage';

export default function useRankingRecords() {
  const [rankings, setRankings] = useState(() => getRankingRecords());

  const resetRankings = () => {
    clearRankingRecords();
    setRankings([]);
  };

  return {
    rankings,
    resetRankings,
  };
}
