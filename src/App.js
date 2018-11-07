import React from 'react'

import './App.css'

import { Route } from 'react-router-dom'

import MainSite from './components/MainSite'
import SearchSite from './components/SearchSite'

class BooksApp extends React.Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={ MainSite } />
        <Route exact path="/search" component={ SearchSite } />
      </div>

    );
  }
}

export default BooksApp
