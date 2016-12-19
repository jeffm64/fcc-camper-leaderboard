var React = require("react");

var ListItem = function(props) {
  var camper = props.camper;
  var number = props.number
    
  return (
        <tr>
            <td>{number}</td>
            <td><a href={"https://freecodecamp.com/" + camper.username} target="_blank">{camper.username}</a></td>
            <td>{camper.recent}</td>
            <td>{camper.alltime}</td>
        </tr>
      );  
};

module.exports = ListItem;