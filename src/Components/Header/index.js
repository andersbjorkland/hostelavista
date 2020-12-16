import React, {useState} from "react";
import {Content, Navbar, Wrapper} from "./Header.styles";
import Logo from "../Logo";
import Link from "./Link";
import HamburgerIcon from "./HamburgerIcon";
import HamburgerMenu from "./HamburgerMenu";



const Header = ({display}) => {

    const [showMenu, setShowMenu] = useState(false);

    const hamburgerClickHandler = () => {
        setShowMenu(!showMenu);
        console.log("Clicked!");
    }

    return (
        <Wrapper>
            <Content>
                <Logo href="/"/>

                <Navbar>
                    <HamburgerIcon clickHandler={hamburgerClickHandler}/>
                    <HamburgerMenu className={showMenu ? "show" : "hide"}>
                        <Link>living quarters</Link>
                        <Link>experiences</Link>
                        <Link>become a host</Link>
                    </HamburgerMenu>
                </Navbar>
            </Content>

        </Wrapper>
    )
};

export default Header;