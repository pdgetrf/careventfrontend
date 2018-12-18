import React, { Component } from 'react'
import { connect } from 'dva'
import { Card } from 'antd'
import EventCard from './EventCard'

class EventList extends Component {
  componentDidMount() {
    const { dispatch } = this.props

    dispatch({
      type: 'event/fetch',
    })
  }

  render() {
    const { eventList } = this.props
    return (
      <div>
        <Card title="Upcoming Events" style={{ margin: 8 }} bordered={false}>
          {eventList.map((event) => (
            <EventCard key={event.name} event={event} />
          ))}
        </Card>
      </div>
    )
  }
}

export default connect(({ event }) => ({
  eventList: event.eventList,
}))(EventList)
