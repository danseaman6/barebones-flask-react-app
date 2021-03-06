import React from "react";
import Container from "react-bootstrap/Container";
import "./styles/App.css";
import wretch from "wretch";
import PropTypes from "prop-types";

const App = ({ title }) => (
  <Container className="App">
    <h1>{title}</h1>
    <h2>Edit App.jsx to get started</h2>
  </Container>
);

App.propTypes = {
  title: PropTypes.string.isRequired
};

export default App;
