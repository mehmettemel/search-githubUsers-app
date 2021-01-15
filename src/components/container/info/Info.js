import React, { useContext } from 'react'
import { GithubContext } from '../../../context/context'
import { Row, Col, Card } from 'antd'
import { GoRepo, GoGist } from 'react-icons/go'
import { FiUsers, FiUserPlus } from 'react-icons/fi'
function Info() {
  const { githubUser } = useContext(GithubContext)
  const { public_repos, followers, following, public_gists } = githubUser
  const items = [
    {
      id: 1,
      icon: <GoRepo className='icon' />,
      label: 'repos',
      value: public_repos,
      color: 'pink',
    },
    {
      id: 2,
      icon: <FiUsers className='icon' />,
      label: 'followers',
      value: followers,
      color: 'green',
    },
    {
      id: 3,
      icon: <FiUserPlus className='icon' />,
      label: 'following',
      value: following,
      color: 'purple',
    },
    {
      id: 4,
      icon: <GoGist className='icon' />,
      label: 'gists',
      value: public_gists,
      color: 'brown',
    },
  ]
  return (
    <Row style={{ width: '100%' }} align='middle' justify='center'>
      {items.map((item) => {
        return <Item key={item.id} {...item} />
      })}
    </Row>
  )
}

const Item = ({ icon, label, value, color }) => {
  return (
    <Card
      hoverable
      style={{
        width: 200,
        display: 'flex',
        margin: '1em',
        fontWeight: '600',
      }}
    >
      <span style={{ fontSize: '2em', color: `${color}` }}>{icon}</span>
      <Row
        style={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <h3 style={{ marginBottom: '0' }}>{value}</h3>
        <p style={{ marginLeft: '5px', marginBottom: '0' }}>{label}</p>
      </Row>
    </Card>
  )
}

export default Info
