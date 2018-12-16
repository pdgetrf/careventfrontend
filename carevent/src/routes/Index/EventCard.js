import React, { Component } from "react";
import { Card } from "antd";
import style from "../index.less";

const { Meta } = Card;

class EventCard extends Component {
  render() {
    const { event } = this.props;
    return (
      <div className={style.eventCard}>
        <Card
          hoverable
          style={{ width: 300 }}
          cover={
            <img
              style={{ height: 240 }}
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          }
        >
          <p>
            {event.name} <em>{event.host}</em>
          </p>
          <p>
            {event.description} <em>{event.venue}</em>
          </p>
          <p>{event.date}</p>
        </Card>
      </div>
    );
  }
}

export default EventCard;
