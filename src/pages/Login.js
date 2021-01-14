import React from 'react'
import Container from '../components/container/container/Container'
import { Button, Col } from 'antd'
import LoginImg from '../assets/login.svg'
function Login() {
  return (
    <Container>
      <Col xs>
        <img style={{ width: '100%' }} src={LoginImg} alt='login image' />
        <Button type='primary' block>
          Click to Login
        </Button>
      </Col>
    </Container>
  )
}

export default Login
