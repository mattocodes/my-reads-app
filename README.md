# My Reads Web App

The goal of My Reads web app was to create a bookshelf app that allows one to select and categorize books into one of the following categories: Currently Reading, Want To Read, and Read. This project emphasizes the use of React (a front-end library) and an API server to build the app. 



## Getting Started

To get started with My Reads web app:

* clone or download the files by clicking on the green "Clone or download" button at the top of this page
* install all project dependencies with `npm install`
* start the server with `npm start`

## Folder Structure
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms used with the app.
├── package.json # npm package manager file. 
├── public
│   ├── favicon.ico # React Icon.
│   └── index.html # Contains the root div
└── src
    ├── Components # Folder that contains web app components
    │   ├── Book.js # Contains the book details
    │   ├── MainSite.js # Manages app's state information & contains shelf component
    │   ├── SearchSite.js # Contains site search functionality
    │   └── Shelf.js # Contains the various bookshelves (Currently Reading, Want To Read & Read)
    ├── App.css # Contains styles for the app.
    ├── App.js # This is the root JS file for the app.
    ├── App.test.js # Used for testing. Provided with Create React App.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for the app. 
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles.
    └─ index.js # It is used for DOM rendering only.
    
```


## Backend Server

The following file [`BooksAPI.js`](src/BooksAPI.js) contains the methods used to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books used in the app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.


## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).


## License

The contents of this repository are covered under the [MIT Licence](#)

