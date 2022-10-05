import React from 'react';
import {NavLink} from "react-router-dom";
import {PATH} from "../pages/Pages";
import s from './Header.module.css';

const Header = () => {
    return (
        <div className={s.nav}>
            <NavLink to={PATH.HOME}>Home</NavLink>
            <NavLink to={PATH.PROFILE}>Profile</NavLink>
            <NavLink to={PATH.LOGIN}>Login</NavLink>
            <NavLink to={PATH.REGISTER}>Register</NavLink>
            <NavLink to={PATH.FORGOT_PASSWORD}>Forgot password?</NavLink>
            <NavLink to={PATH.NEW_PASSWORD}>New password</NavLink>
            <NavLink to={PATH.TEST_PAGE}>Test page</NavLink>
        </div>
    );
};

export default Header;