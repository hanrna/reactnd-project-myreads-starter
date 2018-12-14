import React, { Component } from 'react';
import SearchBar from "../components/SearchBar";
import * as BooksAPI from "../BooksAPI";
import SearchResults from "../components/SearchResults";
import PropTypes from "prop-types";

class SearchPage extends Component {
    state = {
        matchedBooks: []
    };

    searchBooks = (query) => {
        if (query !== '') {
            BooksAPI.search(query)
                .then(books => {
                    console.log(books);
                    this.setState({
                        matchedBooks: Array.isArray(books) ? books : null
                    });
                });
        } else {
            this.setState({
                matchedBooks: []
            });
        }
    };

    render() {
        return (
            <div className="search-books">
                <SearchBar searchBooks={this.searchBooks} />
                <SearchResults
                    books={this.state.matchedBooks}
                    moveBook={this.props.moveBook}
                    getBookStatus={this.props.getBookStatus}
                />
            </div>);
    }

}

SearchPage.propTypes = {
    moveBook: PropTypes.func.isRequired,
    getBookStatus: PropTypes.func.isRequired
};

export default SearchPage;