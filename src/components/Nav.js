import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../img/logo.svg";
import { fetchSearch } from "../actions/gamesActions";
import { useDispatch } from "react-redux";
import { fadeIn } from "../animation";

const Nav = () => {
  const dispatch = useDispatch();
  const [textIput, setTextInput] = useState("");

  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };
  const clickHandler = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textIput));
    setTextInput("");
  };
  const clearSearched = () => {
    dispatch({ type: "CLEAR_SEARCHED" });
  };

  return (
    <StyledNav variants={fadeIn} initial="hidden" animate="show">
      <StyledLogo>
        <img onClick={clearSearched} src={logo} alt="Logo"></img>
        <h1>Ignite</h1>
      </StyledLogo>
      <form className="search">
        <input onChange={inputHandler} value={textIput} type="text" />
        <button type="submit" onClick={clickHandler}>
          Search
        </button>
      </form>
    </StyledNav>
  );
};

const StyledNav = styled(motion.div)`
  padding: 3rem 5rem;
  text-align: center;
  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    outline: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
  }
  button {
    font-weight: bold;
    font-family: "Montserrat", sans-serif;
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background-color: #ff7676;
    color: white;
  }
`;
const StyledLogo = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
  img {
    height: 2rem;
    width: 2rem;
  }
`;
export default Nav;
