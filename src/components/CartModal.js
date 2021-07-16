import { Modal, Button, Select } from "antd";
import { Avatar, Image } from 'antd';
import { useEffect, useContext } from "react";
import Cookie from "js-cookie"
import { StoreContext } from "../store"
import { DesktopOutlined  } from '@ant-design/icons';
import {removeFromCart} from "../Action/index"

export default function CartModal({ isModalVisible, toggleModal }) {
   const { state: { cartItems }, dispatch } = useContext(StoreContext);
   const handleCancel = () => toggleModal(!isModalVisible);


   useEffect(()=>{
    Cookie.set("cartItems", JSON.stringify(cartItems));
   }, [cartItems])

   return (
      <Modal
         title="Your Lesson"
         visible={isModalVisible}
         onCancel={handleCancel}
         footer={null}
      >

         {cartItems.length === 0 ? (
            <div>You don't have any lesson now !</div>

         ) : (
            cartItems.map(item => (
                <li key={item.id} className="modal-cart">
                    <div className="cart-image">
                        <Avatar src={item.image} />
                    </div>
                    <div className="modal-content">
                        <div className="cart-name">{item.name}</div>
                        <div className="cart-detail">{item.detail}</div>
                    </div>
                    <div className="modal-end">
                        <div className="modal-delete" onClick={()=>removeFromCart(dispatch,item.id)}>
                            x
                        </div>
                    </div>
                </li>
            ))
         )}
            <Button
                className="modal-btn"
                type="link"
                shape="round"
                value="small"
            >
                <DesktopOutlined /> { }
                <span style={{ margin: "auto" }}>ADD TO MY FAVOR</span>
            </Button>
      </Modal>
   );
}