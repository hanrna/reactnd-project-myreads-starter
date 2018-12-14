import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class SearchBar extends Component {
    state = {
        query: ''
    };

    onSearch = (event) => {
        const { value } = event.target;
        this.setState({ query: value });
        this.props.searchBooks(value);
    };

    render() {
        return (
            <div className="search-books-bar">
                <Link className="close-search" to='/'>Close</Link>
                <div className="search-books-input-wrapper">
                    <input
                        type="text"
                        placeholder="Search by title or author"
                        value={this.state.value}
                        onChange={this.onSearch}
                    />
                </div>
            </div>
        );
    }
}

SearchBar.propTypes = {
    searchBooks: PropTypes.func.isRequired
};

export default SearchBar;