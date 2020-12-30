import {
    faBed, faBell,
    faCreditCard,
    faHotTub,
    faMapMarkerAlt,
    faRestroom,
    faUtensils,
    faWifi
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

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

const FontAwesomeObjectful = ({icon}) => {
    return (
        <div className="fa-container">
            <FontAwesomeIcon icon={faIcons[icon]}/>
        </div>
    );
}

export default FontAwesomeObjectful;