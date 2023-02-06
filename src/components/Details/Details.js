import React from "react";
import Title from "../Title/Title";
import "./Details.css";

function Details() {
  return (
    <section className="details" id="details">
      <Title title={"Детали"}/>
      <p className="details__text">Обратите внимание, что формат мероприятия не предполагают детской площадки и аниматоров. Пожалуйста, позаботьтесь
о том, чтобы провести этот вечер без детей.</p>
      <div className="details__line"></div>
      <p className="details__text">Мы будем рады, если вместо цветов вы подарите нам вашу любимую книгу для нашей семейной библиотеки</p>
      <div className="details__line"></div>
      <p className="details__text">От всего сердца просим вас воздержаться от криков "Горько!"
и сохранить атмосферу уютного семейного праздника.</p>
    </section>
  );
}

export default Details;