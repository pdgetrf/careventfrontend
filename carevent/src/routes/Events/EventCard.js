import React, { Component } from 'react'
import { Card } from 'antd'
import moment from 'moment'
import style from '../index.less'

const { Meta } = Card

class EventCard extends Component {
  render() {
    const { event } = this.props
    return (
      <div className={style.eventCard}>
        <Card
          hoverable
          style={{ width: 300 }}
          bordered={false}
          cover={
            <img
              style={{ height: 240 }}
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          }
        >
          <div className={style.cardFooter}>
            <div>
              {event.name} <em>{event.host}</em>
            </div>
            <div>
              {event.description} <em>{event.venue}</em>
            </div>
            <div>{moment(event.date).format('YYYY-MM-DD HH:mm')}</div>
          </div>
        </Card>
      </div>
    )
  }
}

export default EventCard
