import React from "react";
import styled from "styled-components";
import LinkComp from "../Link";

const MyNavbar = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  border: 2px solid #4dd0e1;
  border-radius: 30px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.16);
  padding: 10px;
  margin: 1.5%;
  background-color: ${p => p.theme.white || "#f5f5f5"};
  height: 5vh;
  width: 45%;
  .nav-links {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 35vw;
    list-style: none;
    padding: 10px;
  }
`;

const Navbar = props => {
  return (
    <MyNavbar>
      <ul className='nav-links'>
        <li>
          <LinkComp to='/home'>Home</LinkComp>
        </li>
        <li>
          <LinkComp to='/about'> About </LinkComp>
        </li>
        <li>
          <LinkComp to='/contact'>Contact</LinkComp>
        </li>
        <li>
          <LinkComp to={"/profile/" + props.id || "1"}>Profile</LinkComp>
        </li>
      </ul>
    </MyNavbar>
  );
};

export default Navbar;
