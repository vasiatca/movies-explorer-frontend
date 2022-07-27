import "./MoviesCardList.css";
import React, { useState } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";

const MoviesCardList = ({ cards, buttonMore }) => {
  const [isLoading, setLoading] = useState(false);

  const handlePreloader = () => {
    setLoading(true);
  };

  return (
    <section className="movies-list">
      <ul className="movies-list__container">
        {cards.map((card) => (
          <MoviesCard key={card._id} card={card} />
        ))}
      </ul>

      {isLoading ? (
        <Preloader />
      ) : (
        buttonMore && (
          <button className="movies-list__btn" type="button" name="more" onClick={handlePreloader}>Ещё</button>
        )
      )}
    </section>
  );
};

export default MoviesCardList;

