import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "reactstrap";
import axios from "axios";
import {BASE_URL, CATEGORY_URL } from "../endpoints/CatalogueApi";
axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
export const ListCategory = () => {
  useEffect(() => {
    getAllCategories();
  }, []);
  const [categories, setCategories] = useState([]);

  //function to call server
  const getAllCategories = () => {
    fetch(`${BASE_URL}${CATEGORY_URL}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch();
  };

  return (
    <div className="ListCat">
      {
        <Table>
          <thead>
            <tr>
              <th>Categories</th>
            </tr>
          </thead>
          {categories.length > 0 ? (
            categories.map((cat) => (
              <tbody>
                <tr>
                  <td>{cat.category_name}</td>
                </tr>
              </tbody>
            ))
          ) : (
            <tbody>
              <tr>
                <td>"No Categories"</td>
              </tr>
            </tbody>
          )}
        </Table>
      }
    </div>
  );
};
