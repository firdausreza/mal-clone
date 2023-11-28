export function getCurrentSeason() {
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();
  let seasonDate = '';

  if (currentMonth >= 0 && currentMonth <= 2) {
    seasonDate = `Winter ${currentYear}`;
  } else if (currentMonth >= 3 && currentMonth <= 5) {
    seasonDate = `Spring ${currentYear}`;
  } else if (currentMonth >= 6 && currentMonth <= 8) {
    seasonDate = `Summer ${currentYear}`;
  } else if (currentMonth >= 9 && currentMonth <= 11) {
    seasonDate = `Fall ${currentYear}`;
  }
  
  return seasonDate;
}