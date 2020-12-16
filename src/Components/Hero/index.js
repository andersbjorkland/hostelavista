import {useEffect, useState} from "react";
import {AnimatedRow, Background, Content, Overlay,} from "./Hero.styles";

const Hero = () => {
    const placesToBe = ["the mountains", "the lakeside", "the city"];

    const [placeIndex, setPlaceIndex] = useState(0);
    const [placeToBe, setPlaceToBe] = useState(placesToBe[placesToBe.length - 1]);


    useEffect(() => {
        const updatePlaceIndex = setInterval(() => {
            let index = placeIndex === placesToBe.length - 1 ? 0 : placeIndex + 1;
            console.log("updating");

            setPlaceIndex(index);
            setPlaceToBe(placesToBe[placeIndex]);
            console.log(placeToBe, index);
        }, 4000);


        return () => clearInterval(updatePlaceIndex);
    }, [placeIndex, placeToBe]);

    return (
        <>
            <Background>
            </Background>
            <Overlay>
                <Content>
                    <h1>go somewhere</h1>
                    <AnimatedRow><p>{placeToBe}</p></AnimatedRow>
                </Content>
            </Overlay>
        </>
    );
}

export default Hero;