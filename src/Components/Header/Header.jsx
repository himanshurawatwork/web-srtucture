import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="container border">
      <div className="row align-items-center">
        <div className="col">
          <div className="logo">
            <h2>Logo</h2>
          </div>
        </div>
        <div className="col">
            {/* dasktop nav start */}
                <nav className="desktop-nav">
                    <ul className="border">
                        <li>Home </li>
                        <li>About </li>
                        <li>Service </li>
                        <li>Contact </li>
                    </ul>
                </nav>

            {/* dasktop nav end */}

            

        </div>
      </div>
    </div>
  );
};

export default Header;
