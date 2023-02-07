import React, {useState, useRef} from "react";
import Title from "../Title/Title";
import "./Rsvp.css";

function Rsvp() {
  const formRef = useRef(null)
  const scriptUrl = "https://script.google.com/macros/s/AKfycbwJxP4aDFSrU_RjHAlVO_ea08w8XqHFhTSF3eg90ANlk9eRo2gupGzYnmt5TKrBaN3H8Q/exec"
  const [loading, setLoading] = useState(false);
  const [isFormVisible, setisFormVisible] = useState(true);

  const handleSubmit = (e) =>{
    console.log(formRef.current)
      e.preventDefault()
      setLoading(true)

      fetch(scriptUrl, {
      method: 'POST',
      body: new FormData(formRef.current),

  }).then(res => {
          setLoading(false);
          setisFormVisible(false);
      })
      .catch(err => console.log(err))
  }

  function returnForm () {
    setisFormVisible(true);
  }

  return (
    <section className="rsvp" id="rsvp">
      <Title title={"RSVP"}/>
      { isFormVisible ?
      <div className="rsvp__container">
        <p className="rsvp__text">Пожалуйста, подтвердите ваше присутствие на нашем празднике до
        01 июня 2023 года любым удобным для вас способом или заполните форму ниже:
        </p>
        <form className="rsvp__form" ref={formRef} onSubmit={handleSubmit}>
          <p className="rsvp__string">
            <label htmlFor="name" className="rsvp__label">Фамилия и имя</label>
            <input type="text" name="ФИО" id="name" required className="rsvp__input"></input>
          </p>
          <p className="rsvp__string">
            <label htmlFor="person" className="rsvp__label">количество персон</label>
            <input type="number" min="0" max="10" name="Количество" id="person" required className="rsvp__input"></input>
          </p>
          <div className="rsvp__buttons">
          <button className="rsvp__button" name="Принято">{loading ? "Отправка..." : "Подтвердить"}</button>
          <button className="rsvp__button" name="Отклонено">{loading ? "Отправка..." : "Отклонить"}</button>
          </div>
        </form>
      </div> :
      <div>
        <p className="question__answer">Форма отправлена!</p>
        <button className="question__return" onClick={returnForm}>Планы поменялись? Отправить заново</button>
      </div>
      }
    </section>
  );
}

export default Rsvp;