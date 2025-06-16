import { format } from "date-fns";

/**
 * @returns 오늘이 속한 주의 월~일요일 날짜(ISO 8601, YYYY-MM-DD 형식) 배열 반환
 */
export function getWeekDates(baseDate?: Date): string[] {
  const today = baseDate ? new Date(baseDate) : new Date();
  const day = today.getDay() === 0 ? 7 : today.getDay(); // 일요일(0) → 7
  const monday = new Date(today);
  monday.setDate(today.getDate() - (day - 1));

  return Array.from({ length: 7 }).map((_, i) => {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    return d.toISOString().slice(0, 10); // 'YYYY-MM-DD'
  });
}

export function getCurrentMonthStr(date: Date = new Date()): string {
  return format(date, "yyyy.MM");
}
