
//making a component
var App= React.createClass({
    render(){



    }
});

//our Data
var Data = [{
    'who': 'Aman Singh',
    'when': '3 mins ago',
    'where': 'Sydney Opera House'
},
    {
        'who': 'Raman Singh',
        'when': '5 mins ago',
        'where': 'Imax'
    }];

var Headings = ['Author','Where','Description'];

ReactDOM.render(
    <App myData ={Data} title="Recent Changes" myHeadings ={Headings}/>,document.getElementById('example')
    
);



//Disecting into Small components
//small heading component
var Heading = React.createClass({
    render(){
        return <th>{this.props.heading}</th>;//this heading here will be passed as props to the Heading component.
    }
});

//small row component
var Row = React.createClass({
    render(){
        return (<tr>
            <td>{this.props.changeSet.who}</td>
            <td>{this.props.changeSet.when}</td>
            <td>{this.props.changeSet.where}</td>
        </tr>);
    }
});