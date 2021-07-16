
import { Row, Col } from "antd";
import React from 'react';
import {  Divider } from 'antd';
import { Rate } from 'antd';
import { StarOutlined , HeartTwoTone,PushpinFilled, TagFilled ,FireFilled } from '@ant-design/icons';
import { Timeline } from 'antd';
import AddToCart from "./AddToCart";
import { useState} from "react";
export default function LessonDetail( {lessonitem}) {
    const [qty, setQty] = useState(0);

    return(
        <div  className="lessonDetail ">
            <Row>
                <Col span={24}>
                    <div className="detail topic">
                        <div className="detail-title">{lessonitem.className}</div>
                        <div className="detail-subIntro">{lessonitem.subIntro}</div>
                    </div>
                </Col>
            </Row>
            <Row className="detail-content container-fluid">
                <Col span={16} className="detail-infro">
                    <Row className="lesson-detail-list">
                        <Col span={12} >
                            <Divider style={{ borderWidth: 2, borderColor: '#ee6c4d', padding: '0 40px'}}>About</Divider>
                            <div className=" lesson-list">
                                <li className="detail-list">
                                    <ol className="detail-item"><PushpinFilled /> 教育機構 : {lessonitem.institution}</ol>
                                    <ol className="detail-item"><PushpinFilled /> 老師姓名 : {lessonitem.teacher}</ol>
                                    <ol className="detail-item"><PushpinFilled /> 相關資訊 : {lessonitem.detail}</ol>
                                    <ol className="detail-item"><PushpinFilled /> 費用 : {lessonitem.price}</ol>
                                </li>
                            </div>
                        </Col>
                        <Col span={12}>
                            <Divider style={{ borderWidth: 2, borderColor: '#ee6c4d', padding: '0 40px'}}>Traits</Divider>
                            <div className=" lesson-list">
                                <li className="detail-list">
                                    <ol className="detail-item"><TagFilled /> {lessonitem.trait1}</ol>
                                    <ol className="detail-item"><TagFilled /> {lessonitem.trait2}</ol>
                                    <ol className="detail-item"><TagFilled />  {lessonitem.trait3}</ol>
                                </li>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                        <Divider style={{ borderWidth: 2, borderColor: '#ee6c4d', padding: '0 40px'}}>Lesson Schedule</Divider>
                            <div className="detail-timeLine">
                            <Timeline >
                                <Timeline.Item >Create a services</Timeline.Item>
                                <Timeline.Item >Solve initial network problems</Timeline.Item>
                                <Timeline.Item>Technical testing</Timeline.Item>
                                <Timeline.Item >Network problems being solved</Timeline.Item>
                            </Timeline>
                            </div>
                    </Col>
                    </Row>

                </Col>
                <Col span={8} className="detail-about">
                    <Divider  style={{ borderWidth: 2, borderColor: '#ee6c4d'}}>Infromation</Divider>
                    <div >
                        <div className="detail-comment">
                            <FireFilled /> 學習困難程度 : {"   "}
                            <Rate character={<StarOutlined />} disabled defaultValue={lessonitem.hard}/>
                        </div>
                        <div className="detail-comment">
                            <FireFilled /> 使用者評價 : { "   "}
                            <Rate character={<HeartTwoTone twoToneColor="#d4380d" />} disabled defaultValue={lessonitem.comment}/>
                        </div>
                        <div className="detail-aboutClass">
                            <FireFilled /> 教師介紹 : { }
                            {lessonitem.teacherIntro}
                        </div>
                        <div className="detail-aboutClass">
                            <FireFilled /> 課程介紹 : { }
                            {lessonitem.aboutClass}
                        </div>

                    </div>

                    <div>
                    <AddToCart
                        className="detail-button"
                        lessonitem={lessonitem}
                        qty={qty}
                    />

                </div>
                </Col>

            </Row>
        </div>


    );
}
