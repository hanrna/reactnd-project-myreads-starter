import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BookStatus from "./BookStatus";

const BookAuthors = (props) => {
    return ( // return a list of author names which are separated by ,
        <div className="book-authors">
            {
                props.authors.map((author, i) => (
                    <span key={i}> {i > 0 ? ` , ${author}` : `${author}`}</span>
                ))
            }
        </div>
    );
};

class Book extends Component {
    moveBookToShelf = (shelf) => {
        this.props.moveBook(this.props.book, shelf);
    };

    render() {
        const { book, bookDefaultStatus } = this.props;
        const bookBackgroundImageStyle = (book.imageLinks && book.imageLinks.smallThumbnail) ? { backgroundImage: `url(${book.imageLinks.smallThumbnail})` } : null;
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style = {bookBackgroundImageStyle} />
                    <BookStatus
                        defaultStatus={bookDefaultStatus}
                        moveBookToShelf={this.moveBookToShelf}
                    />
                </div>
                <div className="book-title">{book.title}</div>
                { book.authors && <BookAuthors authors={book.authors} /> }
            </div>
        );
    }
}

Book.propTypes = {
    book: PropTypes.object.isRequired,
    bookDefaultStatus: PropTypes.string.isRequired,
    moveBook: PropTypes.func.isRequired
};

export default Book;