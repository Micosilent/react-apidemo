import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadGames } from "../actions/gamesActions";

const Home = () => {
  //Fetch Games
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  });

  return (
    <div className="HomePage">
      <h1>Hello Ignite</h1>
    </div>
  );
};

export default Home;
