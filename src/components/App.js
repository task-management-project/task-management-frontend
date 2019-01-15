import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Landing from './Landing'
import SignUp from './SignUp'
import SignIn from './SignIn'
import SplashToggle from './SplashToggle'
import MemberDashboard from './MemberDashboard'
import ManagerDashboard from './ManagerDashboard'
import ManagerSelectTeam from './ManagerSelectTeam';
import MemberTaskForm from './MemberTaskForm'

export default function App(){
  return (
  <BrowserRouter>
      <div>
        <Switch>
          <Route exact path='/' component={ Landing }/>
          <Route exact path='/signup' component={ SignUp } />
          <Route exact path='/signin' component={ SignIn } />
          <Route exact path='/toggle' component={ SplashToggle } />
          <Route exact path='/memberdash' component={ MemberDashboard } />
          <Route exact path='/managerdash' component={ ManagerDashboard } />
          <Route exact path='/managerselectteam' component={ ManagerSelectTeam} />
          <Route exact path='/membertaskform' component={ MemberTaskForm} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}


