import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form } from "reactstrap";
import { BASE_URL, CONFIRM_SIGN_UP } from "../endpoints/CatalogueApi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ConfirmUserForm.scss";

function ConfirmUserForm() {
    const [verifyCode, setVerifyCode] = useState("");
    const navigate= useNavigate();

    const email = sessionStorage.getItem("email");
    const handleSubmit = (event) => {
        const details = {
            email: email,
            verifyCode: verifyCode
        }
        event.preventDefault();
        fetch(
            `${BASE_URL}${CONFIRM_SIGN_UP}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(details),
            }
        )
            .then()
            .then((response) => {
                if (response.status === 200) {
                    toast.success("User confirmed", {
                        position: "top-center"
                    });
                    navigate("/login");
                }
                else {
                    toast.error("User not confirmed", {
                        position: "top-center"
                    });
                }
            });
    };

    return (
        <div className="confirm-user-form">
            <Form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>Enter Verification Code </label>
                    <input type="text" name="verifyCode" value={verifyCode} onChange={(event) => { setVerifyCode(event.target.value) }} required />
                </div>
                <div className="button-container">
                    <Button type="submit" >Submit</Button>
                </div>
            </Form>
        </div>
    )
}
export default ConfirmUserForm;