import React from "react";

// Footer Componenet
function Footer() {
  function getDate(): number {
    let date = new Date();
    return date.getFullYear();
  }

  return (
    <nav className="navbar fixed-bottom navbar-light bg-light">
      <div className="container-fluid">
        <h4>
          <i className="far fa-copyright fa-lg"></i> Copyright {getDate()}.
        </h4>
      </div>
    </nav>
  );
}

export default Footer;
