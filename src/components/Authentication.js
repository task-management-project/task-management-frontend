import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

const Authentication = props => {
  const {
    authentication: {
      pending,
      user
    },
    path,
    component
  } = props

  if(pending && !user) {
    return <div>Loading...</div> // Alter to change loading page behavior
  } else if(user) {
    return <Route path={path} component={component} /> // Updates as path and component change.
  } else {
    return <Redirect to='/'/> //Kicks the user back to the main page to login.
  }
}

const mapStateToProps = state => ({
  authentication: state.authentication
})

export default connect(mapStateToProps)(Authentication)