import React from "react";
import { useMediaQuery } from 'usehooks-ts';
import "./Menu.css";

function Menu(props) {
  const {onOpenBurger, isButtonVisible} = props;
  const resize = useMediaQuery('(min-width: 700px)');
  return (
    <nav className="menu">
      {
        resize ? (
          <ul className="menu__links">
            <li className="menu__link"><a href="#home" className="menu__ancor">ГЛАВНАЯ</a></li>
            <li className="menu__link"><a href="#place" className="menu__ancor">ГДЕ</a></li>
            <li className="menu__link"><a href="#plan" className="menu__ancor">ПЛАН ДНЯ</a></li>
            <li className="menu__link"><a href="#dresscode" className="menu__ancor">ДРЕСС КОД</a></li>
            <li className="menu__link"><a href="#details" className="menu__ancor">ДЕТАЛИ</a></li>
            <li className="menu__link"><a href="#rsvp" className="menu__ancor">RSVP</a></li>
            <li className="menu__link"><a href="#questions" className="menu__ancor">ОПРОС</a></li>
          </ul>
        ) : (
          <button className={`menu__burger-btn menu__burger-btn_${isButtonVisible && 'visible'}`} onClick={onOpenBurger}></button>
        )
      }
    </nav>
  );
}

export default Menu;