
const Link = (props) => (
    <p><a href={props.href || "#"}>{props.children}</a></p>
);

export default Link;