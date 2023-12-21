import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import {
  CalendarContent,
  CalendarTop,
  CalendarWapper,
} from "../../styles/diarystyles/calendar/calendarpagestyle";

const CalendarPage = () => {
  const [value, onChange] = useState(new Date());
  return (
    <CalendarWapper>
      <CalendarTop>
        <img src={`${process.env.PUBLIC_URL}/images/bt_back.svg`} />
      </CalendarTop>{" "}
      <CalendarContent>
        <Calendar onChange={onChange} value={value} />
      </CalendarContent>
    </CalendarWapper>
  );
};

export default CalendarPage;
