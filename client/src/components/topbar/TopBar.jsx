import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";
import Logo from "../../../src/Logo.PNG";
import Button from '@mui/material/Button';


export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/"

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="top">
      <div className="topLeft">
        <Link className="link" to="/">
        <img src={Logo} alt="" />
        </Link>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              BREAKFAST
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              BRUNCH
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              LUNCH
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              ADD POST
            </Link>
          </li>
          {/*<li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
  </li>*/}
        </ul>
      </div>
      <div className="topRight">
        
        
        
        {user ? (
          <Link to="/settings">
            <img className="topImg" src={PF+user.profilePic} alt="" />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOG IN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                CREATE ACCOUNT
              </Link>
            </li>
          </ul>
        )}
        <Button variant="outlined" className="topListItem button" color="success" onClick={handleLogout}>
        {user && "LOGOUT"}
        </Button>
      </div>
    </div>
  );
}
