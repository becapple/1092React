import { useState, useContext } from "react";
import { Badge, Modal , Button} from "antd";
import { HomeOutlined, ReadFilled } from '@ant-design/icons';
import { StoreContext } from "../store"

import CartModal from "./CartModal";

export default function CartSummary() {
  const { state: { cartItems }, dispatch } = useContext(StoreContext);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleModal = () => setIsModalVisible(!isModalVisible);

  let count = (cartItems.length > 0) ?
    cartItems.reduce((sum, item) => sum + item.qty, 0)
    : 0;



  return (
    <div>
      <div onClick={toggleModal}>
        <Badge count={count} size={"small"}   >
          <HomeOutlined size={32} />
        </Badge>
        <CartModal
          isModalVisible={isModalVisible}
          toggleModal={toggleModal}
        />
       </div>
      </div>
  );
}
