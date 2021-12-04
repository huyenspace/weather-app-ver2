import React from "react";

export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let newDay = new Date(props.date);
  let day = days[newDay.getDay()];
  let hours = newDay.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = newDay.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <div>
      {day} {hours}:{minutes}
    </div>
  );
}
