import React from 'react';
import Countdown from 'react-countdown';
import Menu from "../Menu/Menu";
import Header from "../Header/Header";
import InfoDate from "../InfoDate/InfoDate";
import Timetable from "../Timetable/Timetable";
import Dresscode from "../DressCode/Dresscode";
import Details from "../Details/Details";
import Timer from "../Timer/Timer";
import Rsvp from "../RSVP/Rsvp";
import Questions from "../Questions/Questions"
import Footer from "../Footer/Footer";
import './App.css';
import BurgerMenu from '../BurgerMenu/BurgerMenu';


function App() {
  const [isButtonVisible, setIsButtonVisible] = React.useState(true);
  const [isOpenBurger, setIsOpenBurger] = React.useState(false);
  const [isCloseBurger, setIsCloseBurger] = React.useState(true);

  function handleOpenBurger () {
    setIsOpenBurger(true);
    setIsButtonVisible(false);
    setIsCloseBurger(false);
  }

  function handleCloseBurger () {
    setIsOpenBurger(false);
    setIsButtonVisible(true);
    setIsCloseBurger(true);
  }

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span>You are good to go!</span>;
    } else {
      return <Timer
      days={days}
      hours={hours}
      minutes={minutes}
      seconds={seconds}/>;
    }
  };

  return (
    <div className="App">
      <Menu
        isButtonVisible={isButtonVisible}
        onOpenBurger={handleOpenBurger} />
      <Header />
      <InfoDate />
      <Timetable />
      <Dresscode />
      <Details />
      <Countdown
        date={"2023-06-23T15:30:00+00:00"}
        renderer={renderer}/>
      {/* <Counter
      date={new Date('14 Jun 2023 16:24')} /> */}
      <Rsvp />
      <Questions />
      <Footer />
      <BurgerMenu
        isOpenBurger={isOpenBurger}
        onCloseBurger={handleCloseBurger} />
    </div>
  );
}

export default App;
