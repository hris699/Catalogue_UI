import "./ListContentProvider.css";
import React, { useEffect, useState } from "react";
import {BASE_URL , CONTENT_PROVIDER} from "../endpoints/CatalogueApi";
const ListContentProvider = () => {
  const [user, setUser] = useState([]);
  
  const [data, setData] = useState(0);

  useEffect(() => {
    fetch(
      `${BASE_URL}${CONTENT_PROVIDER}`
    )
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        setData(data.value); // set the value of data to the value from the API response
      });
  }, []);

  const submitButton=()=>{
    
  }
  return (
    <div>
      <div className="wrapper" onSubmit={submitButton}>
        <div>
          <h2>List Content Providers</h2>
          <table>
            <tbody>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Contact</th>
                <th>Role id</th>
                <th>Address</th>
                <th>Status</th>
                <th>Delete</th>
              </tr>
              {user.map((item) => (
                <tr key={item.userId}>
                  <td> {item.user_id}</td>
                  <td> {item.name}</td>
                  <td> {item.email}</td>
                  <td> {item.contact_number}</td>
                  <td> {item.user_role_id}</td>
                  <td> {item.address_id}, {item.line1}, {item.line2}, {item.city}, {item.state}, {item.country}, {item.pincode}</td>
                  
                  <td>
                    <button
                      id="myButton"
                      disabled={item.status === 0} 
                     >
                      Status
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListContentProvider;





