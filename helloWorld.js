
//Disecting into Small components
//small heading component
var Heading = React.createClass({
    render(){
        return <th>{this.props.myHeading}</th>;//this heading here will be passed as props to the Heading component.
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


//lets build the Rows Component too
var Rows = React.createClass({
    render(){
        var rows = this.props.changeSets.map((changeSet)=>{
            return(<Row myChangeSet = {changeSet}/>); //return smaller Row compoent with object passed as props
        });

        return (<tbody>{rows}</tbody>);
    }
});

//Namespaced Components
//Need to represent top level component as custom component rather than using <table> element

var RecentChangesTable = React.createClass({
    render(){
        return <table>
            {this.props.children}
        </table>;
    }
});


//making a Top level component
var App = React.createClass({
    render(){

        return <table className="table">
            <Headings headings={this.props.myHeadings} />
            <Rows changeSets = {this.props.myData}/>
        </table>;

    }
});

//our Data
var Data = [{
    'who': 'Malkeet Singh',
    'when': '3 mins ago',
    'where': 'Sydney Opera House'
},
    {
        'who': 'Raman Singh',
        'when': '5 mins ago',
        'where': 'Imax'
    }];

var headings = ['Author','Where','Description'];

ReactDOM.render(
    <App myData ={Data}  myHeadings ={headings}/>,document.getElementById('example')

);