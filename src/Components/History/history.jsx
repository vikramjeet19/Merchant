import React from 'react';
import { connect } from 'react-redux';
import { Container, Table, Row, Col } from 'react-bootstrap';
const history = (props) => {

    let id = props.history.location.id;

    return (<Container>
        {id === props.timestamp.name ?
            <Row>
                <Col> <Table responsive>
                    <tbody>
                        {props.timestamp.operation.map(id => (<tr >
                            <td>{id}</td>
                        </tr>))}
                    </tbody>
                </Table> </Col>
                <Col> <Table responsive>
                    <tbody>
                        {props.timestamp.time.map(id => (<tr key={id}>
                            <td>Date : {id.date}  Time : {id.time}</td>
                        </tr>))}


                    </tbody>
                </Table> </Col>
            </Row>
            : props.history.push('/list')}
    </Container>)
}

const mapStateToProps = state => {
    return {
        timestamp: state.user
    }
}

export default connect(mapStateToProps)(history);
