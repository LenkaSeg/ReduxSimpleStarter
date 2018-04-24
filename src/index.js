import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyAyKFMPFw1mrcXSAOE1zDyA188Vm-bOupg'

// Create a new component. This component should produce
// some html
class App extends Component { //the new jsx syntax, fat arrow instead of function
  constructor(props) {
    super(props);

{/* selectedVideo = this is how to make the little videos clickable*/}
    this.state = {
      videos: [],
      selectedVideo: null
    };


    {/* videos:videos = YTSearch goes to fetch some videos and puts them into
      this array*/}
    {/* selectedVideo = and the first video of the array is the selectedVideo*/}
    YTSearch({key: API_KEY, term:'surfboards'}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
       });
    });
  }

  render() {
    return (
    <div>
      <SearchBar />
      <VideoDetail video={this.state.selectedVideo} />
      <VideoList videos={this.state.videos} />
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
