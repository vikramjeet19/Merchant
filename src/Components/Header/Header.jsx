import React from 'react';
import { Navbar, Button } from 'react-bootstrap'
import { withRouter } from 'react-router-dom';

class Header extends React.Component {

  LogoutHandler = () => {
    localStorage.clear();
    this.props.history.push('/')
  }
  render() {
    return (<>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand style={{ cursor: 'pointer' }} onClick={this.Home} >Merchant</Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Button variant="warning" onClick={this.LogoutHandler}>Logout</Button>
        </Navbar.Collapse>
      </Navbar>
    </>)
  }
}
export default withRouter(Header);