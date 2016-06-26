class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: exampleVideoData[0],
      allVideos: exampleVideoData,
      input: ''
    };
  }
  componentDidMount() {
    this.getYouTubeVideos('react tutorial');
  }

  onVideoClick(video) {
    this.setState({
      currentVideo: video
    });
  }

  detectUserInput(e) {
    this.setState({
      input: this.getYouTubeVideos(e.target.value)
    });
  }

  getYouTubeVideos(query) {
    var options = {
      query: query,
      key: this.props.API_KEY,
      max: 10
    };

    this.props.searchYouTube(options, (videos) => 
      this.setState({
        currentVideo: videos[0],
        allVideos: videos
      })
    );
  }

    // call search youtube passing in options and callback
    // set state to new data

  render() {
    return (
      <div>
        <Nav detectUserInput={this.detectUserInput.bind(this)}/>
        <div className="col-md-7">
          <VideoPlayer video = {this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.allVideos} onVideoClick ={this.onVideoClick.bind(this)}/>
        </div>
      </div>
    );
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
