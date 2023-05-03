import React, { useState } from "react";
import './AdminSignUpForm.scss';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BASE_URL , ADMIN_SIGNUP} from "../endpoints/CatalogueApi";
import alphabetsAndSpacesOnlyRegex from "../component/regEx"

function AdminSignUpForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const callAdminSignUpAPI= (data) =>{
        // api call
        console.log("admin_signup_url :- ",ADMIN_SIGNUP);
        console.log("data :-- ",data);
        fetch(
            `${BASE_URL}${ADMIN_SIGNUP}` ,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            }
        )
            .then((response) => {
                console.log("Response",response)
                if (response.status === 200) {
                    toast.success("Successfully signed up", {
                         position: "top-center"
                        });
                }
                else{
                    toast.error("Sign up failed", {
                        position: "top-center"});
                }
                response.text()
            }).catch((error) => console.log(error));
    };

  const validate = (value) => {
        var regEx = alphabetsAndSpacesOnlyRegex;
        if (regEx.test(value)) {
            setErrorMessage('')
            setName(value);
        }
        else {
            setErrorMessage('Name can only have alphabets and spaces')
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const details = {
            name: name,
            email: email,
            phone_number:  contact,
        }
        console.log(details);
        callAdminSignUpAPI(details)
    };
    return (
        <div className="admin-signup-form">
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>Name </label>
                    <input type="text" name="username" value={name} onChange={(event) => { validate(event.target.value) }} required />
                </div>
                {errorMessage === '' ? null :
                    <span style={{
                        fontWeight: 'lighter',
                        color: 'red',
                    }}>{errorMessage}</span>}
                <div className="input-container">
                    <label>Email </label>
                    <input type="email" name="email" value={email} onChange={(event) => { setEmail(event.target.value) }} required />
                </div>
                <div className="input-container">
                    <label>Contact Number </label>
                    <input type="text" value={contact} onChange={(event) => { setContact(event.target.value) }} required />
                </div>
                <div className="button-container">
                    <input type="submit" value="Add Admin" />
                </div>
            </form>
        </div>
    );
}
export default AdminSignUpForm;