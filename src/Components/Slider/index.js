import {useState} from "react";

import img1 from "../../images/mountain/mountain-1-sm.jpeg"
import {ArrowBtn, Carousel, Wrapper} from "./Slider.styles";
import TravelCard from "../TravelCard";

export const Slider = () => {

    const [animateShift, setAnimateShift] = useState("");
    const [cards, setCards] = useState([
        <TravelCard
            heading="mountains"
            image={img1}
            pitch="take it easy, enjoy the vistas."
            location="Trübsee, Schweiz"
            pricing="From $120 a night"
        />,
        <TravelCard
            heading="the city"
            image={img1}
            pitch="take it easy, enjoy the vistas."
            location="Trübsee, Schweiz"
            pricing="From $210 a night"
        />,
        <TravelCard
            heading="lakeside"
            image={img1}
            pitch="take it easy, enjoy the vistas."
            location="Trübsee, Schweiz"
            pricing="From $150 a night"
        />,
        <TravelCard
            heading="far away"
            image={img1}
            pitch="Limited time only!"
            location="Alderaan"
            pricing="From $4 a night"
        />,
        <TravelCard
            heading="scoobi doo"
            image={img1}
            pitch="Limited time only!"
            location="Mystery Bus"
            pricing="For free"
        />
    ]);

    const shiftLeft = () => {
        setAnimateShift("animate-l");
        setTimeout(() => {
            setCards([
                cards[4],
                cards[0],
                cards[1],
                cards[2],
                cards[3],
            ]);
            setAnimateShift("");
        }, 820);

    }

    const shiftRight = () => {
        setAnimateShift("animate-r");
        setTimeout(() => {
            setCards([
                cards[1],
                cards[2],
                cards[3],
                cards[4],
                cards[0],
            ]);
            setAnimateShift("");
        }, 820);

    }

    return (
        <Wrapper>
            <ArrowBtn className="left" onClick={shiftLeft}/>
            <ArrowBtn className="right" onClick={shiftRight}/>
            <Carousel className={animateShift}>
                {cards[0]}
                {cards[1]}
                {cards[2]}
                {cards[3]}
                {cards[4]}
            </Carousel>
        </Wrapper>
    );
}

export default Slider;