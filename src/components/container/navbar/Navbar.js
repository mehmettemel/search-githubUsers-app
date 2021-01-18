import Layout, { Header } from 'antd/lib/layout/layout'
import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import Avatar from 'antd/lib/avatar/avatar'
import Title from 'antd/lib/skeleton/Title'
import Text from 'antd/lib/typography/Text'
import { LoginOutlined, LogoutOutlined } from '@ant-design/icons'
import { Button, Row, Space } from 'antd'
function Navbar() {
  const {
    isAuthenticated,
    loginWithRedirect,
    logout,
    user,
    isLoading,
  } = useAuth0()
  const isUser = isAuthenticated && user

  return (
    <Layout>
      <Header
        style={{
          backgroundColor: '#FBF8F8',
          boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
        }}
      >
        <Row align='middle' justify='center' style={{ height: '100%' }}>
          <Space align='center'>
            {isUser && user.picture && (
              <Avatar src={user.picture} alt={user.name} />
            )}
            {isUser && user.name && (
              <Title level={4}>
                Welcome,<Text strong>{user.name.toUpperCase()}</Text>
              </Title>
            )}
            {isUser ? (
              <Button
                onClick={() => {
                  logout({ returnTo: window.location.origin })
                }}
                type='primary'
                icon={<LogoutOutlined />}
                size='large'
              >
                Logout
              </Button>
            ) : (
              <Button
                onClick={loginWithRedirect}
                type='primary'
                icon={<LoginOutlined />}
                size='large'
              >
                Login
              </Button>
            )}
          </Space>
        </Row>
      </Header>
    </Layout>
  )
}

export default Navbar
