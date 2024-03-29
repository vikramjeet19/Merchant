import React from 'react';
import { Table, Container, Button, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faPlusCircle, faHistory } from '@fortawesome/free-solid-svg-icons';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


class List extends React.Component {

    historyHandler = (id) => {
        this.props.history.push({
            pathname:'/history',
            id:id
        })
    }
    addNewHandler = (time) => {
        this.props.history.push({
            pathname:'/add',
            time:time
        })
    }
    editHandler = (id,time) => {
        this.props.history.push({
            pathname: '/add',
            data: id,
            time:time
        })
    }
    timer = () => {
        let timeStamp = new Date();
        let date = timeStamp.getFullYear() + '-' + (timeStamp.getMonth() + 1) + '-' + timeStamp.getDate();
        let time = timeStamp.getHours() + ":" + timeStamp.getMinutes() + ":" + timeStamp.getSeconds();
        return {date,time}
    }
    render() {
        return (<Container style={{ marginTop: '20px' }}>
            <Row>
                <FontAwesomeIcon
                    onClick={()=>this.addNewHandler(this.timer())}
                    style={{ marginTop: '20px', height: '30px', width: '30px', cursor: 'pointer' }}
                     icon={faPlusCircle} />
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
                    {this.props.reduxState && this.props.reduxState.length !== 0 ? <tbody>
                        {this.props.reduxState.map(id => (
                            <tr key={id.username}>
                                <td>{id.username}</td>
                                <td>{id.description}</td>
                                <td>{id.state}</td>
                                <td>{id.city}</td>
                                <td>{id.status}</td>
                                <td>{id.status === 'Active' ?
                                    <Button onClick={() => this.props.onStatus(id.username,this.timer())}
                                     variant="warning">Deactivate</Button> :
                                    <Button onClick={() => this.props.onStatus(id.username,this.timer())}
                                     variant="success">Activate</Button>}
                                </td>
                                <td>
                                    <FontAwesomeIcon onClick={() => this.props.onDelete(id.username)}
                                        style={{ marginLeft: '20px', cursor: 'pointer', width: '20px', height: '20px' }}
                                        icon={faTrash} />
                                    <FontAwesomeIcon onClick={() => this.editHandler(id,this.timer())}
                                        style={{ marginLeft: '20px', cursor: 'pointer', width: '20px', height: '20px' }}
                                        icon={faEdit} />
                                    <FontAwesomeIcon onClick={() => this.historyHandler(id.username)}
                                        style={{ marginLeft: '20px', cursor: 'pointer', width: '20px', height: '20px' }}
                                        icon={faHistory} />
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
        reduxState: state.merchants,
        timeStamp:state.timeStamp       
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onStatus: (username,time) => dispatch({ type: 'status', payload: {username,time} }),
        onDelete: (username) => dispatch({ type: 'delete', payload: username })
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(List));