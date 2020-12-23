import {LinkButton} from "./Button.styles";

const Button = (props) => (
    <LinkButton href={props.link ? props.link : "#"} bg={props.bg} outlined={props.outlined}><div>{props.children}</div></LinkButton>
);

export default Button;