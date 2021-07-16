import { useEffect, useContext } from "react";
import Cookie from "js-cookie"
import { Button, notification } from "antd"
import { StoreContext } from "../store"
import {addToCart} from "../Action/index"

export default function AddToCart({ lessonitem, qty }) {
  const { state: { cartItems }, dispatch } = useContext(StoreContext);

  const openNotification = () => {
    notification.open({
        message: "Lesson Notification",
        description:
        <div>
            課程名稱: {lessonitem.className}
        </div>


      });
    }
    const add = ()=>{
      openNotification();
      qty+=1;
      addToCart(dispatch,lessonitem, qty)
    }
  useEffect(()=>{
    Cookie.set("cartItems", JSON.stringify(cartItems));
   }, [cartItems])

  return (
    <Button
        className="detail-button"
        block
        onClick={()=>{add()}}

    >
        Enroll
    </Button>
  );
}
