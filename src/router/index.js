import React from 'react';
import {Switch, Route} from "react-router-dom";
import Navbar from '../components/Navbar';
import Home from '../pages/Home/HomePage';
import NotFoundPage from '../pages/NotFound/NotFoundPage';
import Article from '../pages/Articles/Article';
import Gallery from '../pages/Gallery/Gallery';
import Catalog from '../pages/Catalog/Catalog';
import Order from '../pages/Orders/Order'
import AdminPage from '../pages/Admin/AdminPage';
import LoginPage from '../pages/Login/LoginPage';
import Footer from '../components/Footer';
import Contact from '../pages/ContactUs/Contact';
import ProjectPage from '../pages/Projects/ProjectPage';
import AboutUs from '../pages/AboutUs/AboutUs';
import ReviewPage from '../pages/Review/ReviewPage';

function Router(props) {
    return (
        <Switch>
            <Route exact path="/">
                <Navbar/>
                <Home/>
                <Footer/>
            </Route>
            {/* <Route exact path="/services">
                <Navbar/>
                <Service/>
            </Route> */}
            <Route exact path="/catalog">
                <Navbar/>
                <Catalog/>
                <Footer/>
            </Route>
            <Route exact path="/gallery">
                <Navbar/>
                <Gallery/>
            </Route>
            <Route exact path="/articles">
                <Navbar/>
                <Article/>
            </Route>
            <Route exact path="/order">
                <Navbar/>
                <Order/>
            </Route>
            <Route exact path="/admin">
                <Navbar/>
                <AdminPage/>
            </Route>
            <Route exact path="/login">
                <Navbar/>
                <LoginPage/>
            </Route>
            <Route exact path="/contact">
                <Navbar/>
                <Contact/>
                <Footer/>
            </Route>
            <Route exact path="/projects">
                <Navbar/>
                <ProjectPage/>
                <Footer/>
            </Route>
            <Route exact path="/about-us">
                <Navbar/>
                <AboutUs/>
                <Footer/>
            </Route>
            <Route exact path="/review">
                <Navbar/>
                <ReviewPage/>
                <Footer/>
            </Route>
            <Route path="*">
                <NotFoundPage/>
            </Route>
        </Switch>
    );
}

export default Router;