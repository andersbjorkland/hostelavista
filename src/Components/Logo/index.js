import {Wrapper} from "./Logo.styles";

const Logo = (props) => (
    <Wrapper>
        <p><a href={props.href || "#"}>hostelavista</a></p>
    </Wrapper>
);

export default Logo;