import React, { useState, useRef, useEffect } from 'react';

import styled from 'styled-components';


const CountDown = ({ date }) => {
  const [ timerDays, setTimerDays ] = useState('00')
  const [ timerHours, setTimerHours ] = useState('00')
  const [ timerMinutes, setTimerMinutes ] = useState('00')
  const [ timerSeconds, setTimerSeconds ] = useState('00')
  const [ stop, setStop ] = useState(false)

  let interval = useRef()

  const getServerTime = () => {
    let xmlHttpRequest = new XMLHttpRequest()
    
    xmlHttpRequest.open('HEAD', window.location.href.toString(), false);
    xmlHttpRequest.setRequestHeader("ContentType", "text/html");
    xmlHttpRequest.send("")

    let tempDate = xmlHttpRequest.getResponseHeader("Date")
    let serverDate = new Date(tempDate);

    return serverDate
  }

  const StartTimer = () => {
    const countdownDate = new Date(date).getTime()

    interval = setInterval(() => {
      const now = getServerTime().getTime()
      const distance = countdownDate - now

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
      const minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60))
      const seconds = Math.floor(distance % (1000 * 60) / 1000)

      if (distance < 0) {
        clearInterval(interval)
        setStop(true)
      } else {
        setTimerDays(days)
        setTimerHours(hours)
        setTimerMinutes(minutes)
        setTimerSeconds(seconds)
      }

    }, 1000);
  }

  useEffect(() => {
    if (!stop) {
      StartTimer()
    }
    return setStop(true)
  }, [])

  return (
    <CountDownContainer>
      <div className="dayContainer">
        <h3 className="number">{timerDays}</h3>
        <h3>일</h3>
      </div>
      <div className="dayContainer">
        <h3 className="number">{timerHours}</h3>
        <h3>시</h3>
      </div>
      <div className="dayContainer">
        <h3 className="number">{timerMinutes}</h3>
        <h3>분</h3>
      </div>
      <div className="dayContainer">
        <h3 className="number">{timerSeconds}</h3>
        <h3>초</h3>
      </div>
    </CountDownContainer>
  );
}

const CountDownContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 1rem 1rem 1rem 0;
  border: 1px solid rgba(0,0,0,0.5);
  border-radius: 10px;

  .dayContainer {
    display: flex;
    flex-direction: column;
    padding-left: 1rem;

    .number {
      font-size: 2.6rem;
    }

  }
  
`;

export default CountDown;