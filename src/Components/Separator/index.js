import {Wrapper} from "./Separator.styles";

const Separator = (props) => (
    <Wrapper className={props.className}>
        {props.image &&
            <img src={props.image} alt=""/>
        }
    </Wrapper>
);

export default Separator;