import React, { Component } from 'react';
import BookList from '../containers/book-list';
import BookDetail from '../containers/book-detail';
import Header from './header';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <BookList />
        <BookDetail />
      </div>
    );
  }
}
