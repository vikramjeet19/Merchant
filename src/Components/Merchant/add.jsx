import React from 'react';
import { Container, Form, Col, Button } from 'react-bootstrap';

class add extends React.Component {
    render() {
        return (<Container>
            <Form style={{ marginTop: '50px' }}>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter username" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </Form.Row>
                <Form.Group controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="1234 Main St" />
                </Form.Group>
                <Form.Row>
                    <Form.Group as={Col} controlId="city">
                        <Form.Label>City</Form.Label>
                        <Form.Control />
                    </Form.Group>
                    <Form.Group as={Col} controlId="state">
                        <Form.Label>State</Form.Label>
                        <Form.Control />
                    </Form.Group>
                    <Form.Group as={Col} controlId="zip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="select">
                            <option>Goods</option>
                            <option>Advertising Services</option>
                            <option>Computer</option>
                            <option>Antique Reproductions</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId="status">
                        <Form.Label>Status</Form.Label>
                        <Form.Control as="select">
                            <option>Active</option>
                            <option>Deactive</option>
                        </Form.Control>
                    </Form.Group>
                </Form.Row>
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
        </Container>)
    }
}
export default add;
