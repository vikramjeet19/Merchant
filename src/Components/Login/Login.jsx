import React from 'react';
import './Login.css';
import { Button, Dropdown, DropdownButton, Row, Col } from 'react-bootstrap';

class Login extends React.Component {
    state = {
        username: '',
        password: '',
        description: '',
        status: '',
        login: false
    }

    DescriptionHander = (data) => {
        this.setState({description:data})
       
    }
    statusHandler=(data)=>{
        this.setState({status:data})  
    }
    changeHandler = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }
    submitHandler = event => {
        event.preventDefault();
       
    }
    render() {
        
        return (<div className='block'>
            <form >
                <label style={{ position: 'static' }}>Username </label>
                <input className='a' type="text" id='username' placeholder='Enter User Name'
                    onChange={this.changeHandler} />
                <label style={{ position: 'static' }}>Password </label>
                <input className='a' type="password" id='password' placeholder='Password'
                    onChange={this.changeHandler} />
                <Row  >
                    <Col>
                        <DropdownButton style={{ marginTop: '20px' }}
                            variant='info'
                            id="description" title="Description">
                            <Dropdown.Item onClick={() => this.DescriptionHander('Goods')} id='description'>Goods</Dropdown.Item>
                            <Dropdown.Item onClick={() => this.DescriptionHander('Advertising Services')} id='description'>Advertising Services</Dropdown.Item>
                            <Dropdown.Item onClick={() => this.DescriptionHander('Computer')}  id='description'>Computer</Dropdown.Item>
                            <Dropdown.Item onClick={() => this.DescriptionHander('Antique Reproductions')}  id='description'>Antique Reproductions</Dropdown.Item>
                        </DropdownButton></Col>
                    <Col>
                        <DropdownButton style={{ marginTop: '20px', }}
                            variant='info'
                            id="status" title="Status">
                            <Dropdown.Item onClick={() => this.statusHandler('Active')} id='status'>Active</Dropdown.Item>
                            <Dropdown.Item onClick={() => this.statusHandler('Deactive')}  id='status'>Deactive</Dropdown.Item>

                        </DropdownButton>
                    </Col>
                </Row>
                <Button onClick={this.submitHandler} style={{ margin: '20px', color: '#ccc' }}
                    variant="outline-info">Login</Button>
            </form>
        </div>)
    }
}

export default Login;
