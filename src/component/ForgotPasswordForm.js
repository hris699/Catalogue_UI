import React, { useState } from "react";
import "./ForgotPasswordForm.scss";

function ForgotPasswordForm() {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        alert("password changed successfully");
    };
    return (
        <div className="password-form">
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>Old Password </label>
                    <input type="password" name="oldPassword" value={oldPassword} onChange={(e) => { setOldPassword(e.target.value) }} required />
                </div>
                <div className="input-container">
                    <label>New Password </label>
                    <input type="password" name="newPassword" value={newPassword} onChange={(e) => { setNewPassword(e.target.value) }} required />
                </div>
                <div className="input-container">
                    <label>Confirm Password </label>
                    <input type="password" name="confirmPassword" value={confirmPassword} onChange={(e) => { setConfirmPassword(e.target.value) }} required />
                </div>
                <div className="button-container">
                    <input type="submit" value="Submit" />
                </div>

            </form>
        </div>
    );
}
export default ForgotPasswordForm;