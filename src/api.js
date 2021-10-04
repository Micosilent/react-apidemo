import { config } from "./config";

//Base API URL
const base_url = "https://api.rawg.io/api/";
//API Key
const apiKey = config.APIKEY;
const currentYear = new Date().getFullYear();

const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  //Adding 0 padding for API request
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};
const currentMonth = getCurrentMonth();

const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

const popular_games = `games?key=${apiKey}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?key=${apiKey}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const new_games = `games?key=${apiKey}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const getPopularGamesURL = () => `${base_url}${popular_games}`;
export const getUpcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const getNewGamesURL = () => `${base_url}${new_games}`;

console.log(getUpcomingGamesURL());
console.log(getNewGamesURL());
