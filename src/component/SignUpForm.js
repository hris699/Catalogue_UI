import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form } from "reactstrap";
import { BASE_URL, SIGN_UP } from "../endpoints/CatalogueApi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./SignUpForm.scss";

function SignUpForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [contact, setContact] = useState("");
    const [selectMenu, setSelectMenu] = useState("");
    const [line1, setLine1] = useState("");
    const [line2, setLine2] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");
    const [pincode, setPincode] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        var details = {
            name: name,
            password: password,
            email: email,
            contact: contact,
            role: selectMenu,
            line1: line1,
            line2: line2,
            city: city,
            state: state,
            country: country,
            pincode: pincode
        }
        sessionStorage.setItem("email", email);
        fetch(
            `${BASE_URL}${SIGN_UP}`,
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
                    toast.success("Successfully signed up", {
                        position: "top-center"
                    });
                    navigate("/confirmSignup");
                }
                else {
                    toast.error("Sign up failed", {
                        position: "top-center"
                    });
                }
            });


    };
    return (
        <div className="signup-form">
            <Form>
                <div className="input-container">
                    <label>Name </label>
                    <input type="text" name="username" value={name} onChange={(event) => { setName(event.target.value) }} required />
                </div>
                <div className="input-container">
                    <label>Email </label>
                    <input type="email" name="email" value={email} onChange={(event) => { setEmail(event.target.value) }} required />
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input type="password" name="pass" value={password} onChange={(event) => { setPassword(event.target.value) }} required />
                </div>
                <div className="input-container">
                    <label>Contact Number </label>
                    <input type="text" value={contact} onChange={(event) => { setContact(event.target.value) }} required />
                </div>
                <div className="input-container">
                    <label>Select role </label>
                    <select defaultValue={'DEFAULT'} value={selectMenu} onChange={(event) => { setSelectMenu(event.target.value) }} required>
                        <option value="" hidden> -- select an option -- </option>
                        <option value="Content Provider" >Content Provider</option>
                        <option value="User">User</option>
                    </select>
                </div>
                {selectMenu !== 'Content Provider' ? "" :
                    <div>
                        <div className="input-container">
                            <label>Address Line 1 </label>
                            <input type="text" value={line1} onChange={(event) => { setLine1(event.target.value) }} required />
                        </div>
                        <div className="input-container">
                            <label>Address Line 2 </label>
                            <input type="text" value={line2} onChange={(event) => { setLine2(event.target.value) }} required />
                        </div>
                        <div className="input-container">
                            <label>City </label>
                            <input type="text" value={city} onChange={(event) => { setCity(event.target.value) }} required />
                        </div>
                        <div className="input-container">
                            <label>Pincode </label>
                            <input type="text" value={pincode} onChange={(event) => { setPincode(event.target.value) }} required />
                        </div>
                        <div className="input-container">
                            <label>State </label>
                            <input type="text" value={state} onChange={(event) => { setState(event.target.value) }} required />
                        </div>
                        <div className="input-container">
                            <label>Country </label>
                            <input type="text" value={country} onChange={(event) => { setCountry(event.target.value) }} required />
                        </div>
                    </div>
                }
                <div className="button-container">
                    <Button type="submit" onClick={handleSubmit}>Sign Up</Button>
                </div>
            </Form>
        </div>
    );
}
export default SignUpForm;