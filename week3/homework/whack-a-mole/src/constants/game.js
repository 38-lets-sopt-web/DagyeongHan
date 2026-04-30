export const BOARD_SIZE = 2;
export const GAME_DURATION_SECONDS = 15;
export const SPAWN_INTERVAL_MS = 1000;
export const TARGET_VISIBLE_MS = 800;
export const HIT_VISIBLE_MS = 700;

export const TARGET_TYPE = {
  MOLE: 'mole',
  BOMB: 'bomb',
};

export const TARGET_STATUS = {
  ACTIVE: 'active',
  HIT: 'hit',
};

export const createTarget = () => ({
  index: Math.floor(Math.random() * BOARD_SIZE * BOARD_SIZE),
  type: Math.random() < 0.75 ? TARGET_TYPE.MOLE : TARGET_TYPE.BOMB,
  status: TARGET_STATUS.ACTIVE,
});
