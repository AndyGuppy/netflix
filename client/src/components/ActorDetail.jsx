var React = require('react');

// var CountryDetail = React.createClass( {
//   render: function(){
//       return (
//           <h3>
//             Country details to go here.
//           </h3>
//         );
//     }
// });


var ActorDetail = function(props) {
  if (!props.actor) {
    return <h4>No Actor Selected.</h4>
  }
    return (<div className = "film_detail">
            <div className = "poster"> 
              <img id = 'img' src={props.actor.poster}/>
              </div>
              <div className = "info">
              <h4>Title: - {props.actor.show_title}</h4>
              <h4>Year: - {props.actor.release_year}</h4>
              <h4>Rating: - {props.actor.rating}</h4>
              <h4>Summary: - {props.actor.summary}</h4>
              </div>
            </div>)
};

module.exports = ActorDetail;
