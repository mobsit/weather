import React from 'react';
import imageW from './images/icon-wind.png';
import imageU from './images/icon-umberella.png';
const ToDay = props => {
  const { time, rain, temperature, wind, location } = props;
  const getmonth = time => {
    const months = [
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
      'December'
    ];

    if (time) {
      let date = new Date(time);

      return months[[date.getMonth()]];
    }
  };
  const getdate = time => {
    if (time) {
      let date = new Date(time * 1000);

      return date.getDate();
    }
  };
  const getday = time => {
    const days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ];

    if (time) {
      let date = new Date(time * 1000);
      console.log(date);
      return days[[date.getDay()]];
    } else return null;
  };
  const fToC = temperature => {
    const fToCel = ((temperature - 32) * 5) / 9;
    return fToCel;
  };
  return (
    <div className='today forecast'>
      <div className='forecast-header'>
        <div className='day'>{getday(time)}</div>
        <div className='date'>{`${getdate(time)} ${getmonth(time)}`}</div>
      </div>
      <div className='forecast-content'>
        <div className='location'>{location.split(',')[0]}</div>
        <div className='degree'>
          <div className='num'>
            {Math.floor(fToC(temperature))}
            <sup>o</sup>C
          </div>
        </div>
        <span>
          <img src={imageU} alt='' />
          {Math.floor(rain)}%
        </span>
        <span>
          <img src={imageW} alt='' />
          {wind}km/h
        </span>
      </div>
    </div>
  );
};
export default ToDay;
