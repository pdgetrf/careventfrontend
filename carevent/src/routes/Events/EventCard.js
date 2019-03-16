import React, { Component } from 'react'
import { Card } from 'antd'
import moment from 'moment'
import style from '../index.less'

const { Meta } = Card

class EventCard extends Component {
  render() {
    const { event } = this.props
    console.log({event});
    return (
      <div className={style.eventCard}>
        <div className={style.eventImg}>
          <img src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
            <div class={style.eventDate} >{moment(event.date).format('MMM Do ')}</div>
          </div>
          <div className={style.cardFooter}>
          <h3>{event.name}</h3>
          <h4>{event.venue} - {event.description}</h4>
          <h5>Hosted By: {event.host}</h5>
          </div>
      </div>
    )
  }
}

export default EventCard

