import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  background: #333;
  color: #fff;
  padding: 1rem;
`;

const Navbar: React.FC = () => {
  return (
    <Nav>
      <div>My Portfolio</div>
    </Nav>
  );
};

export default Navbar;
