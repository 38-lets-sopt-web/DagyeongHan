export const DEFAULT_LEVEL = '1'; // 레벨 초기값
export const SPAWN_INTERVAL_MS = 1000; // 두더지 나타나는 간격
export const TARGET_VISIBLE_MS = 800; // 두더지 보이는 시간
export const HIT_VISIBLE_MS = 700; // 공격 성공 시 유지 시간

// 게임 레벨 목데이터
export const LEVEL_SETTINGS = {
  1: {
    label: 'Level 1',
    boardSize: 2,
    duration: 15,
  },
  2: {
    label: 'Level 2',
    boardSize: 3,
    duration: 20,
  },
  3: {
    label: 'Level 3',
    boardSize: 4,
    duration: 30,
  },
};

// 레벨 데이터 배열로 세팅
export const LEVEL_OPTIONS = Object.entries(LEVEL_SETTINGS).map(([value, setting]) => ({
  value,
  label: setting.label,
}));

// 레벨 드롭다운 기본 세팅 및 선택한 레벨 유지
export const getLevelSetting = (level) =>  LEVEL_SETTINGS[level] ?? LEVEL_SETTINGS[DEFAULT_LEVEL];

// 두더지, 폭탄 구분
export const TARGET_TYPE = {
  MOLE: 'mole',
  BOMB: 'bomb',
};

// 공격 상태 값 정의
export const TARGET_STATUS = {
  ACTIVE: 'active',
  HIT: 'hit',
};

// 두더지 랜덤 위치 생성 로직
export const createTarget = (boardSize) => ({
  index: Math.floor(Math.random() * boardSize * boardSize), // 보드 크기 맞춤
  type: Math.random() < 0.75 ? TARGET_TYPE.MOLE : TARGET_TYPE.BOMB, // 75%는 두더지, 25%는 폭탄
  status: TARGET_STATUS.ACTIVE, // 공격 상태
});
