import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

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
    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}
//first param would have been state, but here we do not care about the state at all
export default connect(null, mapDispatchToProps)(SearchBar);