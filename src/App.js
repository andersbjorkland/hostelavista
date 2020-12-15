import React, {useEffect, useState} from 'react';
import './App.css';
import {GlobalStyle} from "./GlobalStyle";
import Header from "./Components/Header";

function App() {
    return (
        <div className="App">
            <GlobalStyle />
            <Header display={Window} />
        </div>
    );
}

export default App;
