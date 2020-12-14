import {Content, Navbar, Wrapper} from "./Header.styles";
import Logo from "../Logo";
import Link from "./Link";
import HamburgerIcon from "../HamburgerIcon";

const Header = () => (
    <Wrapper>
        <Content>
            <Logo href="/"/>

            <Navbar>
                <HamburgerIcon />
                <Link>living quarters</Link>
                <Link>experiences</Link>
                <Link>become a host</Link>
            </Navbar>
        </Content>

    </Wrapper>
);

export default Header;