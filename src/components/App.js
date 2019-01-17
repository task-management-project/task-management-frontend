import React, {Component} from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import Landing from './Landing'
import SignUp from './SignUp'
import SignIn from './SignIn'
import TopNav from './TopNav'
import SplashToggle from './SplashToggle'
import MemberDashboard from './MemberDashboard'
import ManagerDashboard from './ManagerDashboard'
import ManagerSelectTeam from './ManagerSelectTeam';
import MemberTaskForm from './MemberTaskForm'
import MemberFocus from './MemberFocus'
import AuthenticatedRoute from './Authentication'
import { setAuthentication } from '../actions/authentication'
import request from '../utils/request';
import { Hero, Button } from 'react-bulma-components'

class App extends Component {
  componentDidMount(){
    request('/login')
    .then(response => this.props.setAuthentication(response.data))
    .catch(err => this.props.setAuthentication(null))
  }
  render() {
  return (
    <Hero class = "hero is-medium is-primary is-bold" size="full-height">
    <BrowserRouter>
    <React.Fragment>
      <TopNav />
      
      <Hero.Body className="hero_body">
        <div>
          <Switch>
            <Route path='/signup' component={ SignUp } />
            <Route path='/signin' component={ SignIn } />
            <AuthenticatedRoute path='/toggle' component={ SplashToggle } />
            <AuthenticatedRoute path='/memberdash' component={ MemberDashboard } />
            <AuthenticatedRoute path='/managerdash' component={ ManagerDashboard } />
            <AuthenticatedRoute path='/managerselectteam' component={ ManagerSelectTeam} />
            <AuthenticatedRoute path='/membertaskform' component={ MemberTaskForm} />
            <AuthenticatedRoute path='/focus' component={ MemberFocus} />
            <Route path='/' component={ Landing }/>
          </Switch>
        </div>
      
      </Hero.Body>
      
      <Hero.Footer>

      </Hero.Footer>
      </React.Fragment>
      </BrowserRouter>
    </Hero>
    )
  }
}

// const mapStateToProps = (state) => ({authentication: state.authentication})

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    setAuthentication: setAuthentication
  }, dispatch)

export default connect(null, mapDispatchToProps)(App)


