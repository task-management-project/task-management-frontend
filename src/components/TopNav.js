import React, { Component } from 'react'
import { Hero, Navbar, Button, Form } from 'react-bulma-components'
import {connect} from 'react-redux'
import { withRouter } from 'react-router'
// import request from '../utils/request'
// import {setAuthentication} from '../actions/authentication'
import { bindActionCreators } from 'redux';


class TopNav extends React.Component {
    state = {
        isOpen: false,
      }
    toggle = () => {
    this.setState({
        isOpen: !this.state.isOpen
    });
    }
    render () {
        return (
            <Hero.Head>
                <Navbar>
                <Navbar.Brand>
                    Task Manager
                </Navbar.Brand>
                <Navbar.Item className="navbtn">
                    <Button className="button is-primary is-inverted is-outlined topbtn">
                    Create
                    </Button>
                    <Button className="button is-primary is-inverted is-outlined topbtn">
                    SignOut
                    </Button>
                </Navbar.Item>
                </Navbar>
            </Hero.Head>
        )
    }
}

function mapStateToProps(state) {
    return {
    //   user: state.auth.user
    }
  }
  
  function mapDispatchToProps(dispatch) {
    return {
    //   userLogout: bindActionCreators(userLogout, dispatch)
    }
  }
  
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TopNav))
  