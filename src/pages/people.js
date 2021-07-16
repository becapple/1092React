import { Layout } from 'antd';
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import Main from "../components/Main";
import people from '../json/people.json';
import { useContext } from "react";
import { StoreContext } from "../App"
const { Header, Content, Footer } = Layout;

function People() {

  return (
    <Layout className="container main-layout">
      <Header className="layout-header">
        <AppHeader  />
      </Header>
      <Content className="layout-content">
        <Main title="人文系列" subTitle="the introduction of this topic" lessonitem={people} />
      </Content>
      <Footer className="layout-footer">
        <AppFooter/>
      </Footer>
    </Layout>
  );
}

export default People;
