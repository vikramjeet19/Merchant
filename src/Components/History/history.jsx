import React from 'react';
import { connect } from 'react-redux';
import { Container, Table} from 'react-bootstrap';
class History extends React.Component {
    state = {
        data: []
    }
    componentDidMount() {
        let data = this.props.timestamp;
        let id = this.props.location.id;
        let newArr = data.filter(key => (key.username === id))
        this.setState({ data: newArr })
    }
    render() {
        return (<Container>
            {this.state.data !== null ?
                <Table responsive>
                <thead>
                  <tr>
                    <th>Operation</th>
                    <th>TimeStamp</th>  
                  </tr>
                </thead>
                <tbody>
                 {this.state.data.map(key=>(
                      <tr key={this.state.useranme}>
                      <td>{key.operation}</td>
                      <td>Date : {key.time.date} Time : {key.time.time}</td>
                    </tr>
                 ))}
                  </tbody>
                  </Table>
                : this.props.history.push('/list')}
        </Container>)
    }
}

const mapStateToProps = state => {
    return {
        timestamp: state.timeStamp
    }
}

export default connect(mapStateToProps)(History);
