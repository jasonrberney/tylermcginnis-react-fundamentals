var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');

// component concerned with 3 things:
// state
// lifecycle event
// UI

class App extends React.Component {
    render(){
        return(
            <div>
                Hello World! :)
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);