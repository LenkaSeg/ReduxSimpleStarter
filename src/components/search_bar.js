// I need text input and update of the video_list_item

import React, { Component } from 'react'; // the curly braces around component
//mean the same as setting a constant (const Component = React.Component)

class SearchBar extends Component { //extends means
  //give it access to all the functionality that react.component has
  constructor(props) {  //constructor fuction is reserved for setups, like
    //initializing a variable or state
    super(props); // magic function

    this.state = { term: '' }; // whenever we use state, we initialize it by
    // creating a new object and assigning it to this start state
  }

  render() {
    return (
      <div className="search-bar">
    <input
      value={this.state.term}
      onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

onInputChange(term) {
  this.setState({term});
  this.props.onSearchTermChange(term);
}
  //onInputChange(event) {
  //  console.log(event.target.value); //javascript console is printing input
  //}
}

export default SearchBar;
