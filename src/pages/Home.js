import { Layout } from 'antd';
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import Main from "../components/Main";
import lesson from "../json/lessonItem.json"
import { useContext } from "react";
import { StoreContext } from "../store"


const { Header, Content, Footer } = Layout;

function Home() {
  const { state: { page: {title} } } = useContext(StoreContext);

  return (
    <Layout className="container main-layout">
      <Header className="layout-header">
        <AppHeader/>

      </Header>
      <Content className="layout-content">
        <Main  title={title} subTitle="the introduction of this topic" lessonitem={lesson}/>
      </Content>
      <Footer className="layout-footer">
        <AppFooter/>
      </Footer>
    </Layout>
  );
}

export default Home;
