//Base Url
const key = '5bbd456833194a158ac928de7db40cb3';
const base_url = 'https://api.rawg.io/api/';

//Getting the Month
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};
//Getting the Date
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

//Curent dat/month/year

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//Popular Games
const popular_games = `games?key=${key}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`; //?
const upcoming_games = `games?key=${key}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames = `games?key=${key}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesUrl = () => `${base_url}${popular_games}`;
export const upcomingGamesUrl = () => `${base_url}${upcoming_games}`;
export const newGamesUrl = () => `${base_url}${newGames}`;

//Game Detail
export const gameDetailsUrl = (game_id) =>
  `${base_url}games?key=${key}&dates/${game_id}`;
console.log(gameDetailsUrl(58751));
//Game Screenshot
export const gameScreenshotUrl = (game_id) =>
  `${base_url}games?key=${key}&dates/${game_id}/screenshots`;
console.log(gameScreenshotUrl(58751));
//Searched Game
export const searchGameUrl = (game_name) =>
  `${base_url}games?key=${key}&search=${game_name}&page_size=9`;
console.log(searchGameUrl('nba'));
