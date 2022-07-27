
import "./SearchForm.css";

function SearchForm() {
  return (
    <section className="search">
      <div className="search__container">
        <form className="search__form">
          <label htmlFor="movie" className="search__label">
            <input
              id="movie"
              name="movie"
              className="search__input"
              placeholder="Фильм"
              required
            />
          </label>
          <button className="search__btn" type="submit">Поиск</button>
        </form>
        <div className="search__toggle">
          <label className="search__tumbler">
            <input
              type="checkbox"
              name="short"
              className="search__checkbox"
              defaultChecked
            />
            <span className="search__slider"></span>
          </label>
          <p className="search__films">Короткометражки</p>
        </div>
      </div>
    </section>
  );
};

export default SearchForm;