import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Container, Form, Col, Button } from 'react-bootstrap';

class add extends React.Component {
    state = {
        username: '',
        address: '',
        state: '',
        city: '',
        zip: '',
        status: '',
        description: '',
        edit: false
    }
    componentDidMount() {
        if (this.props.history.location.data && this.props.history.location.data.length !== 0) {
            let data = this.props.history.location.data;
            this.setState({
                edit: true,
                username: data.username,
                state: data.state,
                city: data.city,
                zip: data.zip,
                status: data.status,
                description: data.description,
                address: data.address,
            })
        }
        return;
    }
    edittedHandler = () => {
        this.props.onEdit(this.state);
        this.setState({ edit: false });
        this.props.history.push('/list')
    }
    changedHandler = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }
    onSumbitHandler = () => {
        let time = this.props.history.location.time;
        this.props.onAdd(this.state, time);
        this.props.history.push('/list');
    }

    render() {
        return (<Container>
            <Form style={{ marginTop: '50px' }}>
                <Form.Row>
                    <Form.Group as={Col} controlId="username">
                        <Form.Label>Username</Form.Label>
                        {this.state.edit === true ? <Form.Control type="text" disabled value={this.state.username}
                            onChange={this.changedHandler} placeholder="Enter username" /> :
                            <Form.Control type="text" value={this.state.username}
                                onChange={this.changedHandler} placeholder="Enter username" />}
                    </Form.Group>
                </Form.Row>
                <Form.Group controlId="address">
                    <Form.Label>Address</Form.Label>
                    {this.state.edit === true ? <Form.Control value={this.state.address}
                        onChange={this.changedHandler} /> :
                        <Form.Control value={this.state.address}
                            onChange={this.changedHandler} placeholder="1234 Main St" />}
                </Form.Group>
                <Form.Row>
                    <Form.Group as={Col} controlId="city">
                        <Form.Label>City</Form.Label>
                        {this.state.edit === true ? <Form.Control value={this.state.city}
                            onChange={this.changedHandler} /> :
                            <Form.Control value={this.state.city}
                                onChange={this.changedHandler} />}

                    </Form.Group>
                    <Form.Group as={Col} controlId="state">
                        <Form.Label>State</Form.Label>
                        {this.state.edit === true ? <Form.Control value={this.state.state}
                            onChange={this.changedHandler} /> :
                            <Form.Control value={this.state.state}
                                onChange={this.changedHandler} />}

                    </Form.Group>
                    <Form.Group as={Col} controlId="zip">
                        <Form.Label>Zip</Form.Label>
                        {this.state.edit === true ? <Form.Control value={this.state.zip}
                            onChange={this.changedHandler} /> :
                            <Form.Control value={this.state.zip}
                                onChange={this.changedHandler} />}

                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="description">
                        <Form.Label>Description</Form.Label>
                        {this.state.edit === true ? <Form.Control as="select" value={this.state.description} onChange={this.changedHandler}>
                            <option>select..</option>
                            <option>Goods</option>
                            <option>Advertising Services</option>
                            <option>Computer</option>
                            <option>Antique Reproductions</option>
                        </Form.Control > :
                            <Form.Control as="select" value={this.state.description} onChange={this.changedHandler}>
                                <option>select..</option>
                                <option>Goods</option>
                                <option>Advertising Services</option>
                                <option>Computer</option>
                                <option>Antique Reproductions</option>
                            </Form.Control >}
                    </Form.Group>
                    <Form.Group as={Col} disabled controlId="status">
                        <Form.Label>Status</Form.Label>
                        {this.state.edit === true ? <Form.Control disabled as="select">
                            <option>select..</option>
                            <option>Active</option>
                            <option>Deactive</option>
                        </Form.Control> :
                            <Form.Control as="select" onChange={this.changedHandler}>
                                <option>select..</option>
                                <option>Active</option>
                                <option>Deactive</option>
                            </Form.Control>}
                    </Form.Group>
                </Form.Row>

                {this.state.edit === true ? <Button variant="success" onClick={this.edittedHandler}>Submit</Button> :
                    <Button variant="primary" onClick={this.onSumbitHandler}>Submit</Button>}
            </Form>

        </Container>)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAdd: (data, time) => dispatch({ type: 'add', payload: { data, time } }),
        onEdit: (data) => dispatch({ type: 'edit', payload: data })
    };
}

export default withRouter(connect(null, mapDispatchToProps)(add));

