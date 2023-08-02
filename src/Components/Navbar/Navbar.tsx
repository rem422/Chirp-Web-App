import { styled } from "styled-components"
import Logo from '../Logo/Logo'
import { Link } from 'react-scroll'
import Button from '../Button/Button'
import { useEffect, useState } from 'react'
import {GrMenu, GrClose} from 'react-icons/gr'

const Navbar = () => {

const [toggle, setToggle] = useState(false);

const handleToggle = () => {
    return setToggle(!toggle)
}

const [shadow, setShadow] = useState(false);

const navShadow = () => {
  if(window.scrollY > 30) {
      setShadow(true);
  } else {
      setShadow(false);
  }
};

useEffect(() => {
  window.addEventListener('scroll', navShadow)
}, []);


  return (
    <NavbarSection className={shadow ? 'sticky' : undefined}>
        <div className="container">
            <div className="nav_wrapper">
                <Logo />
                <ul onClick={handleToggle} className= {toggle ? "nav_menu active" : "nav_menu"}>
                  <li className="nav_link">
                    <Link to='hero' onClick={handleToggle}>Home</Link>
                  </li>
                  <li className="nav_link">
                    <Link to='features' onClick={handleToggle}>Features</Link>
                  </li>
                  <li className="nav_link">
                    <Link to='testimonials' onClick={handleToggle}>Testimonials</Link>
                  </li>
                  <li className="nav_link">
                    <Link to='pricing' onClick={handleToggle}>Pricing</Link>
                  </li>
                  <li className="nav_link">
                    <Link to='faq' onClick={handleToggle}>FAQ</Link>
                  </li>
                  <Button 
                    text="Sign in with Twitter"
                    clicked={handleToggle}
                  />
                </ul>
                {/* Menu Button */}
                <div className="menu_btn" onClick={handleToggle}>
                  { toggle ? <GrClose /> : <GrMenu /> }
                </div>
            </div>
        </div>
    </NavbarSection>
  )
}

const NavbarSection = styled.nav`
  background-color: var(--headerBg);
  position: fixed;
  top: 0;
  left: 0;
  padding: 1rem 0;
  width: 100%;
  z-index: 999;
  transition: var(--transition);

  .nav_wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .nav_menu {
    display: inline-flex;
    align-items: center;
  }

  .nav_menu .nav_link a {
    margin-right: 1.6rem;
    color: var(--textColor);
    font-size: 1.2rem;
    transition: var(--transition);

    &:hover {
      color: var(--btnColor);
    }
  }

  .menu_btn {
    display: none;
    font-size: 1.4rem;
    cursor: pointer;
  }

  &.sticky {
    box-shadow: var(--box-shadow);
  }
  
  @media only screen and (max-width:960px) {
    .menu_btn {
      display: block;
      margin-top: .6rem;
      font-size: 1.4rem;
      cursor: pointer;
  }
    .nav_menu {
      background: var(--white);
      display: inline-block;
      align-items: center;
      position: fixed;
      top: 90px;
      left: 0;
      right: -500%;
      width: 90%;
      height: max-content;
      margin: 0 auto;
      padding: 2rem .6rem;
      border-radius: .6rem;
      box-shadow: var(--box-shadow);
      text-align: center;
      transition: var(--transition);
      z-index: 999;
    }

  .nav_menu.active {
    right: 0;
  }

  .nav_menu .nav_link {
    margin: 2rem 0;
  }

  .nav_menu .nav_link a {
    margin-right: 0;
  }
  }
`

export default Navbar