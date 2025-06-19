export default function CalendarWeekdays() {
  return (
    <ul className="hidden sm:grid grid-cols-7 h-10">
      {["일", "월", "화", "수", "목", "금", "토"].map((day) => (
        <li key={day} className="flex items-center justify-center">
          {day}
        </li>
      ))}
    </ul>
  );
}
