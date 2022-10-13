import React from 'react';
import {Route, Routes} from "react-router-dom";
import Login from "../../../../n2-features/f1-auth/a1-login/Login";
import Profile from "../../../../n2-features/f1-auth/a5-profile/Profile";
import Register from "../../../../n2-features/f1-auth/a2-register/Register";
import Error404 from "../../../../n2-features/f3-error404/Error404";
import ForgotPassword from "../../../../n2-features/f1-auth/a3-forgotPassword/ForgotPassword";
import NewPassword from "../../../../n2-features/f1-auth/a4-newPassword/NewPassword";
import TestPage from "../../../../n2-features/f0-test/TestPage";

export const PATH = {
    HOME: '/',
    PROFILE: '/profile',
    LOGIN: '/login',
    REGISTER: '/register',
    FORGOT_PASSWORD: '/forgot-password',
    NEW_PASSWORD: '/new-password',
    TEST_PAGE: '/test-page',
}

const Pages = () => {
    return (
        <div>
            <Routes>
                <Route path={PATH.HOME} element={<div>Home</div>}/>

                <Route path={PATH.LOGIN} element={<Login/>}/>
                <Route path={PATH.PROFILE} element={<Profile/>}/>
                <Route path={PATH.REGISTER} element={<Register/>}/>
                <Route path={PATH.FORGOT_PASSWORD} element={<ForgotPassword/>}/>
                <Route path={PATH.NEW_PASSWORD} element={<NewPassword/>}/>
                <Route path={PATH.TEST_PAGE} element={<TestPage/>}/>

                <Route path={'/*'} element={<Error404/>}/>
            </Routes>
        </div>
    );
};

export default Pages;