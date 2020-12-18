import {useState} from "react";
import {Card} from "../Card";
import img1 from "../../images/mountain/mountain-1-sm.jpeg"
import {Image} from "../Image.styles";
import {ArrowBtn, Carousel, Wrapper} from "./Slider.styles";

export const Slider = () => {

    const [animateShift, setAnimateShift] = useState("");
    const [cards, setCards] = useState([
        <Card>
            <h2>mountains</h2>
            <Image src={img1} alt="Lakeside and mountain sides."/>
            <p>take it easy, enjoy the vistas.</p>
            <p>Trübsee, Schweiz</p>
            <p>From $120 a night</p>
        </Card>,
        <Card>
            <h2>lakeside</h2>
            <Image src={img1} alt="Another site with a view."/>
            <p>take it easy, enjoy the vistas.</p>
            <p>Trübsee, Schweiz</p>
            <p>From $210 a night</p>
        </Card>,
        <Card>
            <h2>mountains</h2>
            <Image src={img1} alt="A third site and a view."/>
            <p>take it easy, enjoy the vistas.</p>
            <p>Trübsee, Schweiz</p>
            <p>From $150 a night</p>
        </Card>,
        <Card>
            <h2>far away</h2>
            <Image src={img1} alt="A forth may be with you."/>
            <p>Limited time only!</p>
            <p>Alderaan</p>
            <p>From $4 a night</p>
        </Card>,
        <Card>
            <h2>scoobi doo</h2>
            <Image src={img1} alt="A forth may be with you."/>
            <p>Limited time only!</p>
            <p>Mystery Bus</p>
            <p>For free</p>
        </Card>]);

    const shiftLeft = () => {
        console.log("Animate Left");

        setAnimateShift("animate-l");
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

    const shiftRight = () => {
        console.log("Animate Right");

        setAnimateShift("animate-r");
        setTimeout(() => {
            setCards([
                cards[4],
                cards[0],
                cards[1],
                cards[2],
                cards[3],
            ]);
            setAnimateShift("");
        }, 800);

    }

    return (
        <Wrapper>
            <ArrowBtn className="left" onClick={shiftLeft} />
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