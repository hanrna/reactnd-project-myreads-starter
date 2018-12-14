import React from 'react';
import PropTypes from 'prop-types';
import BookShelf from "../components/BookShelf";
import AddBook from "../components/AddBook";

const BooksDashboard = (props) => {
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    {
                        Object.values(props.bookShelves).map((shelf) => (
                            <BookShelf key={shelf.defaultStatus}
                                shelfTitle={shelf.title}
                                bookList={shelf.bookList}
                                bookDefaultStatus={shelf.defaultStatus}
                                moveBook={props.moveBook}
                            />))
                    }
                </div>
            </div>
            <AddBook />
        </div>
    );
}

BooksDashboard.propTypes = {
    bookShelves: PropTypes.object.isRequired,
    moveBook: PropTypes.func.isRequired
};

export default BooksDashboard;