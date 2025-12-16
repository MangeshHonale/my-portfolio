export function calculateYearsOfExperience() {
  // startMonth: 0-based (Jan = 0). June = 5
  const startYear = 2014;
  const startMonth = 5;
  const startDate = new Date(startYear, startMonth, 1);
  const today = new Date();

  let years = today.getFullYear() - startDate.getFullYear();

  // If current date is before the anniversary month/day, subtract 1
  const hasCompletedThisYear =
    today.getMonth() > startMonth ||
    (today.getMonth() === startMonth && today.getDate() >= 1);

  if (!hasCompletedThisYear) {
    years -= 1;
  }

  return `${years}+`;
}
