import {GlobalStyle} from "../GlobalStyle";
import Hero from "../Components/Hero";
import Separator from "../Components/Separator";
import triangle from "../images/triangle.svg";
import Feature from "../Components/Feature";
import triangleBlue from "../images/triangle-blue.svg";
import Caller from "../Components/Caller";

const Home = () => (
    <>
        <GlobalStyle />
        <Hero />
        <Separator className="topper" image={triangle} />
        <Feature />
        <Separator className="downer" image={triangleBlue} />
        <Caller />
    </>
);

export default Home;