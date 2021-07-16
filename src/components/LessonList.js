import {Link} from'react-router-dom';
import { Card } from "antd";
import { Popover, Button } from 'antd';
import { List, Typography, Divider } from 'antd';
import { TagFilled } from '@ant-design/icons';
export default function LessonList( {lessonitem} ){
    const popTitle =(
       <div className="card-popover">你可以學到...</div>
    );
    const trait = (
        <div className="card-traits">
            <div className="card-trait"><TagFilled /> {lessonitem.trait1}</div>
            <div className="card-trait"><TagFilled /> {lessonitem.trait2}</div>
            <div className="card-trait"><TagFilled /> {lessonitem.trait3}</div>
        </div>
    );
    const { Meta } = Card;
    const Infro =[
        <div className="lesson-list">
            <div className="lesson-list-item">教育機構 : {lessonitem.institution}</div>
            <div className="lesson-list-item">老師姓名 : {lessonitem.teacher}</div>
            <div className="lesson-list-item">相關資訊 : {lessonitem.detail}</div>
            <div className="lesson-list-item">費用 : {lessonitem.price}</div>
        </div>
    ];
    return(

    <Link to={`/lesson/${lessonitem.id}`}>
        <Card
            hoverable
            className="ACard"
            cover={<img src={lessonitem.image} className="card" alt="..."/>}
        >
            <Meta title={lessonitem.className} description={lessonitem.subIntro} />

            <Divider orientation="left">Infromation</Divider>
            <List
                size="small"
                bordered
                dataSource={Infro}
                renderItem={item => <List.Item>{item}</List.Item>}
            />
            <Popover  placement="top" content={trait} title={popTitle}>
                <Button type="link" className="card-more">more</Button>
            </Popover>

        </Card>


     </Link>


    )




}