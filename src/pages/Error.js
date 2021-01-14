import React from 'react'
import { Result, Button } from 'antd'
import { Link } from 'react-router-dom'
import Container from '../components/container/container/Container'
function Error() {
  return (
    <Container>
      <Result
        type='flex'
        status='404'
        title='404'
        subTitle='Sorry, the page you visited does not exist.'
        style={{
          fontWeight: 'bold',
          flexDirection: 'column',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        extra={
          <Button
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            type='primary'
          >
            <Link to='/'>Back home</Link>
          </Button>
        }
      />
    </Container>
  )
}

export default Error
