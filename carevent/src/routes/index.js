import React, { Component } from 'react'
import { connect } from 'dva'
import { Layout } from 'antd'

const { Content } = Layout

class Index extends Component {
  render() {
    return (
      <Layout>
        <div>Index pages</div>
      </Layout>
    )
  }
}

export default Index
