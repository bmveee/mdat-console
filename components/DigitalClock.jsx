import React, { useEffect, useState } from "react";

const DigitalClock = () => {
  const [clockState, setClockState] = useState();
  const [dateState, setDateState] = useState();
  const [sleepState, setSleepState] = useState();

  useEffect(() => {
    const id = setInterval(
      () => {
        //let _interval = window.localStorage.getItem('sleepState');
        //console.log('debug setInterval(): reading local: ',_interval);
        const date = new Date();
        setSleepState(1000 - (date.getMilliseconds()));
        setClockState(date?.toLocaleTimeString());
        setDateState(date?.toLocaleDateString());
      }, sleepState ? sleepState : 1000
    );
    return () =>  clearInterval(id);
  }, [sleepState]);

  useEffect(() => {
    window.localStorage.setItem('sleepState',sleepState);
  }, [sleepState])
  return (
    <div>{clockState && dateState ? dateState + " " + clockState : "..."}</div>
  );
};

export default DigitalClock;
