import { TARGET_STATUS, TARGET_TYPE } from "../constants/game";

// 두더지 랜덤 위치 생성 로직
export const createTarget = (boardSize) => ({
  index: Math.floor(Math.random() * boardSize * boardSize), // 보드 크기 맞춤
  type: Math.random() < 0.75 ? TARGET_TYPE.MOLE : TARGET_TYPE.BOMB, // 75%는 두더지, 25%는 폭탄
  status: TARGET_STATUS.ACTIVE, // 공격 상태
});