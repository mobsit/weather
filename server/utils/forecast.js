const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url =
    'https://api.darksky.net/forecast/c87d8317ac02d3ef827012a081700c2d/' +
    latitude +
    ',' +
    longitude;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather service!', undefined);
    } else if (body.error) {
      callback('Unable to find location', undefined);
    } else {
      callback(undefined, {
        time0: body.currently.time,
        rain0: body.currently.precipProbability,
        temperature0: body.currently.temperature,
        wind0: body.currently.windSpeed,
        time1: body.daily.data[1].time,
        rain1: body.daily.data[1].precipProbability,
        temperature1: body.daily.data[1].temperatureMax,
        wind1: body.daily.data[1].windSpeed,
        time2: body.daily.data[2].time,
        rain2: body.daily.data[2].precipProbability,
        temperature2: body.daily.data[2].temperatureMax,
        wind2: body.daily.data[2].windSpeed,
        time3: body.daily.data[3].time,
        rain3: body.daily.data[3].precipProbability,
        temperature3: body.daily.data[3].temperatureMax,
        wind3: body.daily.data[3].windSpeed,
        time4: body.daily.data[4].time,
        rain4: body.daily.data[4].precipProbability,
        temperature4: body.daily.data[4].temperatureMax,
        wind4: body.daily.data[4].windSpeed,
        time5: body.daily.data[5].time,
        rain5: body.daily.data[5].precipProbability,
        temperature5: body.daily.data[5].temperatureMax,
        wind5: body.daily.data[5].windSpeed,
        time6: body.daily.data[6].time,
        rain6: body.daily.data[6].precipProbability,
        temperature6: body.daily.data[6].temperatureMax,
        wind6: body.daily.data[6].windSpeed
      });
    }
  });
};

module.exports = forecast;
