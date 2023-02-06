import React from "react";
import { useMediaQuery } from 'usehooks-ts';
import "./Header.css";
import newlyweds from "../../images/newlyweds.JPG"

function Header() {
  const resize = useMediaQuery('(min-width: 700px)');
  return (
    <section className="header" id="home">
      {
        resize ? (
          <div className="header__desctop">
            <h1 className="header__title">Приглашение на свадьбу</h1>
            <img src={newlyweds} className="header__image" alt="молодожены"></img>
            <div className="header__info">
              <p className="header__info_names">Алексей и</p>
              <p className="header__info_names">&nbsp;&nbsp;&nbsp;&nbsp;Виктория</p>
              <p className="header__info_date">23.06.2023</p>
            </div>
          </div>
        ) : (
          <div className="header__mobile">
            <div className="header__info-mobile">
              <p className="header__info_names-mobile">Алексей и</p>
              <p className="header__info_names-mobile">&nbsp;&nbsp;&nbsp;&nbsp;Виктория</p>
            </div>
            <div className="header__block">
              <h1 className="header__title">Приглашение на свадьбу</h1>
              <img src={newlyweds} className="header__image-mobile" alt="молодожены"></img>
            </div>
            <p className="header__info_date-mobile">23.06.2023</p>
          </div>
        )
      }
    </section>
  );
}

export default Header;