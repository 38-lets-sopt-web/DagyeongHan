export const DEFAULT_LEVEL = '1';
export const SPAWN_INTERVAL_MS = 1000;
export const TARGET_VISIBLE_MS = 800;
export const HIT_VISIBLE_MS = 700;

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

export const LEVEL_OPTIONS = Object.entries(LEVEL_SETTINGS).map(([value, setting]) => ({
  value,
  label: setting.label,
}));

export const getLevelSetting = (level) =>
  LEVEL_SETTINGS[level] ?? LEVEL_SETTINGS[DEFAULT_LEVEL];

export const TARGET_TYPE = {
  MOLE: 'mole',
  BOMB: 'bomb',
};

export const TARGET_STATUS = {
  ACTIVE: 'active',
  HIT: 'hit',
};

export const createTarget = (boardSize) => ({
  index: Math.floor(Math.random() * boardSize * boardSize),
  type: Math.random() < 0.75 ? TARGET_TYPE.MOLE : TARGET_TYPE.BOMB,
  status: TARGET_STATUS.ACTIVE,
});
