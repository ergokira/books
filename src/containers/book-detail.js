import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component{
    render(){
        if(!this.props.book){
            return <div>Select a book to get started!</div>;
        }
        return (
            <div className="col-sm-8">
                <h3>Details for:</h3>
                <div><img src= {this.props.book.img} alt=""/></div>
                <div>Title: {this.props.book.title}</div>
                <div>Author: {this.props.book.author}</div>
                <div>Pages: {this.props.book.pages}</div>
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