var React = require('react');

var ActorSelector = React.createClass({

  getInitialState: function(){
    return{ selectedIndex: undefined};
  },

  render: function () {
    var options = this.props.actors.map(function(actor, index){
      return <option value ={index} 
                     key ={index}>{actor.show_title}</option>
    });
    return (
      <select id="actors" 
        value={this.state.selectedIndex}
        onChange={this.handleChange}>
        {options}
      </select>
    );
  },

  handleChange: function(event) {
    var newIndex = event.target.value;
    this.setState({selectedIndex: newIndex});

    var selectedActor = this.props.actors[newIndex];
    this.props.didSelectActor(selectedActor);
  }



});

module.exports = ActorSelector;
