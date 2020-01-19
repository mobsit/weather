import React from 'react';

const Day = props => {
  console.log(props);
  const { time, rain, temperature, wind } = props;
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
  const getdate = time => {
    if (time) {
      let date = new Date(time * 1000);
      return date.getDate();
    }
  };
  const fToC = temperature => {
    const fToCel = ((temperature - 32) * 5) / 9;
    return fToCel;
  };
  return (
    <div className='forecast'>
      <div className='forecast-header'>
        <div className='day'>{`${getdate(time)} ${getday(time)}`}</div>
      </div>
      <div className='forecast-content'>
        <div className='degree'>
          {Math.floor(fToC(temperature))}
          <sup>o</sup>C
        </div>

        <small>{Math.floor(rain)}%</small>
        <br />
        <small>{wind}km/h</small>
      </div>
    </div>
  );
};
export default Day;
