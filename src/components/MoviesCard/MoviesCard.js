import "./MoviesCard.css";
import React from "react";
import { useLocation } from "react-router-dom";

const MoviesCard = ({ card }) => {
  const [selected, setSelected] = React.useState(false);

  function handleSelectedToogle() {
    setSelected(!selected);
  }

  const { pathname } = useLocation();

  return (
    <li className="card">
      <div className="card__poster">
        <img src={card.image} alt={card.title} className="card__image"></img>

        {pathname === '/saved-movies' ? (
          <button type="button" className="card__btn card__btn_delete" />
        ) : (
          <button
            className={`card__btn card__btn${selected ? "_saved" : ""}`}
            onClick={handleSelectedToogle}
          >
            {pathname === "/movies" && !selected ? "Сохранить" : ""}
          </button>
        )}
      </div>
      <div className="card__info">
        <p className="card__title">{card.nameRU}</p>
        <p className="card__duration">{card.duration}</p>
      </div>
    </li>
  );
};

export default MoviesCard;
