import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BookStatus extends Component {
    onChange = (event) => {
        this.props.moveBookToShelf(event.target.value);
    };
    render() {
        return (
            <div className="book-shelf-changer">
                <select value={this.props.defaultStatus} onChange={this.onChange}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        );
    }
}

BookStatus.propTypes = {
    defaultStatus: PropTypes.string,
    moveBookToShelf: PropTypes.func.isRequired
};

export default BookStatus;