# MyReads Project

This is the project for the final assessment project for Udacity's React Fundamentals course.

## TL;DR

To get started with this project:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## What You're Getting
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with this app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for this app. Feel free to customize this as you desire.
    ├── App.js # This is the root of this app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for this app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── container # Containers of this app.
    │   ├── BooksDashboard.js # This is the main page container of this app
    │   └── SearchPage.js # This is the search page container of this app
    ├── components # Smaller components of this app, which could be reused
    │   ├── AddBook.js # This is the 'Add book' button on the main page bottom
    │   ├── Book.js # This is the book component displayed on shelf or in search result
    │   ├── BookShelf.js # This is the book shelf component
    │   ├── BookStatus.js # This is book status component. Users can change book status in this component
    │   ├── SearchBar.js # This is search bar component on the top of search page
    │   └── SearchResults.js # This is search result component
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.

```

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).


For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
