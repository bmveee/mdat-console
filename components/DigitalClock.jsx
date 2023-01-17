import React, { useEffect, useState } from "react";

const DigitalClock = () => {
  const [clockState, setClockState] = useState();
  const [dateState, setDateState] = useState();
  const [sleepState, setSleepState] = useState();
  useEffect(() => {
    setInterval(
      () => {
        const date = new Date();
        setSleepState(1000 - (date.getMilliseconds()));
        setClockState(date?.toLocaleTimeString());
        setDateState(date?.toLocaleDateString());
      }, sleepState ? sleepState : 1000
    );
  }, [sleepState]);
  return (
    <div>{clockState && dateState ? dateState + " " + clockState : "..."}</div>
  );
};

export default DigitalClock;
