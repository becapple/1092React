import {
    ADD_CART_ITEM,
    REMOVE_CART_ITEM,
    SET_PAGE_TITLE
} from "../utilities/constrant" ;

export const addToCart = (dispatch,lessonitem, qty) => {
    const item = {
        id: lessonitem.id,
        name: lessonitem.className,
        image: lessonitem.image,
        price: lessonitem.price,
        detail: lessonitem.detail,
        qty
      };
    dispatch({
        type: ADD_CART_ITEM,
        payload: item
  });
};
  export const removeFromCart = (dispatch,productId) => {
    dispatch({ type: REMOVE_CART_ITEM, payload: productId });
 };

export const onClickHeader = (dispatch) => {
    dispatch({
       type: SET_PAGE_TITLE,
       payload: "updated class"
    })
}