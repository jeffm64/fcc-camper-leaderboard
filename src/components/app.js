var React = require("react");
var ReactDOM = require("react-dom");
var axios = require("axios");
var List = require("./list");



var App = React.createClass({
    

  getInitialState: function() {
        return {
            recentCampers: [],
            allTimeCampers: [],
            currentView: "recent campers"
        };
    },
  
  componentWillMount: function() {
      axios.all([this.fetchRecentCampers, this.fetchAllTimeCampers])
        .then(axios.spread(function (recentCampers, allTimeCampers) {
            this.setState({
                recentCampers: recentCampers.data,
                allTimeCampers: allTimeCampers.data
            });
        }));
        console.log(this.state);
  },
  
  fetchRecentCampers: function() {
      return axios.get("https://fcctop100.herokuapp.com/api/fccusers/top/recent");
  },
  
  fetchAllTimeCampers: function() {
    return axios.get("https://fcctop100.herokuapp.com/api/fccusers/top/alltime");  
  },
  
  changeView: function(view) {
    this.setState({ currentView: view });
  },
    
  render: function () {
    return (
            <div className="content" >
                <h1>Displaying {this.state.currentView} points</h1>
                <button className="recent-btn" onClick={this.changeView.bind(this, "recent campers")} >Recent</button>
                <button className="alltime-btn" onClick={this.changeView.bind(this, "all time campers")} >All time</button>
                <List campers={this.state[this.state.currentView]} />
            </div>
        );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById("render-target")
);