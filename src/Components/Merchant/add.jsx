import React from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import { Container, Form, Col, Button } from 'react-bootstrap';

class add extends React.Component {
    state = {
        username: '',
        password: '',
        address: '',
        state: '',
        city: '',
        zip: '',
        status: '',
        description: '',
    }

    changedHandler = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }
    onSumbitHandler = () => {
        this.props.onAdd(this.state);
        this.props.history.push('/list');
    }

    render() {
        return (<Container>
            <Form style={{ marginTop: '50px' }}>
                <Form.Row>
                    <Form.Group as={Col} controlId="username">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" onChange={this.changedHandler} placeholder="Enter username" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={this.changedHandler} type="password" placeholder="Password" />
                    </Form.Group>
                </Form.Row>
                <Form.Group controlId="address">
                    <Form.Label>Address</Form.Label>
                    <Form.Control onChange={this.changedHandler} placeholder="1234 Main St" />
                </Form.Group>
                <Form.Row>
                    <Form.Group as={Col} controlId="city">
                        <Form.Label>City</Form.Label>
                        <Form.Control onChange={this.changedHandler} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="state">
                        <Form.Label>State</Form.Label>
                        <Form.Control onChange={this.changedHandler} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="zip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control onChange={this.changedHandler} />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="select" onChange={this.changedHandler}>
                            <option>select..</option>
                            <option>Goods</option>
                            <option>Advertising Services</option>
                            <option>Computer</option>
                            <option>Antique Reproductions</option>
                        </Form.Control >
                    </Form.Group>
                    <Form.Group as={Col} controlId="status">
                        <Form.Label>Status</Form.Label>
                        <Form.Control onChange={this.changedHandler} as="select">
                            <option>select..</option>
                            <option>Active</option>
                            <option>Deactive</option>
                        </Form.Control>
                    </Form.Group>
                </Form.Row>
                <Button variant="primary" onClick={this.onSumbitHandler}>Submit</Button>
            </Form>
        </Container>)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAdd: (data) => dispatch({ type: 'add', payload: data })
    };
}

export default  withRouter(connect(null, mapDispatchToProps)(add));

