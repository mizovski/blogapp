import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import LogoFooter from "../../LogoFooter.PNG"






export default function Footer() {



  
    
    return (
    <div className="footer">
    <div className="bottom">
      <div className="bottomLeft">
        <Link className="link" to="/">
        <img src={LogoFooter} alt="" />
        </Link>
      </div>
      <div className="bottomCenter">
        <ul className="bottomList">
          <li className="bottomListItem">
            <Link className="link" to="/">
              BREAKFAST
            </Link>
          </li>
          <li className="bottomListItem">
            <Link className="link" to="/">
              BRUNCH
            </Link>
          </li>
          <li className="bottomListItem">
            <Link className="link" to="/">
              LUNCH
            </Link>
          </li>
          <li className="bottomListItem">
            <Link className="link" to="/write">
              ADD POST
            </Link>
          </li>
          
        </ul>
      </div>
  </div>
  </div>
);
};

