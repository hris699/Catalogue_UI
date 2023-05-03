import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Form, Label, Input, Button } from "reactstrap";
import {BASE_URL, CATEGORY_URL } from "../endpoints/CatalogueApi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import alphabetsAndSpacesOnly from "./regEx";
import "./AddCategory.scss";
const AddCategory = () => {
  const [category, setCategory] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [errorMessagelength, setErrorMessagelength] = useState("");
  const maxCharLength = 25;

  const handleSubmit = (event) => {
    event.preventDefault();

    const category_name = {
      category_name: category,
    };
    if (errorMessage.length !== 0 || errorMessagelength.length !== 0) {
      setErrorMessage("Cannot Submit Wrong Input!");
    } else {
      // api call
      fetch(`${BASE_URL}${CATEGORY_URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(category_name),
      })
        .then()
        .then((response) => {
          if (response.status === 200) {
            toast.success("Category added successfully!", {
              position: "top-center",
            });

            window.location.reload();
          } else {
            toast.error("Wrong Input", {
              position: "top-center",
            });
          }
        })
        .catch((error) => console.log(error));
    }
  };

  // validating the input
  const validate = (value) => {
    setCategory(value);
    if (alphabetsAndSpacesOnly.test(value)) {
      setErrorMessage("");
    } else {
      setErrorMessage("Category can only have alphabets and spaces");
    }
    if (value.length <= maxCharLength) {
      setErrorMessagelength("");
    } else {
      setErrorMessagelength("Category can only have 25 characters");
    }
  };

  return (
    <div>
      <div className="AddForm">
        <Form onSubmit={handleSubmit}>
          <p>
            <b> Add New Category </b>
          </p>
          <Label htmlFor="text"> Category Name :</Label>
          <Input
            value={category}
            onChange={(event) => validate(event.target.value)}
            required
          ></Input>
          {errorMessage === "" ? null : (
            <span className="Error">{errorMessage}</span>
          )}
          {errorMessagelength === "" ? null : (
            <span className="Error">{errorMessagelength}</span>
          )}
          <br></br>
          <center>
            <Button type="submit">Add </Button>
          </center>
          <br />
        </Form>
      </div>
    </div>
  );
};

export default AddCategory;
