import React from "react";
import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="about-project">
      <h2 className="about-project__title">О проекте</h2>
      <div className="about-project__info-container">
        <div className="about-project__info">
          <h3 className="about-project__info-heading">Дипломный проект включал 5 этапов</h3>
          <p className="about-project__info-description">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className="about-project__info">
          <h3 className="about-project__info-heading">На выполнение диплома ушло 5 недель</h3>
          <p className="about-project__info-description">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className="about-project__timeline-container">
        <div className="about-project__timeline-backend">
          <p className="about-project__timeline-heading about-project__timeline-heading_type_green">1 неделя</p>
          <p className="about-project__timeline-description">Back-end</p>
        </div>
        <div className="about-project__timeline-frontend">
          <p className="about-project__timeline-heading">4 недели</p>
          <p className="about-project__timeline-description">Front-end</p>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;