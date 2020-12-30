import React, {useState} from 'react';
import './App.css';
import {GlobalStyle} from "./GlobalStyle";
import { NavLink, Route, Switch} from "react-router-dom";
import {Content, Navbar, Wrapper} from "./Components/NavControls/Header.styles";
import Logo from "./Components/Logo";
import HamburgerIcon from "./Components/NavControls/HamburgerIcon";
import HamburgerMenu from "./Components/NavControls/HamburgerMenu";
import Hosting from "./Pages/Hosting";
import Home from "./Pages/Home";
import Details from "./Pages/Details";

function App() {

    const [showMenu, setShowMenu] = useState(false);

    const hamburgerClickHandler = () => {
        setShowMenu(!showMenu);
    }

    return (

        <>
            <GlobalStyle />
            <Wrapper>
                <Content>
                    <Logo />
                    <Navbar>
                        <HamburgerIcon clickHandler={hamburgerClickHandler}/>
                        <HamburgerMenu className={showMenu ? "show" : "hide"}>
                            <NavLink to="/" exact={true} activeClassName="active">home</NavLink>
                            <NavLink to="/hosting" activeClassName="active">become a host</NavLink>
                        </HamburgerMenu>
                    </Navbar>
                </Content>

            </Wrapper>

            <Switch>
                <Route path="/hosting">
                    <Hosting />
                </Route>
                <Route path="/details/:id">
                    <Details />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>
        </>
    )
}

export default App;
