import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CalendarPage = () => {
  const [date, setDate] = useState(new Date());
  const handleDateChange = newDate => {
    setDate(newDate);
  };
  return (
    <div>
      {" "}
      {/* <h1>React Calendar Example</h1> */}
      <Calendar onChange={handleDateChange} value={date} />
      {/* <p>Selected Date: {date.toDateString()}</p> */}
    </div>
  );
};

export default CalendarPage;
