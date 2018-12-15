import React from 'react';
import { Route, Switch } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';
import SearchPage from './containers/SearchPage';
import BooksDashboard from './containers/BooksDashboard';

class BooksApp extends React.Component {
    state = {
        bookShelves: {
            currentlyReading: {
                title: 'Currently Reading',
                bookList: [],
                defaultStatus: 'currentlyReading'
            },
            wantToRead: {
                title: 'Want To Read',
                bookList: [],
                defaultStatus: 'wantToRead'
            },
            read: {
                title: 'Read',
                bookList: [],
                defaultStatus: 'read'
            }
        }

    };

    componentDidMount() {
        this.getAllBooksOnShelves();
    }

    getAllBooksOnShelves = () => {
        BooksAPI.getAll().then(booksInShelves => {
            this.setState((prevState) => ({
                bookShelves: {
                    currentlyReading: {
                        ...prevState.bookShelves.currentlyReading,
                        bookList: booksInShelves.filter(book => book.shelf === 'currentlyReading')
                    },
                    wantToRead: {
                        ...prevState.bookShelves.wantToRead,
                        bookList: booksInShelves.filter(book => book.shelf === 'wantToRead')
                    },
                    read: {
                        ...prevState.bookShelves.read,
                        bookList: booksInShelves.filter(book => book.shelf === 'read')
                    }
                }
            }))
        });
    };

    getBookStatus = (book) => {
        for (const shelf of Object.values(this.state.bookShelves)) {
            const matchedBook = shelf.bookList.find(b => b.id === book.id);
            if (matchedBook) {
                return matchedBook.shelf;
            }
        }
        return 'none';
    };

    moveBook = (book, toShelfName) => {
        const fromShelfName = book.shelf;
        book.shelf = toShelfName;
        BooksAPI.update(book, toShelfName).then(updatedBook => {
            this.setState((prevState) => {
                const toShelf = {
                    ...prevState.bookShelves[toShelfName],
                    bookList: [...prevState.bookShelves[toShelfName].bookList, book]
                };
                if (!fromShelfName) {
                    return {
                        bookShelves: {
                            ...prevState.bookShelves,
                            [toShelfName]: toShelf
                        }
                    }
                } else {
                    const fromShelf = {
                        ...prevState.bookShelves[fromShelfName],
                        bookList: prevState.bookShelves[fromShelfName].bookList.filter(b => b.id !== book.id)
                    };
                    return {
                        bookShelves: {
                            ...prevState.bookShelves,
                            [fromShelfName]: fromShelf,
                            [toShelfName]: toShelf
                        }
                    }
                }
            });
        });

    };

    render() {
        return (
            <div className="app">
                <Switch>
                    <Route exact path='/search' render={() => (
                        <SearchPage
                            moveBook={this.moveBook}
                            getBookStatus={this.getBookStatus}
                        />
                     )} />
                    <Route exact path='/' render={() => (
                        <BooksDashboard
                            bookShelves={this.state.bookShelves}
                            moveBook={this.moveBook}
                        />
                    )} />
                </Switch>
            </div>
        )
    }
}

export default BooksApp
