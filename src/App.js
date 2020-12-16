import React, {useEffect, useState} from 'react';
import './App.css';
import {GlobalStyle} from "./GlobalStyle";
import Header from "./Components/Header";
import Hero from "./Components/Hero";

function App() {
    return (
        <div className="App">
            <GlobalStyle />
            <Header display={Window} />
            <Hero />
        </div>
    );
}

export default App;
