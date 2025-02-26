import React, { useState } from "react";
import MovieDisplayContainer from "./MovieDisplayContainer";

// TODO: Block rendering if session isn't active

const Home = (props) => {
  // we need states to keep track of which tab we're on - Favorites, Recommendations, or Random
  const [currentTab, setCurrentTab] = useState("Explore");

  // State to host
  const [currentMovies, refreshMovies] = useState({
    explore: [],
    favorites: [],
    recommendations: [],
    random: [],
  });

  return (
    <div id='Home'>
      <MovieDisplayContainer />
    </div>
  );
};

export default Home;
