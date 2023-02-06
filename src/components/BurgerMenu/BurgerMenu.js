import React from "react";
import "./BurgerMenu.css";

function BurgerMenu(props) {
  const {isOpenBurger, onCloseBurger} = props;

  return (
    <section className={`burger-menu burger-menu_${isOpenBurger && 'visible'}`}>
      <ul className={`burger-menu__links burger-menu__links_${isOpenBurger && 'visible'}`}>
        <li className="burger-menu__link" onClick={onCloseBurger}><a href="#home" className="burger-menu__ancor">ГЛАВНАЯ</a></li>
        <li className="burger-menu__link" onClick={onCloseBurger}><a href="#place" className="burger-menu__ancor">ГДЕ</a></li>
        <li className="burger-menu__link" onClick={onCloseBurger}><a href="#plan" className="burger-menu__ancor">ПЛАН ДНЯ</a></li>
        <li className="burger-menu__link" onClick={onCloseBurger}><a href="#dresscode" className="burger-menu__ancor">ДРЕСС КОД</a></li>
        <li className="burger-menu__link" onClick={onCloseBurger}><a href="#details" className="burger-menu__ancor">ДЕТАЛИ</a></li>
        <li className="burger-menu__link" onClick={onCloseBurger}><a href="#rsvp" className="burger-menu__ancor">RSVP</a></li>
        <li className="burger-menu__link" onClick={onCloseBurger}><a href="#questions" className="burger-menu__ancor">ОПРОС</a></li>
      </ul>
      <button className="burger-menu__close" onClick={onCloseBurger}>Закрыть</button>
    </section>
  );
}

export default BurgerMenu;