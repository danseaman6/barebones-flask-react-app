import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Container from "react-bootstrap/Container";


class App extends React.Component {
    render() {
        return (
            <Container classname="App">
                <div>
                    <p>
                        Where we at?
                    </p>
                </div>
            </Container>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
