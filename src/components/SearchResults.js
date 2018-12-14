import React from 'react';
import PropTypes from 'prop-types';
import Book from "./Book";

const SearchResults = (props) => {
    return (
        <div className="search-books-results">
            {
                (props.books != null && props.books.length > 0) &&
                (<ol className="books-grid">
                    {props.books.map(book => (
                        <li key={book.id}>
                            <Book
                                book={book}
                                bookDefaultStatus={props.getBookStatus(book)}
                                moveBook={props.moveBook}
                            />
                        </li>
                    ))}
                </ol>)
            }
            {!props.books && (<p>No books match your query</p>)}
        </div>
    );
}

SearchResults.propTypes = {
    books: PropTypes.array,
    getBookStatus: PropTypes.func.isRequired,
    moveBook: PropTypes.func.isRequired
};

export default SearchResults;
