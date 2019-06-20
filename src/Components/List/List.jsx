import React from 'react';
import { Table, Container, Button,Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash , faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import {withRouter} from 'react-router-dom';
class List extends React.Component {
    state={
        data:[]
    }
    componentDidMount(){
        const merchants = JSON.parse(localStorage.getItem('merchant'));
        if(merchants && merchants.length !== 0){
            this.setState({data:merchants})
        }
        else{
            return;
        }
    }
    addNewHandler=()=>{
        this.props.history.push('/add')
    }

    detailHandler=()=>{
        console.log('detailhandler clicked')
    }
    render() {
        return (<Container style={{ marginTop: '20px' }}>
            <Row>
            <FontAwesomeIcon 
            onClick={this.addNewHandler}
            style={{ marginTop:'20px', height:'30px', width:'30px' , cursor:'pointer'}} icon={faPlusCircle} /> 
            </Row>
            <br/>
            <Row>
            <Table responsive>
                <thead>
                    <tr>
                        <th>Usernmae</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Operations</th>
                        
                    </tr>
                </thead>
               {this.state.data.length !== 0 ? <tbody>
                    {this.state.data.map(key=>(
                        <tr onClick={this.detailHandler} >
                        <td>{key.username}</td>
                        <td>{key.description}</td>
                        <td>{key.status}</td>
                        <td><Button variant="success">Activated</Button>
                            <FontAwesomeIcon onClick={this.editHandler} style={{ marginLeft: '20px', cursor: 'pointer', width: '20px', height: '20px' }} icon={faEdit} />
                            <FontAwesomeIcon onClick={this.deleteHandler} style={{ marginLeft: '20px', cursor: 'pointer', width: '20px', height: '20px' }} icon={faTrash} />
                        </td>
                    </tr>
                    ))}
                </tbody> :null}
                
            </Table>
            </Row>
        </Container>)
    }
}

export default withRouter(List);