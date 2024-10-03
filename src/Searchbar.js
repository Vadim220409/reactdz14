import React, { Component } from "react";
import PropTypes from 'prop-types'

class Searchbar extends Component {
    state = {
      query: '', 
    };
  
    handleChange = (e) => {
      this.setState({ query: e.target.value });
    };
  
    handleSubmit = (e) => {
      e.preventDefault();
      const { query } = this.state;
      if (query.trim() === '') return;
      this.props.onSubmit(query); 
      this.setState({ query: '' }); 
    };
  
    render() {
      const { query } = this.state;
  
      return (
        <header className="searchbar">
          <form className="form" onSubmit={this.handleSubmit}>
            <button type="submit" className="button">
              <span className="button-label">Search</span>
            </button>
            <input
              className="input"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              value={query}
              onChange={this.handleChange}
            />
          </form>
        </header>
      );
    }
}
  
Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};
  
export default Searchbar;