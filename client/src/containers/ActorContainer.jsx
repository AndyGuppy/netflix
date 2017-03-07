var React = require('react');
var ActorSelector = require('../components/ActorSelector');
var ActorDetail = require('../components/ActorDetail');

var ActorContainer = React.createClass({
  //When component is first created ( same as on conplete as android, winload on others )
  componentDidMount: function () {
    var url = 'http://netflixroulette.net/api/api.php?actor=Nicolas%20Cage';
    this.makeRequest(url);
  },

  makeRequest: function(url) {
    var request = new XMLHttpRequest();
    request.open('GET', url);

    request.onload = function () {
    if (request.status !== 200) return;
    var data = JSON.parse(request.responseText);
    this.setState({actors: data, focusActor: data[0]});
    }.bind(this);

    request.send();

  },


  getInitialState: function () {
    return { actors: [], focusActor: null };
  },

  render: function () {
    return (
      <div>
        <h2>Movies by Actor</h2>
        <ActorSelector 
        actors = {this.state.actors}  
        didSelectActor={this.didSelectActor}
        makeRequest={this.makeRequest}/>
        <ActorDetail 
        actor = {this.state.focusActor}/>
      </div>
    );
  },

  didSelectActor: function(actor) {
    this.setState({focusActor: actor});
  }

});

module.exports = ActorContainer;
