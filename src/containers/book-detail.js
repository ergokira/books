import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component{
    render(){
        if(!this.props.book){
            return <div className="book-default-message col-sm-8">Select a book to get started!</div>;
        }
        return (
            <div className="col-sm-8">
                <div className="book-detail">
                    <h3>Details for:</h3>
                    <div className="book-image"><img src= {this.props.book.img} alt=""/></div>
                    <div><h5>Title:</h5> {this.props.book.title}</div>
                    <div><h5>Author:</h5> {this.props.book.author}</div>
                    <div><h5>Pages:</h5> {this.props.book.pages}</div>
                    <div className="book-description"><h5>Description:</h5> <p>{this.props.book.description}</p></div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return{
        book: state.activeBook
    }
}

export default connect(mapStateToProps)(BookDetail);