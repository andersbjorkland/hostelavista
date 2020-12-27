import React from 'react';
import './App.css';
import {GlobalStyle} from "./GlobalStyle";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Separator from "./Components/Separator";
import triangle from "./images/triangle.svg";
import triangleBlue from "./images/triangle-blue.svg";
import Feature from "./Components/Feature";
import Caller from "./Components/Caller";

function App() {
    return (
        <div className="App">
            <GlobalStyle />
            <Header display={Window} />
            <Hero />
            <Separator className="topper" image={triangle} />
            <Feature />
            <Separator className="downer" image={triangleBlue} />
            <Caller />
        </div>
    );
}

export default App;
