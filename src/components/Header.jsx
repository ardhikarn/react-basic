import React from "react";

function Header(props) {
  return (
    <section className="header">
      <button className="header-btn main-black-color">Add</button>
      <h1 className="header-title">Todo Lists</h1>
      <button className="header-btn main-red-color">Clear</button>
    </section>
  );
}

export default Header;
