export const DIARY_STATUS = {
  SUNNY: "☀️",
  CLOUDY: "⛅️",
  RAINY: "🌧️",
  VACATION: "🏖️",
  PILL: "💊",
} as const;

export type DiaryStatusKey = keyof typeof DIARY_STATUS;
