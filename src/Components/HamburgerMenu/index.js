import {Wrapper} from "./HamburgerMenu.styles";

const HamburgerMenu = (props) => (
    <Wrapper className={props.className}>
        {props.children}
    </Wrapper>
);

export default HamburgerMenu;