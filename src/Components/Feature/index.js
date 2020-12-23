import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faBed,
    faCreditCard, faHotTub,
    faMapMarkerAlt,
    faRestroom,
    faUtensils,
    faWifi,
    faBell
} from "@fortawesome/free-solid-svg-icons";
import {Arrow, FlexMix, FlexRow, ImagePlaceholder, Indicator, InfoGrid, Switcher, Wrapper} from "./Feature.styles";
import mountain from "../../images/mountain/mountain-1-md.jpeg";
import {Image} from "../Image.styles";
import {useState, useEffect} from "react";
import Button from "../Button";


const Feature = () => {

    const faIcons = {
        faBed: faBed,
        faCreditCard: faCreditCard,
        faHotTub: faHotTub,
        faMapMarkerAlt: faMapMarkerAlt,
        faRestroom: faRestroom,
        faUtensils: faUtensils,
        faWifi: faWifi,
        faBell: faBell

    }
    const [indicatorIsActive, setIndicatorIsActive] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [lodging, setLodging] = useState(
        {
            tagline: "",
            image: {mountain}
        }
    );
    const [infoGrid, setInfoGrid] = useState(
        <InfoGrid>
            <div className="fa-container"><FontAwesomeIcon icon={faBed}/></div><p>4 bed</p>
            <div className="fa-container"><FontAwesomeIcon icon={faCreditCard}/></div><p>$120/night</p>
            <div className="fa-container"><FontAwesomeIcon icon={faWifi}/></div><p>Internet</p>
            <div className="fa-container"><FontAwesomeIcon icon={faUtensils}/></div><p>Kitchenette</p>
            <div className="fa-container"><FontAwesomeIcon icon={faRestroom}/></div><p>Restroom</p>
            <div className="fa-container"><FontAwesomeIcon icon={faHotTub}/></div><p>Hot tub</p>
        </InfoGrid>
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
                    const features = lodge.features;
                    const featureDivs = features.map(feat => {
                        return (
                            <div key={feat.name}>
                                <div className="fa-container">
                                    <FontAwesomeIcon icon={faIcons[feat.faCode]}/>
                                </div>
                                <p>{feat.name}</p>
                            </div>
                        );
                    });
                    setLodging(
                        {
                            tagline: lodge.tagline,
                            image: lodge.images[0]
                        }
                    );
                    setInfoGrid(
                        <InfoGrid>
                            <div>
                                <div className="fa-container"><FontAwesomeIcon icon={faBed}/></div><p>{lodge.numberOfBeds} bed</p>
                            </div>
                            <div>
                                <div className="fa-container"><FontAwesomeIcon icon={faCreditCard}/></div><p>${lodge.pricePerNight}/night</p>
                            </div>
                            {featureDivs}
                        </InfoGrid>
                    );
                    setIsLoading(false);
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
                {isLoading ? <ImagePlaceholder/> : <Image src={lodging.image.path} alt={lodging.image.alt}/>}
            </Switcher>

            <FlexMix>
                <div className="flex-row">
                    <p>{lodging.tagline}</p>
                </div>

                {!isLoading && infoGrid}
            </FlexMix>
            <FlexRow>
                <Button outlined={true}>Read more</Button>
                <Button>Book now</Button>
            </FlexRow>
        </Wrapper>
    );
}
export default Feature;