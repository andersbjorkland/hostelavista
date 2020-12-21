import React from 'react';
import './App.css';
import {GlobalStyle} from "./GlobalStyle";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Separator from "./Components/Separator";
import triangle from "./images/triangle.svg";
import Feature from "./Components/Feature";

function App() {
    return (
        <div className="App">
            <GlobalStyle />
            <Header display={Window} />
            <Hero />
            <Separator className="topper" image={triangle} />
            <Feature />
        </div>
    );
}

export default App;
