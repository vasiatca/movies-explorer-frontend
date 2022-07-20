import React from "react";
import "./AboutMe.css";
import foto from "../../images/pic.jpg";

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__info-container">
        <div className="about-me__info">
          <h3 className="about-me__info-name">Виталий</h3>
          <p className="about-me__info-text">Фронтенд-разработчик, 30 лет</p>
          <p className="about-me__info-description">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
            и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>

          <ul className="about-me__links">
            <li><a className="about-me__link" href="https://Facebook.com" target="_blank" rel="noreferrer">Facebook</a></li>
            <li><a className="about-me__link" href="https://github.com" target="_blank" rel="noreferrer">Github</a></li>
          </ul>
        </div>

        <img className="about-me__image" src={foto} alt="about-me" />
      </div>
    </section>
  );
};

export default AboutMe;