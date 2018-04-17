import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAyKFMPFw1mrcXSAOE1zDyA188Vm-bOupg'

// Create a new component. This component should produce
// some html
class App extends Component { //the new jsx syntax, fat arrow instead of function
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term:'surfboards'}, function(data) {
      this.setState({ videos: data });
    });
  }

  render() {
    return (
    <div>
    <SearchBar />
    </div>
    );
  }
}

// Take this component's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
//it needs to ne a instance (in tags)
//the query selector will tell react to go to index.html and to
//the <div> container
