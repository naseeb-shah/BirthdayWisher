import React, { useState, useEffect } from 'react';
import Countdown from './Countdown';
import githubLogo from './githubLogo.svg';
import { Link } from 'react-router-dom';

const Birthday = ({ name, day, month }) => {
  // useState Hooks
  const [state, setState] = useState({
    seconds: 0,
    hours: 0,
    minutes: 0,
    days: 0,
    isItBday: false,
  });

  if (name === undefined || day === undefined || month === undefined) {
   
    name = 'Naseeb Shah'; // Name of the Person
    month = 8; // Month of the Birthday
    day = 9; // Day of the Birthday
  }



  useEffect(() => {
    document.title=`Happy Birthday ${name}`
  },[])
  // get current time
  const currentTime = new Date();
  // get current year
  const currentYear = currentTime.getFullYear();

 
  const isItBday =
    currentTime.getDate() === day && currentTime.getMonth() === month - 1;

  useEffect(() => {
    setInterval(() => {
      const countdown = () => {
    
        const dateAtm = new Date();

        // if the Birthday has passed
        // then set the Birthday countdown for next year
        let birthdayDay = new Date(currentYear, month - 1, day);
        if (dateAtm > birthdayDay) {
          birthdayDay = new Date(currentYear + 1, month - 1, day);
        } else if (dateAtm.getFullYear() === birthdayDay.getFullYear() + 1) {
          birthdayDay = new Date(currentYear, month - 1, day);
        }

        // Getitng Current Time
        const currentTime = dateAtm.getTime();
        // Getting Birthdays Time
        const birthdayTime = birthdayDay.getTime();

        // Time remaining for the Birthday
        const timeRemaining = birthdayTime - currentTime;

        let seconds = Math.floor(timeRemaining / 1000);
        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(minutes / 60);
        let days = Math.floor(hours / 24);

        seconds %= 60;
        minutes %= 60;
        hours %= 24;

        // Setting States
        setState((prevState) => ({
          ...prevState,
          seconds,
          minutes,
          hours,
          days,
          isItBday,
        }));
        // console.log(`${days}:${hours}:${minutes}:${seconds} , ${isItBday}`);
      };
      if (!isItBday) {
        countdown();
      } else {
        setState((prevState) => ({
          ...prevState,
          isItBday: true,
        }));
      }
    }, 1000);
  }, [currentYear, day, isItBday, month]);

  let birth = new Date(currentYear, month - 1, day);
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  let monthBday = monthNames[birth.getMonth()];

  return (
    <div className='page'>
      <Countdown countdownData={state} name={name} />
      {!isItBday && (
        <>
          <div className='birthdate'>
            Birth-Date: {day} {monthBday} 
          </div>
          <div className='credits'>
            <a href='https://www.linkedin.com/in/naseeb-khan-deenshah/'>
              <img src='data:image/png;base64,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'
               alt='Github-Logo' className='github-logo' />
            </a>
          </div>
          <Link to='/generate' style={{color:'whitesmoke'}}>Generate Link for Birthday Wish and Countdown</Link>
          
      
        </>
      )}
    </div>
  );
};

export default Birthday;
