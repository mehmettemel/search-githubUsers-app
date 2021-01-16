import { Col, Row } from 'antd'

import React, { useContext } from 'react'
import Followers from '../components/container/followers/Followers'
import Info from '../components/container/info/Info'
import Repos from '../components/container/repos/Repos'
import SearchBar from '../components/container/search/SearchBar.js'
import User from '../components/container/user/User'
import { GithubContext } from '../context/context'

function Dashboard() {
  const { repos } = useContext(GithubContext)
  return (
    <div>
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
    </div>
  )
}

export default Dashboard
