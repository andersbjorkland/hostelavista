import {Wrapper} from "./HamburgerIcon.styles";
import {useState} from "react"

export const HamburgerIcon = () => {
    const [active, setActive] = useState(true);

    return (
        <Wrapper onClick={() => setActive(!active)} className={active ? "active" :""}>
            <div/>
            <div/>
            <div/>
        </Wrapper>
    );
}

export default HamburgerIcon;