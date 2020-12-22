import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faBed,
    faCreditCard, faHotTub,
    faMapMarkerAlt,
    faRestroom,
    faUtensils,
    faWifi
} from "@fortawesome/free-solid-svg-icons";
import {Arrow, FlexMix, Indicator, InfoGrid, Switcher, Wrapper} from "./Feature.styles";
import mountain from "../../images/mountain/mountain-1-md.jpeg";
import {Image} from "../Image.styles";
import {useState, useEffect} from "react";


const Feature = () => {

    const [indicatorIsActive, setIndicatorIsActive] = useState(false);
    const [lodging, setLodging] = useState(
        {
            tagline: "fishing, skiing, mountaineering are a few of the activities close by. live the nature from this cabin",
            image: {mountain}
        }
    );

    const indicatorClick = () => {
        setIndicatorIsActive(!indicatorIsActive);
    }

    useEffect(() => {
        fetch("https://localhost:8000/api/lodges?page=1")
            .then(res => res.json())
            .then(
                (result) => {
                    const lodge = result["hydra:member"][0];
                    setLodging(
                        {
                            tagline: lodge.tagline,
                            image: lodge.images[0].path
                        }
                    )
                }
            )
    }, []);

    return (
        <Wrapper>
            <div className="flex-row">
                <h2>a calm spot</h2>
                <p>within 30km</p>
            </div>

            <Switcher>
                <Arrow onClick={indicatorClick} className={indicatorIsActive ? "active" : ""} />
                <Indicator onClick={indicatorClick} className={indicatorIsActive ? "active" : ""}>
                    <FontAwesomeIcon icon={faMapMarkerAlt}/>
                </Indicator>
                <Image src={lodging.image} alt=""/>
            </Switcher>

            <FlexMix>
                <div className="flex-row">
                    <p>{lodging.tagline}</p>
                </div>

                <InfoGrid>
                    <div className="fa-container"><FontAwesomeIcon icon={faBed}/></div><p>4 bed</p>
                    <div className="fa-container"><FontAwesomeIcon icon={faCreditCard}/></div><p>$120/night</p>
                    <div className="fa-container"><FontAwesomeIcon icon={faWifi}/></div><p>Internet</p>
                    <div className="fa-container"><FontAwesomeIcon icon={faUtensils}/></div><p>Kitchenette</p>
                    <div className="fa-container"><FontAwesomeIcon icon={faRestroom}/></div><p>Restroom</p>
                    <div className="fa-container"><FontAwesomeIcon icon={faHotTub}/></div><p>Hot tub</p>
                </InfoGrid>
            </FlexMix>
        </Wrapper>
    );
}
export default Feature;