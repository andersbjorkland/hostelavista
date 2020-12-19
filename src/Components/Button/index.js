import {LinkButton} from "./Button.styles";

const Button = (props) => (
    <LinkButton href={props.link ? props.link : "#"}><div>{props.children}</div></LinkButton>
);

export default Button;