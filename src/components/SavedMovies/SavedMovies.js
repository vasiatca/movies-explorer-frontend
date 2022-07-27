import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import cards from "../../utils/cardsData";

const SavedCards = cards.filter((x, idx) => idx % 2 !== 0);

const SavedMovies = () => {
  return (
    <div className="movies">
      <SearchForm />
      <MoviesCardList
        cards={SavedCards}
        buttonMore={false} />
    </div>
  );
};

export default SavedMovies;