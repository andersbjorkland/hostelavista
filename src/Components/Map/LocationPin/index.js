import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'
import {Wrapper} from "../Map.styles";

const LocationPin = () => {
    return (
        <Wrapper>
            <FontAwesomeIcon className="pin" icon={faMapMarkerAlt} size="4x" color="red"/>
        </Wrapper>

    );
}

export default LocationPin;