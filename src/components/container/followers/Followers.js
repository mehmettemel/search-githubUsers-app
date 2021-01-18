import { Card, Col, Row } from 'antd'
import Title from 'antd/lib/skeleton/Title'
import Text from 'antd/lib/typography/Text'
import React, { useContext } from 'react'
import { GithubContext } from '../../../context/context'
import 'antd/dist/antd.css'
import '../../../index.css'
import { List, Avatar } from 'antd'
import { Typography } from 'antd'

function Followers() {
  const { Title } = Typography
  const { followers } = useContext(GithubContext)

  return (
    <Card style={{ maxHeight: '230px', overflowY: 'scroll' }}>
      <Title level={5}>Followers</Title>
      <List
        itemLayout='horizontal'
        dataSource={followers}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={item.avatar_url} />}
              title={<a href={item.html_url}>{item.login}</a>}
              description={item.html_url}
            />
          </List.Item>
        )}
      />
    </Card>
  )
}

export default Followers
