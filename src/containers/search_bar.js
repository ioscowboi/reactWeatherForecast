// Scaffold search bar components: 

import React, { Component } from 'react';

// { We need to connect the api request to react-redux: 
    // we also need to bind fetchWeater (action creator) as a property to the container:
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// action creator: 
import { fetchWeather } from '../actions/index';
// }

export default class SearchBar extends Component {
    // establish/initialize state: 
    constructor(props){
        super(props);

        // initialize state to empty search term (called term):
        this.state = { term: ''};
        // you also need to bind the state of onInputChange to the "this" context, 
        //  otherwise, when onInputChange is run, it won't have the proper context to update 'this'
        //  using below in the constructor, basically creates a bound instance of the function so that 'this' is within scope
        //      ALWAYS use this binding approach when you're passing a callback with a reference to 'this':
        this.onInputChange = this.onInputChange.bind(this);
    }

    // what happens when the form input is altered? 
        // all dom event handlers have an event object:
    onInputChange(event) {
        console.log(event.target.value);
        // set state when text is entered: 
        this.setState({term: event.target.value});
    }
    // Prevent the normal browser submission from occurring: 
    onFormSubmit(event){
        event.preventDefault();

        // fetch new weather data:

    }
    render (){
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                {/* CALLBACK: */}
                {/*     onChange */}
                
                <input 
                    placeholder="Get a five-day forecast in your favorite cities"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}