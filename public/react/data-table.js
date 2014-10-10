/** @jsx React.DOM */

var DataDisplay = React.createClass({
    displayName: 'DataDisplay',

    _loadData: function(min, max){
        var currentState = this.state.records;
        $.get('/api/user/list', function (result) {
            var moreRecs = result.slice(min, max);
            var recs = this.state.records;
            recs = recs.concat(moreRecs);
            this.setState({records: recs}, function(){
                console.log("done")
            });
        }.bind(this));
    },

    loadMore: function(){
        this._loadData(5000,10000);
    },

    incrementAll: function(){
        var recs = this.state.records;

        recs.forEach(function(rec){
            rec.updated_count++
        });

        this.setState({records:recs});
    },

    getInitialState: function(){
        return {records:[], canLoadMore:true};
    },

    componentDidMount: function() {
        if(this.isMounted()){
            this._loadData(0, 5000);
        }
    },

    render: function(){
        return(
            <div>
                <button className="btn-primary" onClick={this.loadMore}>Add More Records</button>
                <button className="btn-primary" onClick={this.incrementAll}>Increment All</button>
                <DataTable recs={this.state.records}/>
            </div>
        );
    }
});

var DataTable = React.createClass({
    displayName: 'DataTable',

    render: function(){
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
                <DataRows recs={this.props.recs}/>
            </table>);
    }
});

var DataRows = React.createClass({
    displayName: 'DataRows',
    render: function() {
        return (
        <tbody>
        {this.props.recs.map(function(rec){
            return <DataRow data={rec}/>
            })
        }
        </tbody>);
    }
});

var DataRow = React.createClass({
    displayName: 'DataRow',

    render: function(){
        return(
            <tr>
                <td>{this.props.data.id}</td>
                <td>{this.props.data.first_name}</td>
                <td>{this.props.data.last_name}</td>
                <td>{this.props.data.email}</td>
                <td>{this.props.data.country}</td>
                <td>{this.props.data.signup_date}</td>
                <td>{this.props.data.updated_count}</td>
            </tr>
        )
    }
});