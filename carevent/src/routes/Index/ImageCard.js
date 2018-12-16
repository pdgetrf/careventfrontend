import React, { Component } from "react";
import { Card } from "antd";
import style from "../index.less";

const { Meta } = Card;

class ImageCard extends Component {
  render() {
    const { image } = this.props;
    return (
      <div className={style.eventCard}>
        <Card
          hoverable
          style={{ width: 300 }}
          cover={
            <img style={{ height: 240 }} alt={image.event} src={image.url} />
          }
        >
          <p>
            {image.event} <em>{image.likecount}</em>
          </p>
        </Card>
      </div>
    );
  }
}

export default ImageCard;
