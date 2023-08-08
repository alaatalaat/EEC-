import "../Header/header.css";
import Accordion from "react-bootstrap/Accordion";
import Dropdown from "react-bootstrap/Dropdown";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useSelector } from "react-redux";
import { CART } from "../../Store/actions";
import { useDispatch } from "react-redux";
import logo from '../../assets/logo.webp';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import sun from '../../assets/sun.png'
import ui from '../../assets/ui.png'
import sets from '../../assets/sets.png'
import auth from '../../assets/auth.png'
import other from '../../assets/other.png'
import { useTheme } from '@mui/material/styles';

export default function Header({props,setMode}) {
  const theme = useTheme();
  const [show,setShow] = useState(false)
  function showContainer(){
    console.log(theme)
   if(show==false){
    setShow(true)
   }else{
    setShow(false)
   }
  }
  return (
    <>
      <Navbar expand="lg">
        <Navbar.Brand href="#home"><img src={logo} height="40px" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Features</Nav.Link>
            <Nav.Link href="#link">Team</Nav.Link>
            <Nav.Link href="#link">FAQ</Nav.Link>
            <Nav.Link href="#link">Contact us</Nav.Link>
            <Nav.Link onClick={showContainer}><span>Pages <i className="fa-solid fa-chevron-down" style={{fontSize:"12px"}}></i></span></Nav.Link>

            <Nav.Link href="#link">Admin</Nav.Link>
          </Nav>
          <img src={sun} onClick={()=>{
            //setMode(theme.palette?.mode==="light"?"dark":document.body.style.backgroundColor="#EBF3F7")
            if(theme.palette?.mode==="dark"){
              document.body.style.backgroundColor="#EBF3F7"
            }else if(theme.palette?.mode==="light"){
              setMode("dark")
            }
          }} width="30px" height="30px" className="mx-3" /> <br/>
          <button className="btn"><i class="fa-solid fa-user mx-2"></i>LOGIN/REGISTER</button>
        </Navbar.Collapse>
      </Navbar>

      {show&&
        <div className="conatiner-fluid card mx-5">
          <div className="row">
            <div className="col-sm-12 col-md-2">
              <div className="p-3">
                <img src={sets} width="50px" />
                <span className="mx-2">Other</span>
              </div>
              <ul className="mx-3">
                <li>Pricing</li>
                <li>Payment</li>
                <li>Checkout</li>
                <li>Help Center</li>
              </ul>
            </div>
            <div className="col-sm-12 col-md-3">
              <div className="p-3" style={{borderRadius:'10px'}}>
                <img src={auth} width="50px" />
                <span className="mx-2">Auth Demo</span>
              </div>
              <ul className="mx-3">
                <li>Login (Basic)</li>
                <li>Login(cover)</li>
                <li>Register(Basic)</li>
                <li>Register(Cover)</li>
                <li>Register(Multi-steps)</li>
                <li>Forget Password(Basic)</li>
                <li>Forget Password(cover)</li>
                <li>Reset Password(Basic)</li>
                <li>Reset Password(cover)</li>
              </ul>
            </div>
            <div className="col-sm-12 col-md-3">
            <div className="p-3" style={{borderRadius:'10px'}}>
                <img src={other} width="50px" />
                <span className="mx-2">Other</span>
              </div>
              <ul className="mx-3">
                <li>Error</li>
                <li>Under Maintenance</li>
                <li>Coming Soon</li>
                <li>Not Authorized</li>
                <li>Verify Email(Basic)</li>
                <li>Verify Email(cover)</li>
                <li>Forget Password(cover)</li>
                <li>Two Steps(Basic)</li>
                <li>Two Steps(cover)</li>
              </ul>
            </div>
            <div className="col-sm-12 col-md-4">
              <img src={ui}  width="100%"/>
            </div>
          </div>
        </div>
      }
    </>
  );
}
