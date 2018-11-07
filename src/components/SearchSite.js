import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import Book from './Book'

class SearchSite extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            books: [],
            results: [],
            query: ""
        }

    }

    componentDidMount() {
        BooksAPI.getAll()
        .then(response => {
            this.setState({books: response})
        })
            
    }

    updateQuery = (query) => {
        this.setState({query: query}, this.submitQuery)
    }

    submitQuery() {
        if(this.state.query === "" || this.state.query === undefined) {
            return this.setState({ results: [] })
        }
        BooksAPI.search(this.state.query.trim()).then(response => {
            if(response.error) {
                return this.setState({ results: [] })
            }
            else {
                response.forEach(book => {
                    let find = this.state.books.filter(item => item.id === book.id)
                    book.shelf = find[0] ? find[0].shelf : null
                })

                return this.setState({ results: response })
            }
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
            <div className="search-books">
                <div className="search-books-bar">
                  <Link className="close-search" to="/">Close</Link>
                  <div className="search-books-input-wrapper">
                  <input type="text" placeholder="Search by title or author"
                    vaule={this.state.query}
                    onChange={event => this.updateQuery(event.target.value)} />
    
                  </div>
                </div>
                <div className="search-books-results">
                  <ol className="books-grid">
                    {
                        this.state.results.map((item, key) => <Book key={key} book={item} updateBook={this.updateBook} />)
                    }
                  
                  </ol>
                </div>
            </div>
        );
    }
}

export default SearchSite