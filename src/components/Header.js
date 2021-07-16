import { Link } from "react-router-dom";
import {  HomeOutlined} from '@ant-design/icons';
import { Badge, Button, Modal } from 'antd';
import CartSummary from "./CartSummary";
import React, { useState } from 'react';
import NavBar from "./NavBar";
import { useContext } from "react";
import { StoreContext } from "../store"
import {onClickHeader} from "../Action/index"

export default function Header() {
  const { dispatch } = useContext(StoreContext);

    return (
      <div>
        <header className="header">
          <div className="container">
            <Link to="/"  onClick={()=>{
                onClickHeader(dispatch)
              }}>
              <img src="https://www.openedu.tw/img/OpenEdu_Logo_W.png" alt="" width="200" height="60"/>
            </Link>
            <NavBar/>
            <div className="navbar-lessonCount">

            <CartSummary/>

            </div>
          </div>
        </header>
      </div>
    );

  }