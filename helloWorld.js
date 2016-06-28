
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
    <App myData ={Data} title="Recent Changes" headings ={Headings}/>,document.getElementById('example')
    
);



//Disecting into Small components
//small heading component
var Heading = React.createClass({
    render(){
        return <th>{this.props.myHeading}</th>;//this heading here will be passed as props to the Heading component.
    }
});

//small row component
var Row = React.createClass({
    render(){
        return (<tr>
            <td>{this.props.myChangeSet.who}</td>
            <td>{this.props.myChangeSet.when}</td>
            <td>{this.props.myChangeSet.where}</td>
        </tr>);
    }
});

//Building upper level components

/*
 We are iterating over the list of titles and converting them into a list of the Heading
 components. The Headings component is controlling how the props are passed to
 the individual Heading components. In a sense, individual Heading components are
 owned by Headings."

 */
var Headings = React.createClass({
    render(){
        var  headings = this.props.headings.map((heading)=>{
            return(<Heading myHeading ={heading}/>); //it will return a small Heading Component
        });

        return (<thead><tr>{headings}</tr></thead>);
    }
});

//lets build the Rows Component too
var Rows = React.createClass({
    render(){
        var Rows = this.props.changeSets.map((changeSet)=>{
            return(<Row myChangeSet = {changeSet}/>); //return smaller Row compoent with object passed as props
        });

        return (<tbody>{Rows}</tbody>);
    }
}):