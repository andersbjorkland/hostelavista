import {AnimatedRow, Background, Content, Overlay,} from "./Hero.styles";
import {Slider} from "../Slider";

const Hero = () => {
    const placesToBe = ["the mountains", "the lakeside", "the city"];

    return (
        <>
            <Background>
            </Background>
            <Overlay>
                <Content>
                    <h1>go somewhere</h1>
                    <AnimatedRow>
                        <p>{placesToBe[0]}</p>
                        <p>{placesToBe[1]}</p>
                        <p>{placesToBe[2]}</p>
                    </AnimatedRow>
                    <Slider />
                </Content>
            </Overlay>
        </>
    );
}

export default Hero;