import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import AddCategory from '../component/AddCategory';
import { ListCategory } from '../component/ListCategory';
import HeaderLogin from "../component/HeaderLogin";
import "./ManageCategory.scss";

function ManageCategory(){
 return (
    <div>
      <HeaderLogin/><br/>
        <div className="ManageContainer">
       <AddCategory/>
       <ListCategory/>
       </div>
    </div>
  )
}
export default ManageCategory;
