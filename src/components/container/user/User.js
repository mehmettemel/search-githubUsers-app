import { Button, Card, Col, Row } from 'antd'
import Avatar from 'antd/lib/avatar/avatar'
import Text from 'antd/lib/typography/Text'
import React, { useContext } from 'react'
import { GithubContext } from '../../../context/context'
import { Typography } from 'antd'
import { blue, grey, purple, volcano } from '@ant-design/colors'
import { IoBusiness, IoLocationSharp, IoLink } from 'react-icons/io5'
const { Title } = Typography
function User() {
  const { githubUser } = useContext(GithubContext)
  const {
    avatar_url,
    html_url,
    name,
    company,
    blog,
    bio,
    location,
    twitter_username,
  } = githubUser

  console.log(name)
  return (
    <Row style={{ minHeight: '230px' }}>
      <Card>
        <Row align='middle' justify='start'>
          <Avatar size={64} src={avatar_url} alt={name} />
          <div style={{ marginLeft: '15px' }}>
            <Title level={3}>{name}</Title>
            <Text>@{twitter_username || 'twitter'}</Text>
          </div>
          <Button
            style={{
              margin: '1em auto',
            }}
            type='primary'
            shape='round'
            size='large'
          >
            <a href={html_url}>Follow</a>
          </Button>
        </Row>
        <Row>
          <Text style={{ marginTop: '1em' }} strong>
            {bio}
          </Text>
        </Row>
        <Row align='middle' style={{ marginTop: '.5em' }}>
          <Text
            style={{
              marginRight: '1em',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <IoBusiness size='1.2em' style={{ marginRight: '5px' }} />
            {company || 'No Company'}
          </Text>
          <Text
            style={{
              marginRight: '1em',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <IoLocationSharp size='1.2em' style={{ marginRight: '5px' }} />
            {location || 'No Location'}
          </Text>
          <Row>
            <Text>
              <a
                href={`${blog}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  textOverflow: 'ellipsis',
                }}
              >
                <IoLink size='1.2em' style={{ marginRight: '5px' }} />
                {blog}
              </a>
            </Text>
          </Row>
        </Row>
      </Card>
    </Row>
  )
}

export default User
