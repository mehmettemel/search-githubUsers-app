import './App.css'
import Dashboard from './pages/Dashboard'
import Error from './pages/Error'
import Login from './pages/Login'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PrivateRoute from './pages/PrivateRoute'
import { Spin } from 'antd'
import { useAuth0 } from '@auth0/auth0-react'

function App() {
  const { isLoading, error } = useAuth0()
  if (isLoading) {
    return <Spin />
  }
  if (error) {
    return <Error />
  }
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path='/'>
          <Dashboard />
        </PrivateRoute>
        <Route path='/login'>
          <Login />
        </Route>
        <Route exact path='*'>
          <Error />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
