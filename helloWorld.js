
//making a component
var Profle= React.createClass({
    render(){


        //using destructuring syntax E6
        var {myHeadings,myData,title} = this.props;


        var rows = myData.map((row)=> {
            return <tr>
                <td>{row.who}</td>
                <td>{row.when}</td>
                <td>{row.where}</td>
            </tr>;
        })


        //Headings
        var headings = myHeadings.map((heading)=>{
            return <th>{heading}</th>
        })

        return (<div>
            <h1>{this.props.title}</h1>
            <table>
                <thead>
                    {headings}
                </thead>

                <tbody>
                    {rows}
                </tbody>
        </table>
            </div>);
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
    <Profle myData ={Data} title="Profile Heading" myHeadings ={Headings}/>,document.getElementById('example')
    
);

