// src/components/Navbar.tsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav>
      <h1>FieldBit</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/result">Result</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

