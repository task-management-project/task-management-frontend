import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Landing from './components/Landing'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'

export default function App(){
  return (
  <BrowserRouter>
      <div>
        <Switch>
          <Route exact path='/' component={ Landing }/>
          <Route exact path='/signup' component={ SignUp } />
          <Route exact path='/signin' component={ SignIn } />
        </Switch>
      </div>
    </BrowserRouter>
  )
}


