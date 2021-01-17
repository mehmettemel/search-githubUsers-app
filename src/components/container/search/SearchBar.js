import { Button, Col, Input, Alert, Row } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import React, { useContext, useState } from 'react'
import { GithubContext } from '../../../context/context'

function SearchBar() {
  const { Search } = Input
  const [user, setUser] = useState('')
  const { requests, error, searchGithubUser, isLoading } = useContext(
    GithubContext
  )

  //get things from global context

  const onSearch = (value) => {
    setUser(value)
    // console.log('userr', user)
    if (user) {
      searchGithubUser(user)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (user) {
      // more logic coming up soon
      searchGithubUser(user)
      //optional
      // setUser('');
    }
  }

  return (
    <>
      <Row align='middle' justify='center' style={{ marginTop: '2em' }}>
        <Col>
          <form onSubmit={handleSubmit}>
            <Row>
              <Input
                style={{ width: 200 }}
                placeholder='Enter Github User'
                allowClear
                onChange={(e) => setUser(e.target.value)}
              />
              <Button
                type='primary'
                icon={<SearchOutlined />}
                htmlType='submit'
                disabled={requests > 0 && !isLoading ? false : true}
              >
                Search
              </Button>
            </Row>
            {error.show && <Alert message={`${error.msg}`} type='error' />}
          </form>
          {/* <Search
          placeholder='Enter Github user'
          allowClear
          enterButton='Search'
          size='large'
          onSearch={onSearch}
          disabled={requests > 0 ? false : true}
        /> */}
        </Col>
      </Row>
      <Row align='middle' justify='center'>
        <h3>Request Limit:{requests}/60</h3>
      </Row>
    </>
  )
}

export default SearchBar
