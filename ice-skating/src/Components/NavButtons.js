import React from "react";

const NavButtons = ({ scrollToSection }) => {
  return (
    <div className="nav-buttons">
      <button onClick={() => scrollToSection("about")}>About</button>
      <button onClick={() => scrollToSection("new")}>New</button>
      <button onClick={() => scrollToSection("coaching")}>Coaching</button>
      <button onClick={() => scrollToSection("bookings")}>Bookings</button>
      <button onClick={() => scrollToSection("contact")}>Contact</button>
    </div>
  );
};

export default NavButtons;
