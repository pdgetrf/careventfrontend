import React, { Component } from "react";
import { connect } from "dva";
import { Layout } from "antd";
import Header from "../../components/Header";
import EventList from "./EventList";
import ImagesList from "./ImagesList";

const { Content } = Layout;

class Index extends Component {
  render() {
    return (
      <Layout>
        <Header />
        <Content>
          <EventList />
          <ImagesList />
        </Content>
      </Layout>
    );
  }
}

export default Index;
