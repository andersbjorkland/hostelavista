import {Wrapper} from "./Card.styles";

const Card = (props) => (
    <Wrapper>
        {props.children}
    </Wrapper>
);

export default Card;