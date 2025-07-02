import {
  endOfMonth,
  format,
  getDaysInMonth,
  parse,
  startOfMonth,
} from "date-fns";

type DateParam = string | Date; // YYYY-MM-DD 형식의 문자열 또는 Date 객체

export interface DayInfo {
  isEmpty: boolean;
  dayOfWeek: number; // 0-6 (0: 일요일)
  dayOfMonth: number | null; // 1-31
  date: string | null; // YYYY-MM-DD
}

const FORMAT_DB_DATE = "yyyy-MM-dd"; // db의 date 타입(YYYY-MM-DD)과 맞춘 포맷

const toDate = (date: DateParam): Date => {
  return typeof date === "string"
    ? parse(date, FORMAT_DB_DATE, new Date())
    : date;
};

/**
 * @returns 오늘이 속한 주의 월~일요일 날짜(YYYY-MM-DD) 배열
 */
export function getWeekDates(baseDate: DateParam = new Date()): string[] {
  const today = toDate(baseDate);
  const day = today.getDay() === 0 ? 7 : today.getDay(); // 일요일(0) → 7
  const monday = new Date(today);
  monday.setDate(today.getDate() - (day - 1));

  return Array.from({ length: 7 }).map((_, i) => {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    return format(d, FORMAT_DB_DATE);
  });
}

export function getCurrentMonthStr(date: DateParam = new Date()): string {
  return format(toDate(date), "yyyy.MM");
}

/**
 * @returns 특정 달의 시작일과 마지막 날짜
 */
export const getMonthRange = (date: DateParam = new Date()) => {
  const targetDate = toDate(date);
  const startDate = format(startOfMonth(targetDate), FORMAT_DB_DATE);
  const endDate = format(endOfMonth(targetDate), FORMAT_DB_DATE);
  return { startDate, endDate };
};

/**
 * @returns 특정 달의 1일부터 마지막 날까지의 날짜 정보 배열
 */
export function getMonthDays(baseDate: DateParam = new Date()): DayInfo[] {
  const date = toDate(baseDate);
  const daysInMonth = getDaysInMonth(date);
  const firstDay = startOfMonth(date);
  const firstDayOfWeek = firstDay.getDay(); // 첫 날의 요일 (0-6)

  // 첫 날 이전의 빈 칸 생성
  const emptyDays: DayInfo[] = Array.from({ length: firstDayOfWeek }).map(
    (_, i) => ({
      isEmpty: true,
      dayOfWeek: i,
      dayOfMonth: null,
      date: null,
    })
  );

  // 실제 날짜들 생성
  const monthDays: DayInfo[] = Array.from({ length: daysInMonth }).map(
    (_, i) => {
      const currentDate = new Date(firstDay);
      currentDate.setDate(i + 1);

      return {
        isEmpty: false,
        dayOfWeek: currentDate.getDay(),
        dayOfMonth: i + 1,
        date: format(currentDate, FORMAT_DB_DATE),
      };
    }
  );

  // 마지막 날 이후의 빈 칸 생성
  const lastDay = new Date(firstDay);
  lastDay.setDate(daysInMonth);
  const lastDayOfWeek = lastDay.getDay();
  const remainingDays = 6 - lastDayOfWeek; // 토요일(6)까지 남은 일수

  const endEmptyDays: DayInfo[] = Array.from({ length: remainingDays }).map(
    (_, i) => ({
      isEmpty: true,
      dayOfWeek: (lastDayOfWeek + i + 1) % 7,
      dayOfMonth: null,
      date: null,
    })
  );

  return [...emptyDays, ...monthDays];
}
