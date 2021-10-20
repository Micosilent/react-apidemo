import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesActions";
import { useLocation } from "react-router";
//Components
import Game from "../components/Game";
import GameDetail from "../components/GameDetail";
//Styling and Animation
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";

const Home = () => {
  //The game component links to the game ID in the url, in useLocation we fetch that url, and discard everything that is not the gameid
  const pathID = useLocation().pathname.split("/")[2];
  //Fetch Games
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);
  //Store the data in a variable
  const { popular, newGames, upcoming, searched } = useSelector(
    (state) => state.games
  );

  return (
    <StyledGameList>
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {pathID && <GameDetail pathID={pathID} />}
        </AnimatePresence>
        {searched.length ? (
          <div className="searched">
            <h2>Searched Games</h2>
            <StyledGames>
              {searched.map((game) => (
                <Game
                  name={game.name}
                  released={game.released}
                  id={game.id}
                  image={game.background_image}
                  key={game.id}
                />
              ))}
            </StyledGames>
          </div>
        ) : (
          ""
        )}
        <h2>Upcoming Games</h2>
        <StyledGames>
          {upcoming.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              key={game.id}
            />
          ))}
        </StyledGames>
        <h2>Popular Games</h2>
        <StyledGames>
          {popular.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              key={game.id}
            />
          ))}
        </StyledGames>
        <h2>New Games</h2>
        <StyledGames>
          {newGames.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              key={game.id}
            />
          ))}
        </StyledGames>
      </AnimateSharedLayout>
    </StyledGameList>
  );
};

const StyledGameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;
const StyledGames = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;
export default Home;
