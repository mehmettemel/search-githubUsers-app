import { Col, Row, Skeleton, Spin } from 'antd'
import React, { useContext } from 'react'
import Followers from '../components/container/followers/Followers'
import Info from '../components/container/info/Info'
import Repos from '../components/container/repos/Repos'
import SearchBar from '../components/container/search/SearchBar.js'
import User from '../components/container/user/User'
import { GithubContext } from '../context/context'
import Navbar from '../components/container/navbar/Navbar'

function Dashboard() {
  const { isLoading } = useContext(GithubContext)
  if (isLoading) {
    return (
      <main>
        <Navbar />
        <SearchBar />
        <Row align='middle' justify='center'>
          <Spin size='large' />
        </Row>
        <Row gutter={[24, 24]} style={{ height: '300px' }}>
          <Col xl={12} xs={24} s={24}>
            <Skeleton active />
          </Col>
          <Col xl={12} xs={24} s={24}>
            <Skeleton active />
          </Col>
        </Row>
        <Row gutter={[24, 24]}>
          <Col xl={12} xs={24} s={24}>
            <Skeleton active />
          </Col>
          <Col xl={12} xs={24} s={24}>
            <Skeleton active />
          </Col>
        </Row>
      </main>
    )
  }
  return (
    <main>
      <Navbar />
      <SearchBar />
      <Info />
      <Row style={{ justifyContent: 'center' }} gutter={[16, 24]}>
        <Col xs={24} l={12} xl={8}>
          <User />
        </Col>
        <Col xs={24} l={12} xl={8}>
          <Followers />
        </Col>
      </Row>
      <Repos />
    </main>
  )
}

export default Dashboard
