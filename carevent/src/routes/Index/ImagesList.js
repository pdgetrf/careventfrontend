import React, { Component } from "react";
import { connect } from "dva";
import { Card } from "antd";
import ImageCard from "./ImageCard";

class ImagesList extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch({
      type: "images/fetch"
    });
  }

  render() {
    const { imagesPublicSorted } = this.props;
    return (
      <div>
        <Card title="Favorite Photos" style={{ margin: 8 }}>
          {imagesPublicSorted.map(image => (
            <ImageCard key={image.id} image={image} />
          ))}
        </Card>
      </div>
    );
  }
}

export default connect(({ images }) => ({
  imagesPublicSorted: images.imagesPublicSorted
}))(ImagesList);
