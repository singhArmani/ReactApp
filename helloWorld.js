
//Disecting into Small components
//small heading component
var Heading = React.createClass({
    render(){
        //defining a JavaScript Object in CamelCase fashion for styling
        var headingStyle = {backgroundColor: 'FloralWhite',
                            fontsize:'19px'
                            };
        //using it as inline styling
        return <th style={headingStyle}>{this.props.myHeading}</th>;//this heading here will be passed as props to the Heading component.
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
        var  headings = this.props.headings.map((heading, index)=>{
            return(<Heading key ={index} myHeading ={heading}/>); //it will return a small Heading Component
        });

        return (<thead><tr>{headings}</tr></thead>);
    }
});



//small row component
var Row = React.createClass({
    render(){
        var trStyle = {backgroundColor:'aliceblue'
                     }
        return (<tr style={trStyle}>
            <td>{this.props.myChangeSet.who}</td>
            <td>{this.props.myChangeSet.when}</td>
            <td>{this.props.myChangeSet.description}</td>
        </tr>);
    }
});


//lets build the Rows Component too
var Rows = React.createClass({
    render(){
        var rows = this.props.changeSets.map((changeSet, index)=>{
            return(<Row key={index} myChangeSet = {changeSet}/>); //return smaller Row compoent with object passed as props
        });

        return (<tbody>{rows}</tbody>);
    }
});

//Namespaced Components
//Need to represent top level component as custom component rather than using <table> element

var RecentChangesTable = React.createClass({
    render(){
        var tableStyle = {
              width:'100%',
              border:'1px solid black'

        }
        return <table style={tableStyle}>
            {this.props.children}
        </table>;
    }
});


//making a Top level component
var App = React.createClass({

    //Setting initial State using getInitialState function
    getInitialState(){
        return {
            changeSets:[]
        };
    },

    mapOpenLibraryDataToChangeSet(data){
      return data.map((change, index)=>{
            return {
                "when": jQuery.timeago(change.timestamp),
                 "who": change.author.key,
                "description": change.comment
            }
        });
    },

    componentDidMount(){
        $.ajax({
            url: 'http://openlibrary.org/recentchanges.json?limit=10',
            context: this,
            dataType: 'json',
            type: 'GET'
        }).done(function(data){
                var changeSets = this.mapOpenLibraryDataToChangeSet(data);
                 this.setState({changeSets:changeSets});
        });
    },

    render(){
        return <RecentChangesTable>
            <Headings  headings={this.props.myHeadings} />
            <Rows changeSets = {this.state.changeSets}/>
        </RecentChangesTable>;

    }
});


var headings = ['Author','Where','Description'];


//using E6 Spread Operator 
var props = { myHeadings:headings};

ReactDOM.render(
    <App {...props}/>,document.getElementById('example')
  /*In this case, all the properties of object are passed as props to the App component.
We can pass any object that can contain any number of key value pairs and all of
them will be passed as props to the component" */
);

