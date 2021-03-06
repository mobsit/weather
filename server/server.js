const express = require('express');
const cors = require('cors');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');
const app = express();
app.use(cors());
app.get('', (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: 'You must provide an address!'
    });
  }

  geocode(
    req.query.address,
    (error, { latitude, longitude, location } = {}) => {
      if (error) {
        return res.send({ error });
      }

      forecast(latitude, longitude, (error, forecastData) => {
        if (error) {
          return res.send({ error });
        }

        res.send({
          forecast: forecastData,
          location,
          address: req.query.address
        });
      });
    }
  );
});

app.listen(3001, () => {
  console.log('Server is up on port 3001.');
});
