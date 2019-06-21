import React from 'react';
import {connect} from 'react-redux';
import { Container,Table } from 'react-bootstrap';
const history = () => {
    return (<Container>
        <Table responsive>
            <thead>
                <tr> 
                    <th>Username</th>                  
                    <th>operation</th>
                    <th>TimeStamp</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                </tr>
            </tbody>
        </Table>
    </Container>)
}

const mapStateToProps = state => {
    return {
        vicky: state.merchants
    }
}

export default connect(mapStateToProps)(history);