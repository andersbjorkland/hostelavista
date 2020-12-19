import Card from "../Card";
import {Image} from "../Image.styles";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCompass, faCreditCard, faMountain} from "@fortawesome/free-solid-svg-icons";
import Button from "../Button";

const TravelCard = (props) => (
    <Card>
        <h2>{props.heading}</h2>
        <Image src={props.image} alt="A third site and a view."/>
        <div className="flex-row"><div className="fa-container"><FontAwesomeIcon icon={faMountain}/></div><p>{props.pitch}</p></div>
        <div className="flex-row"><div className="fa-container"><FontAwesomeIcon icon={faCompass}/></div><p>{props.location}</p></div>
        <div className="flex-row"><div className="fa-container"><FontAwesomeIcon icon={faCreditCard}/></div><p>{props.pricing}</p></div>
        <Button>Details</Button>
    </Card>
);

export default TravelCard;