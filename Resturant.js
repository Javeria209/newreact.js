import React, { useState } from "react";
import "./style.css";
import Menu from './menuApi.js';
import MenuCard from "./MenuCard";

const Resturant = () => {
  const [MenuData, setMenuData]= useState(Menu);
return (

<>
<MenuCard MenuData={ MenuData }/>
</>
  )
}
export default  Resturant;