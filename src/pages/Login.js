import React from 'react'
import Container from '../components/container/container/Container'
import { Button, Col } from 'antd'
import LoginImg from '../assets/login.svg'
import { useAuth0 } from '@auth0/auth0-react'

function Login() {
  const { loginWithRedirect } = useAuth0()
  return (
    <Container>
      <Col xs>
        <img style={{ width: '100%' }} src={LoginImg} alt='login image' />
        <Button onClick={loginWithRedirect} type='primary' block>
          Click to Login / SignUp
        </Button>
      </Col>
    </Container>
  )
}

export default Login
