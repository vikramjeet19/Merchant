import React from 'react';
import { Table, Container, Button, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
class List extends React.Component {
    state = {
        data: []
    }
    componentDidMount() {

    }
    addNewHandler = () => {
        this.props.history.push('/add')
    }

    detailHandler = () => {
        console.log('detailhandler clicked')
    }
    render() {
        console.log(this.props.vicky)
        return (<Container style={{ marginTop: '20px' }}>
            <Row>
                <FontAwesomeIcon
                    onClick={this.addNewHandler}
                    style={{ marginTop: '20px', height: '30px', width: '30px', cursor: 'pointer' }} icon={faPlusCircle} />
            </Row>
            <br />
            <Row>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>Usernmae</th>
                            <th>Description</th>
                            <th>State</th>
                            <th>City</th>
                            <th>Status</th>
                            <th>Operations</th>
                            <th>Edit/Delete</th>
                        </tr>
                    </thead>
                    {this.props.vicky && this.props.vicky.length !== 0 ? <tbody>
                        {this.props.vicky.map(id => (
                            <tr key={id.username}>
                                <td>{id.username}</td>
                                <td>{id.description}</td>
                                <td>{id.state}</td>
                                <td>{id.city}</td>
                                <td>{id.status}</td>
                                <td>{id.status === 'Active' ?
                                    <Button onClick={()=>this.props.onStatus(id.username)} variant="warning">Deactivate</Button> :
                                    <Button onClick={()=>this.props.onStatus(id.username)} variant="success">Activate</Button>}
                                </td>
                                <td>
                                    <FontAwesomeIcon onClick={()=>this.props.onDelete(id.username)}
                                        style={{ marginLeft: '20px', cursor: 'pointer', width: '20px', height: '20px' }}
                                        icon={faTrash} />
                                    <FontAwesomeIcon onClick={this.deleteHandler}
                                        style={{ marginLeft: '20px', cursor: 'pointer', width: '20px', height: '20px' }}
                                        icon={faEdit} />
                                </td>
                            </tr>
                        ))}
                    </tbody> : null}
                </Table>
            </Row>
        </Container>)
    }
}
const mapStateToProps = state => {
    return {
        vicky: state.merchants
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onStatus: (username) => dispatch({ type: 'status',payload:username }),
        onDelete: (username) => dispatch({type:'delete' , payload:username})
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(List));