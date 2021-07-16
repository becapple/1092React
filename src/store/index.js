import { createContext, useReducer } from "react";
import Cookie from "js-cookie"
import useReducerWithThunk from 'use-reducer-thunk';
import lessonItem from "../json/lessonItem.json"
import {
   SET_PAGE_TITLE,
   ADD_CART_ITEM,
   REMOVE_CART_ITEM,
} from "../utilities/constrant"

export const StoreContext = createContext();
let cartItems = Cookie.getJSON("cartItems");
if (!cartItems) cartItems = [];
const initialState = {
   page: {
      title: "updated class "
   },
   cartItems: [],
};



function reducer(state, action) {
   switch (action.type) {
      case SET_PAGE_TITLE:
         return {
            ...state,
            page: {
               ...state.page,
               title: action.payload,
            },
         };
      case ADD_CART_ITEM:
         const item = action.payload;
         const lessonitem = state.cartItems.find((x) => x.id === item.id);
         if (lessonitem) {
            cartItems = state.cartItems.map((x) =>
               x.id === lessonitem.id ? item : x
            );
            return { ...state, cartItems };
         }
         cartItems = [...state.cartItems, item];
         return { ...state, cartItems };
      case REMOVE_CART_ITEM:
         cartItems = state.cartItems.filter((x) => x.id !== action.payload);
         return { ...state, cartItems };
      default:
         return state;
   }
}

export function StoreProvider(props) {
   const [state, dispatch] = useReducerWithThunk(reducer, initialState, "example");

   const value = { state, dispatch };

   return (
      <StoreContext.Provider value={value}>
         {props.children}
      </StoreContext.Provider>
   );
}