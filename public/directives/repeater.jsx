/** @jsx React.DOM */
window.Repeater = React.createClass({
    render: function() {

    var scope = this.props.scope;

    var rows = _.map(scope.rows, function(row) {
        return (
        <tr>
            <td>{row.id}</td>
            <td>{row.first_name}</td>
            <td>{row.last_name}</td>
            <td>{row.email}</td>
            <td>{row.country}</td>
            <td>{row.signup_date}</td>
            <td>{row.updated_count}</td>
        </tr>
        );
    });
    return (
        <table className="table">
        <thead>
            <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Country</th>
                <th>Signup Date</th>
                <th>Updated Count</th>
            </tr>
        </thead>
        <tbody>{rows}</tbody>
        </table>
    );
    }
});