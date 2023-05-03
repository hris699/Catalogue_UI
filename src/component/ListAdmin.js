import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "reactstrap";
import axios from "axios";
import LoadingSpinner from "./LoadingSpinner";
import "./ListAdmin.scss";
import { BASE_URL, ADMIN_SIGNUP } from "../endpoints/CatalogueApi";
axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

export const ListAdmin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    getAllAdmins();
  }, []);
  const [admin, setAdmin] = useState([]);

  //function to call server
  const getAllAdmins = () => {
    setIsLoading(true);
    fetch(`${BASE_URL}${ADMIN_SIGNUP}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setAdmin(data)
        setIsLoading(false)
      })
      .catch(() => {
        setErrorMessage("Unable to fetch user list");
        setIsLoading(false);
      });
  };
  const renderAdminData = (
    <div>
      <h2>List of Admins</h2>
      <Table>
        <thead>
          <th>Name</th>
          <th>Email</th>
          <th>Mobile Number</th>
        </thead>
        <tbody>
          {admin.map((adm) => (
            <tr>
              <td>{adm.name}</td>
              <td>{adm.email}</td>
              <td>{adm.contact_number}</td>
            </tr>
          ))
          }
        </tbody>
      </Table>
    </div>
  );
  return (
    <div>
      {isLoading ? <LoadingSpinner /> : renderAdminData}
      {errorMessage && <div className="error">{errorMessage}</div>}
    </div>

  );
}
