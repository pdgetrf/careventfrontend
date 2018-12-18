import React, { Component } from 'react'
import { Layout } from 'antd'
import Header from '../../components/Header'
import EventList from './EventList'
import ImagesList from './ImagesList'

const { Content } = Layout

class Events extends Component {
  render() {
    return (
      <Layout>
        <Header />
        <Content>
          <EventList />
          <ImagesList />
        </Content>
      </Layout>
    )
  }
}

export default Events
