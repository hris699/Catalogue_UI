import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import ForgotPassword from './pages/ForgotPassword';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import AdminSignUp from './pages/AdminSignUp';
import ListAdmins from './pages/ListAdmins';
import ListContentProviders from './pages/ListContentProvider';
import ManageCategory from "./pages/ManageCategory";
import ConfirmUserForm from "./component/ConfirmUserForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/adminsignup" element={<AdminSignUp />} />
          <Route path="/admin" element={<ListAdmins />} />
          <Route path="/manageCategory" element={<ManageCategory />} />
          <Route path="/confirmSignup" element={<ConfirmUserForm />} />
          <Route path="/contentProvider" element={<ListContentProviders />}/>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>

  );

}

export default App;
