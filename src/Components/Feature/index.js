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
import Map from "../Map";
import {Link} from "react-router-dom";


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
    const [featuredImage, setFeaturedImage] = useState(<ImagePlaceholder/>);
    const [lodging, setLodging] = useState(
        {
            id: -1,
            tagline: "",
            image: {mountain}
        }
    );
    const [map, setMap] = useState(null);

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

                    console.log(lodge);
                    const parsedLodge = {
                        id: lodge.id,
                        tagline: lodge.tagline,
                        image: lodge.images[0],
                        location: {
                            address: lodge.address.street + ", " + lodge.address.zipcode + ", " + lodge.address.country,
                            lat: parseInt(lodge.latitude),
                            lng: parseInt(lodge.longitude)
                        }
                    };

                    setLodging(parsedLodge);
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
                    setFeaturedImage(<Image id="featured-image" src={lodge.images[0].path} alt={lodge.images[0].alt} />);

                    setIsLoading(false);
                    setTimeout(() => setMapHeight(parsedLodge), 1000);
                }
            )

    }, []);

    const setMapHeight = (parsedLodge) => {
        const imageElement = document.getElementById("featured-image");
        const location = parsedLodge.location;
        if (imageElement) {
            setMap(<Map height={imageElement.offsetHeight + "px"} width={imageElement.offsetWidth + "px"} location={location}/>);
        } else {
            setMap(<Map location={location}/>);
        }
    }


    return (
        <Wrapper>
            <div className="flex-row">
                <h2>a calm spot</h2>
                <p>within 30km</p>
            </div>

            { indicatorIsActive ? (
                <Switcher>
                    <Arrow onClick={indicatorClick}  />
                    <Indicator onClick={indicatorClick} className={indicatorIsActive ? "active" : ""}>
                        <FontAwesomeIcon icon={faMapMarkerAlt}/>
                    </Indicator>
                    { map }
                </Switcher>
                ) : (
                <Switcher>
                    <Arrow onClick={indicatorClick}  />
                    <Indicator onClick={indicatorClick} className={indicatorIsActive ? "active" : ""}>
                        <FontAwesomeIcon icon={faMapMarkerAlt}/>
                    </Indicator>
                    { featuredImage }
                </Switcher>
                )}
            <FlexMix>
                <div className="flex-row">
                    <p>{lodging.tagline}</p>
                </div>

                {!isLoading && infoGrid}
            </FlexMix>
            <FlexRow>
                <Button outlined={true}><Link to={"/details/" + lodging.id}>Read more</Link></Button>
                <Button>Book now</Button>
            </FlexRow>
        </Wrapper>
    );
}
export default Feature;