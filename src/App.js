import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import "../styles/App.css";
import wretch from "wretch";

class App extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <Container>
                <h1>
                    {this.props.title}
                </h1>
                <h2>
                    Edit App.js to get started
                </h2>
            </Container>
        )
    }
}

App.propTypes = {
  title: PropTypes.string.isRequired
};

export default App;
