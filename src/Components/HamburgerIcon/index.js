import {Trigger, Wrapper} from "./HamburgerIcon.styles";
import {useState} from "react"



export const HamburgerIcon = (props) => {
    const [active, setActive] = useState(false);

    return (
        <Trigger>
            <Wrapper onClick={() => {
                props.clickHandler();
                setActive(!active);
            }} className={active ? "active" :""}>
                <div/>
                <div/>
                <div/>
            </Wrapper>
        </Trigger>
    );
}

export default HamburgerIcon;