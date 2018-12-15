import React, { Component } from 'react';
import SearchBar from "../components/SearchBar";
import * as BooksAPI from "../BooksAPI";
import SearchResults from "../components/SearchResults";
import PropTypes from "prop-types";

class SearchPage extends Component {
    state = {
        query: '',
        matchedBooks: []
    };

    onSearch = (query) => {
        this.setState({ query });
        if (query !== '') {
            BooksAPI.search(query)
                .then(books => {
                    if (query === this.state.query) {
                        this.setState({
                            matchedBooks: Array.isArray(books) ? books : null
                        });
                    }
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
                <SearchBar query={this.state.query} onSearch={this.onSearch} />
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