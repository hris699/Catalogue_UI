import "../App.css";
import { Link } from "react-router-dom";
import Header from "../component/Header";
function Home() {
  return (
    <div>
      <Header />
      <h2 className="App">Welcome to Catalogue Application</h2>
      <div>
        <Link to='/manageCategory'> <h5>Manage Category</h5></Link>
        <Link to='/admin'> <h5>List Admin</h5></Link>
        <Link to='/adminsignup'> <h5>Add Admin</h5></Link>
        <Link to='/contentProvider'> <h5>List Content Provider</h5></Link>
      </div>
  
    </div>
  );
}

export default Home;
