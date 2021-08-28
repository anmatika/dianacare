export function isDatesSame(dateString: string, date2: Date) {
  const date1 = new Date(JSON.parse(dateString))
  return date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate();
}

export function isWeekend(date: Date) {
  const dayOfWeek = date.getDay();
  return (dayOfWeek === 6) || (dayOfWeek === 0);
}