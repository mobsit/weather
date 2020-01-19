import React from 'react';
import Api from '../api/Api';
import SearchBar from './SearchBar';
import './style.css';
import Day from './Day.js';
import ToDay from './ToDay';
import Background from './images/back.jpg';
class App extends React.Component {
  state = { forecast: '', location: '' };

  onSearchSubmit = async address => {
    const response = await Api.get('', {
      params: { address: address }
    });
    this.setState({
      forecast: response.data.forecast,
      location: response.data.location
    });
  };
  renderContent() {
    if (this.state.forecast) {
      const {
        time0,
        rain0,
        temperature0,
        wind0,
        time1,
        rain1,
        temperature1,
        wind1,
        time2,
        rain2,
        temperature2,
        wind2,
        time3,
        rain3,
        temperature3,
        wind3,
        time4,
        rain4,
        temperature4,
        wind4,
        time5,
        rain5,
        temperature5,
        wind5,
        time6,
        rain6,
        temperature6,
        wind6
      } = this.state.forecast;
      return (
        <div className='forecast-table'>
          <div className='container'>
            <div className='forecast-container'>
              <ToDay
                time={time0}
                rain={rain0}
                temperature={temperature0}
                wind={wind0}
                location={this.state.location}
              />
              <Day
                time={time1}
                rain={rain1}
                temperature={temperature1}
                wind={wind1}
              />
              <Day
                time={time2}
                rain={rain2}
                temperature={temperature2}
                wind={wind2}
              />
              <Day
                time={time3}
                rain={rain3}
                temperature={temperature3}
                wind={wind3}
              />
              <Day
                time={time4}
                rain={rain4}
                temperature={temperature4}
                wind={wind4}
              />
              <Day
                time={time5}
                rain={rain5}
                temperature={temperature5}
                wind={wind5}
              />
              <Day
                time={time6}
                rain={rain6}
                temperature={temperature6}
                wind={wind6}
              />
            </div>
          </div>
        </div>
      );
    }
  }

  render() {
    var sectionStyle = {
      width: '100%',
      height: '400px',
      backgroundImage: `url(${Background})`
    };
    return (
      <div className='site-content' style={sectionStyle}>
        <div className='hero'>
          <div className='container'>
            <SearchBar onSubmit={this.onSearchSubmit} />
          </div>
        </div>
        {this.renderContent()}
      </div>
    );
  }
}

export default App;
