import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }
  onInputChange (e) {
    this.setState({ term: e.target.value });
  }
  onFormSubmit (e) {
    e.preventDefault();
    //go fetch the weather data
  }
  render() {
    return (
      <form onSubmit={ this.onFormSubmit.bind(this) } className="input-group">
        <input
          placeholder="Get a five day forecast in your favorite cities"
          className="form-control"
          value={ this.state.term }
          onChange={ this.onInputChange.bind(this) } />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}