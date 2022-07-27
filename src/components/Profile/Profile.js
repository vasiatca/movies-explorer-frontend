import { Link } from "react-router-dom";
import "./Profile.css";

function Profile() {
  return (
    <section className="profile">
      <form className="profile__form">
        <h1 className="profile__title">Привет, Виталий!</h1>
        <div className="profile__inputs">
          <label htmlFor="name" className="profile__input profile__input_type_name">
            Имя
            <input
              id="name"
              name="name"
              minLength="2"
              className="profile__settings"
              defaultValue="Пользователь"
              placeholder="Введите имя"
              required
            ></input>
          </label>
          <label htmlFor="email" className="profile__input profile__input_type_email">
            E-mail
            <input
              id="email"
              name="email"
              minLength="2"
              className="profile__settings"
              defaultValue="example@example.ru"
              placeholder="Введите email"
              required
            ></input>
          </label>
        </div>
        <Link to="/profile" className="profile__form-btn">Редактировать</Link>
        <Link to="/" className="profile__form-btn profile__form-btn_color_red">Выйти из аккаунта</Link>
      </form>
    </section>
  );
};

export default Profile;