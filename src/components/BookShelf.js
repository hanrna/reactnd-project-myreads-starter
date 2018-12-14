import React from 'react';
import PropTypes from 'prop-types';
import Book from "./Book";

const BookShelf = (props) => {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.shelfTitle}</h2>
            <div className="bookshelf-books">
            {
                props.bookList.length > 0 &&
                 (<ol className="books-grid">
                    {props.bookList.map(book => (
                        <li key={book.id}>
                            <Book
                                book={book}
                                bookDefaultStatus={book.shelf || props.bookDefaultStatus}
                                moveBook={props.moveBook}
                            />
                        </li>
                    ))}
                </ol>)
            }
            </div>
        </div>
    );
}

BookShelf.propTypes = {
    shelfTitle: PropTypes.string.isRequired,
    bookList: PropTypes.array.isRequired,
    bookDefaultStatus: PropTypes.string.isRequired,
    moveBook: PropTypes.func.isRequired
};

export default BookShelf;