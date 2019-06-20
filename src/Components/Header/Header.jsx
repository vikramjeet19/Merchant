import React from 'react';
import { Navbar, Button } from 'react-bootstrap'
import { withRouter } from 'react-router-dom';

class Header extends React.Component {
  state={
    user:false
  }

  componentDidMount(){
    let data = JSON.parse(localStorage.getItem('data'));
    if(data && data.length !== 0){
      this.setState({user:true})
    }
  }
  LogoutHandler = () => {
    localStorage.clear();
    this.setState({user:false})
    this.props.history.push('/')
  }
  home = () => {
    this.props.history.push('/list')
  }
  render() {
    return (<>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand style={{ cursor: 'pointer' }} onClick={this.home} >Merchant</Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
         {this.state.user === true ?<Button variant="warning" onClick={this.LogoutHandler}>Logout</Button>
         :<Button variant="warning" onClick={this.LogoutHandler}>Login</Button>} 
        </Navbar.Collapse>
      </Navbar>
    </>)
  }
}
export default withRouter(Header);