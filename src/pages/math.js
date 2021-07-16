import { Layout } from 'antd';
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import Main from "../components/Main";
import math from '../json/math.json';
import { useContext } from "react";
import { StoreContext } from "../App"
const { Header, Content, Footer } = Layout;

function Math() {

  return (
    <Layout className="container main-layout">
      <Header className="layout-header">
        <AppHeader  />
      </Header>
      <Content className="layout-content">
        <Main title="理工系列" subTitle="the introduction of this topic" lessonitem={math} />
      </Content>
      <Footer className="layout-footer">
        <AppFooter/>
      </Footer>
    </Layout>
  );
}

export default Math;
