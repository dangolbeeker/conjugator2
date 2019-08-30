import React, { Component } from 'react'
import './styles/Name.css';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setUserName } from './actions/userActions';

const Name = ({dispatch}) => {
    let nameInput

    return (
        <div className="Name">
            <h2>Welcome to Conjugator IO, test your spanish speaking skills by taking our verbs challenge</h2><br></br>
            <h3>Registration and Mobile App Coming Soon!</h3><br></br>
            <h3>Quick Start Below by playing a quick and fun French Verb Game!</h3>
            <Form className="Form-Name" onSubmit={e => e.preventDefault()}>
                <Form.Group>
                    <Form.Label>Start By Entering Your Name Below</Form.Label>
                    <Form.Control ref={node => (nameInput = node)} className="Input-Name" type="text" placeholder="Type your name here" />
                </Form.Group>
                <Link to="/game">
                    <Button variant="primary" onClick={e => {
                        let name = nameInput.value !== "" ? nameInput.value : "Stranger";
                        dispatch(setUserName(name))
                    }}>
                Lets Begin
                    </Button>
                </Link>
        </Form>
    </div>
    )
}

export default connect()(Name);

