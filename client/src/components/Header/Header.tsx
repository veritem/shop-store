import React from "react";
import "./Header.css";
// import { Link } from 'react-router-dom'

function Header() {
  function handleDropDown() {
    document.querySelector(".dropdown ul")?.classList.toggle("active");
  }

  function handleDropDownItem(value: string) {
    let el = document.querySelector(".default_option");
    if (el) el.innerHTML = value;
    document.querySelector(".dropdown ul")?.classList.remove("active");
  }

  return (
    <nav>
      <div className="logo">AMAVON</div>
      <div className="searchBar">
        <div className="search_box">
          <div className="dropdown">
            <div className="default_option" onClick={handleDropDown}>
              All
            </div>
            <ul>
              <li
                onClick={() => handleDropDownItem("All")}
              >
                All
              </li>
              <li onClick={() => handleDropDownItem("Recent")} value="Recent">
                Recent
              </li>
              <li onClick={() => handleDropDownItem("Popular")} value="popular">
                Popular
              </li>
            </ul>
          </div>
          <div className="search_field">
            <input
              type="text"
              className="input"
              placeholder="search"
              autoFocus
            />
            <i className="fas fa-search" />
          </div>
        </div>
      </div>
      <div className="otherLinks">
        <div className="signin">Sign in</div>
        <div className="cart">
          <i className="fas fa-cart-plus"></i>
        </div>
      </div>
    </nav>
  );
}

export default Header;
