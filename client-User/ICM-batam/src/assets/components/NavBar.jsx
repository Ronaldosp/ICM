import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState , useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from "react-bootstrap/Button";
import icmLogo from "../asset/icm-logo-removebg-preview.png"
import "../styling/Navbar.scss"

export default function NavBar(){
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = () => {
        localStorage.clear();
        navigate("/login");
    };

    return(
        <div className="navigation-bar-component">
            <div className="navigation-bar-component-container">
                <div className="navigation-bar-component-wrapper">

                    <div className="navigation-bar-component__logo-container">
                        <img src={icmLogo} alt=""/>
                    </div>

                    <div className="navigation-bar-component__link-container">
                        <div className="navigation-bar-component__links">
                            <a onClick={() =>{ navigate("/")}}>About Us</a>
                        </div>
                        <div className="navigation-bar-component__links">
                            <a onClick={() =>{ navigate("/")}}>Located</a>
                        </div>
                        <div className="navigation-bar-component__links">
                            <a onClick={() =>{ navigate("/")}}>Events</a>
                        </div>
                        <div className="navigation-bar-component__links">
                            <a onClick={() =>{ navigate("/")}}>Community</a>
                        </div>
                        <div className="navigation-bar-component__links">
                            <a onClick={() =>{ navigate("/")}}>Sunday Service</a>
                        </div>
                    </div>

                    <div className="navigation-bar-component__action-container">
                        <div className="navigation-bar-component__action-search">
                            <input/>
                        </div>
                        <div className="navigation-bar-component__action-register-button">
                            <button onClick={() => navigate("/signup")}>Sign Up</button>
                        </div>
                        <div className="navigation-bar-component__action-login-button">
                            <button onClick={() => navigate("/login")}>login</button>
                        </div>
                    </div>

                    <button className="navigation-bar__burger">
                        ☰
                    </button>

                </div>
            </div>
        </div>
    )
}