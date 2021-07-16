import { Layout } from 'antd';
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import LessonDetail from "../components/LessonDetail";
import lessonitem from '../json/lessonItem.json';
import { useContext } from "react";
import { StoreContext } from "../App"
const { Header, Content, Footer } = Layout;

function MyClass({match}) {
  const lesson = lessonitem.find(
    (x) => x.id === match.params.lessonId
  );
  return (
    <Layout className="container main-layout">
      <Header className="layout-header">
        <AppHeader  />
      </Header>
      <Content className="layout-content">
        <LessonDetail lessonitem={lesson} />
      </Content>
      <Footer className="layout-footer">
        <AppFooter/>
      </Footer>
    </Layout>
  );
}

export default MyClass;
