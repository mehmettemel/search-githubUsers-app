import Layout, { Header } from 'antd/lib/layout/layout'
import React from 'react'

function Navbar() {
  return (
    <Layout>
      <Header
        style={{
          backgroundColor: '#FBF8F8',
          boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
        }}
      />
    </Layout>
  )
}

export default Navbar
