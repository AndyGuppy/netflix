var React = require('react');

var ActorSelector = React.createClass({

  getInitialState: function(){
    return{ selectedIndex: undefined};
  },

  getActorName: function() {
    console.log(actorName.value)
    var url = 'http://netflixroulette.net/api/api.php?actor=' + actorName.value;
    this.props.makeRequest(url);
  },

  render: function () {
    var options = this.props.actors.map(function(actor, index){
      return <option value ={index} 
                     key ={index}>{actor.show_title}</option>
    });

    return (
      <div>
      <input type="text" id = "actorName"></input>
      <button onClick={this.getActorName}>Find Actor</button><br/><br/>
      <select
        value={this.state.selectedIndex}
        onChange={this.handleChange}>
        {options}
      </select>
      
      </div>
  
    );
  },

  handleChange: function(event) {
    console.log('handle change')
    var newIndex = event.target.value;
    this.setState({selectedIndex: newIndex});

    var selectedActor = this.props.actors[newIndex];
    this.props.didSelectActor(selectedActor);
  }



});

module.exports = ActorSelector;
