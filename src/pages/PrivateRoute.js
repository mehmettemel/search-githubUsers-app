import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { Redirect, Route } from 'react-router-dom'

function PrivateRoute({ children, ...rest }) {
  const { isAuthenticated, user } = useAuth0()
  const isUser = isAuthenticated && user
  return (
    <Route
      {...rest}
      render={() => {
        return isUser ? children : <Redirect to='/login'></Redirect>
      }}
    ></Route>
  )
}

export default PrivateRoute
