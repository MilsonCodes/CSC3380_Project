import React from 'react';
import styled from 'styled-components'
import LinkComp from '../Link'
import Link from "next/link";
import logo from "../../assests/AGIT_thumbnail.png";


//position: fixed

const MyNavbar = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;
  z-index: 1;
  border: 2px solid #4dd0e1;
  padding: 5px;
  border-radius: 25px;

  background-size: auto;
  color: #f5f5f5;

  height: 15vh;

  box-shadow: 5px 10px #888888;



  .nav-links{
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;

    width: 35vw;

    list-style: none;
  }

  .link{
    color: white;
    font-size: 2.5vh;
    text-decoration: none;
  }
  `;

  const Image = styled.img`
    @media (max-width: 900px) {
      width: 30%;
      height: 25%;
    }
    @media (min-width: 900px) {
      width: 10%;
      height: 7.5%;
    }
    :hover {
      cursor: pointer;
    }
  `;

const Navbar = props => {
  return (
    <MyNavbar>

    <Link href='/home'>
      <Image src={logo}></Image>
    </Link>
        <ul className="nav-links">
            <li>
              <LinkComp to="/home" className="link">Home</LinkComp>
            </li>
            <li>
              <LinkComp to="about" className="link"> About </LinkComp>
            </li>
            <li>
              <LinkComp to="contact" className="link">Contact</LinkComp>
            </li>
            <li>
              <LinkComp to="profile" className="link">Profile</LinkComp>
            </li>
          </ul>


      </MyNavbar>
);
};

export default Navbar;
