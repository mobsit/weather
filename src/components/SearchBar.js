import React from 'react';

class SearchBar extends React.Component {
  state = { address: '' };
  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.address);
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className='find-location'>
        <input
          type='text'
          placeholder='Find your location...'
          value={this.state.address}
          onChange={e => this.setState({ address: e.target.value })}
        />
      </form>
    );
  }
}

export default SearchBar;
