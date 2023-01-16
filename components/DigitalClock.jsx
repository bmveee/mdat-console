import React, { useEffect, useState } from "react";

const DigitalClock = () => {
  const [clockState, setClockState] = useState();
  const [dateState, setDateState] = useState();
  useEffect(() => {
    setInterval(() => {
        const date = new Date();
        setClockState(date.toLocaleTimeString());
        setDateState(date.toLocaleDateString());
    }, 1000)
  }, [])
  return (
  <div>{dateState + ' ' + clockState}</div>
  );
};

export default DigitalClock;
