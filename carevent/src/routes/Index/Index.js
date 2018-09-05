import React, { Component } from 'react'
import { connect } from 'dva'
import { Layout } from 'antd'
import Header from '../../components/Header'

const { Content } = Layout

class Index extends Component {
  componentDidMount() {
    const { dispatch } = this.props

    dispatch({
      type: 'event/fetch',
    })
  }

  render() {
    return (
      <Layout>
        <Header />
        <Content />
      </Layout>
    )
  }
}

export default connect(({ event }) => ({
  eventList: event.eventList,
}))(Index)
