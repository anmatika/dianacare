export function isDatesSame(dateString: string, date2: Date): boolean {
  const date1 = new Date(JSON.parse(dateString))
  return date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate();
}

export function isWeekend(date: Date): boolean {
  const dayOfWeek = date.getDay();
  return (dayOfWeek === 6) || (dayOfWeek === 0);
}

export function addDays(date: Date, days: number) {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

export function isYesterday(date: Date): boolean {
  return date.setHours(0, 0, 0, 0) < new Date().setHours(0, 0, 0, 0)
}