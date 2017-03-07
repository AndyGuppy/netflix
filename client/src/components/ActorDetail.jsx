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
    return (<div>
              <h4>Actor: - {props.actor.show_title}</h4>

            </div>)
};

module.exports = ActorDetail;
