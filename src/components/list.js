var React = require("react");
var ListItem = require("./camper-items");

var List = function(props) {
    var campers = props.campers;
    
/*    var Items = campers.map(function(camper, index) {
        return <ListItem key={index} camper={camper} number={index + 1} />
    });
*/
    
    return (
        <table className="camper-table">
            <thead className="table-header">
                <tr>
                    <th>Position</th>
                    <th>Camper name</th>
                    <th>Points in last 30 days</th>
                    <th>All time points</th>
                </tr>
            </thead>
            <tbody>
                //Items}
            </tbody>
        </table>
        );
};

module.exports = List;