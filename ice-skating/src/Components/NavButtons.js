import React, { useState } from "react";
import { FaBars } from "react-icons/fa"; // Import the burger menu icon

const NavButtons = ({ scrollToSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="nav-container">
      {/* Burger Menu Button - Only visible on small screens */}
      <button className="burger-menu" onClick={() => setMenuOpen(!menuOpen)}>
        <FaBars size={24} color="#ff6392" />
      </button>

      {/* Navigation Buttons - Shown on larger screens or when menu is open */}
      <div className={`nav-buttons ${menuOpen ? "open" : ""}`}>
        <button onClick={() => scrollToSection("about")}>About</button>
        <button onClick={() => scrollToSection("new")}>New</button>
        <button onClick={() => scrollToSection("coaching")}>Coaching</button>
        <button onClick={() => scrollToSection("bookings")}>Bookings</button>
        {/* <button onClick={() => scrollToSection("contact")}>Contact</button> */}
      </div>
    </nav>
  );
};

export default NavButtons;
