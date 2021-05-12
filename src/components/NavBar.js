import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { FaBars, FaTimes } from 'react-icons/fa'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const onToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <NavbarContainer>
      <Navbar>
        <NavbarLogo>
          <h1 className="logo">
            <Link to="/">
              283주년 웨슬리회심기념 <br/>
              온라인연합성회
            </Link>
          </h1>
        </NavbarLogo>
        <NavbarMenu isOpen={isOpen}>
          <li><Link to="#">집회신청</Link></li>
          <li><Link to="#">집회안내</Link></li>
          <li><Link to="#">오시는길</Link></li>
          <li><Link to="#">신청결과확인</Link></li>
        </NavbarMenu>
        <NavBarToggle onClick={onToggle}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </NavBarToggle>
      </Navbar>
    </NavbarContainer>

  );
}

const NavbarContainer = styled.div`
  min-height: 6vh;
  display: flex;
  align-items: center;
  top: 0;
  position: sticky;
  z-index: 2000;
  background: #fff;
`;


const Navbar = styled.nav`
  width: 100%;
  padding: 1rem 2rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const NavbarLogo = styled.div`

  .logo {
    font-size: 2rem;
    font-family: 'Jua', sans-serif;
    font-weight: lighter;
    
    a {
      color: #1e1e23;
      text-decoration: none;
    }
  }
`;

const NavbarMenu = styled.div`
  display: none;
`;

const NavBarToggle = styled.div`
  display: flex;
  align-items: center;
  font-size: 2rem;
  cursor: pointer;
`;


export default NavBar;