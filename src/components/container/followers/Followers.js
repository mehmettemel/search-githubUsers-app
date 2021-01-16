import { Card, Col, Row } from 'antd'
import Avatar from 'antd/lib/avatar/avatar'
import Title from 'antd/lib/skeleton/Title'
import Text from 'antd/lib/typography/Text'
import React, { useContext } from 'react'
import { GithubContext } from '../../../context/context'

function Followers() {
  const { followers } = useContext(GithubContext)
  console.log(followers)
  return (
    <Row style={{ maxHeight: '230px', overflowY: 'scroll' }}>
      <Card style={{ width: '100%' }}>
        <Text strong>Followers</Text>
        {followers.map((follower, index) => {
          const { avatar_url: img, html_url, login } = follower
          return (
            <Row
              key={index}
              type='flex'
              align='middle'
              style={{ marginTop: '15px' }}
            >
              <Col xs={3} xl={2} l={2}>
                <Avatar size='large' src={img} alt={login}></Avatar>
              </Col>
              <Col offset={1} span={12}>
                <Text style={{ width: '100%', display: 'block' }}>{login}</Text>
                <a href={html_url}>{html_url}</a>
              </Col>
            </Row>
          )
        })}
      </Card>
    </Row>
  )
}

export default Followers
