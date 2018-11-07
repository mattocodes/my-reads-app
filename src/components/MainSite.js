import React from 'react'
import { Link } from 'react-router-dom'
import Shelf from './Shelf'
import * as BooksAPI from '../BooksAPI'

class MainSite extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            books: []
        }

    }

    componentDidMount() {
        BooksAPI.getAll()
        .then(response => {
            console.log(response)
            this.setState({books: response})
        })
            
    }

    updateBook = (book, shelf) => {
        BooksAPI.update(book, shelf)
        .then(() => {
            book.shelf = shelf;
            this.setState(state => ({
                books: state.books.filter(item => item.id !== book.id).concat([book])

            }))

        })

    }

    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <Shelf
                         updateBook={this.updateBook} 
                        name="Currently Reading" 
                        books={this.state.books.filter(book => book.shelf ==="currentlyReading")}
                    />
                    <Shelf
                         updateBook={this.updateBook}
                        name="Want To Read" 
                        books={this.state.books.filter(book => book.shelf ==="wantToRead")}
                    />
                    <Shelf
                         updateBook={this.updateBook} 
                        name="Read" 
                        books={this.state.books.filter(book => book.shelf ==="read")}
                    />
                </div>
                
                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
            </div>
        );
    }
}

export default MainSite
