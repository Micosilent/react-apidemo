import axios from "axios";
import {
  getPopularGamesURL,
  getUpcomingGamesURL,
  getNewGamesURL,
} from "../api";

export const loadGames = () => async (dispatch) => {
  try {
    const popularGamesDataPromise = await axios.get(getPopularGamesURL());
    const upcomingGamesDataPromise = await axios.get(getUpcomingGamesURL());
    const newGamesDataPromise = await axios.get(getNewGamesURL());

    Promise.all([
      popularGamesDataPromise,
      upcomingGamesDataPromise,
      newGamesDataPromise,
    ]).then((data) => {
      dispatch({
        type: "FETCH_GAMES",
        payload: {
          popular: data[0].data.results,
          upcoming: data[1].data.results,
          newGames: data[2].data.results,
        },
      });
    });
  } catch (error) {
    console.log(error);
  }
};
