import React from 'react';
import './Login.css';
import { Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

class Login extends React.Component {
    state = {
        username: '',
        password: '',
    }
    componentDidMount() {
        const data = [
            { username: 'vicky@gmail.com', password: 'vicky@@19', name: 'vicky' }]
        localStorage.setItem('data', JSON.stringify(data))
    }
    changeHandler = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }
    submitHandler = event => {
        event.preventDefault();
        let value = JSON.parse(localStorage.getItem('data'));
        if (value[0].username === this.state.username && value[0].password === this.state.password) {
            return this.props.history.push('/list');
        }
        return alert('error')
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
                <Button onClick={this.submitHandler} style={{ margin: '20px', color: '#ccc' }}
                    variant="outline-info">Login</Button>
            </form>
        </div>)
    }
}

export default withRouter(Login);
