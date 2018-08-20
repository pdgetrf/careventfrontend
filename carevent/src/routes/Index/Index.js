import React, { Component } from 'react'
import { connect } from 'dva'
import { Layout } from 'antd'
import Header from '../../components/Header'

const { Content } = Layout

class Index extends Component {
  render() {
    return (
      <Layout>
        <Header />
        <Content />
      </Layout>
    )
  }
}

export default connect()(Index)
