import React from 'react';
import Navbar from '../Pages/Shared/Navbar';
import { Outlet } from 'react-router-dom';
import { Container } from 'postcss';
import Footer from '../Pages/Shared/Footer';

const Main = () => {
    return (
        <div>
            <Navbar/>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;