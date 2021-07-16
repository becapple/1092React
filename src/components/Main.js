
import {Row, Col } from 'antd';
import LessonList from "./LessonList.js";
import lessonitem from "../json/lessonItem.json";


export default function Main({title, subTitle, lessonitem}){
    return(
        <div>
            <div className="topic">
                <h1 className="title">{title}</h1>
                <p className="sub-title">{subTitle}</p>
            </div>
            <Row gutter={[0,16]} className="main-size">
              {lessonitem.map((AClass) => (
                  <Col
                    key={AClass.id}
                    lg={{ span: 12 }}
                    xl={{ span: 8 }}
                    xxl={{ span: 6 }}
                  >
                    <LessonList lessonitem = {AClass}/>
                  </Col>
                ))}
              </Row>




          </div>
    );
}