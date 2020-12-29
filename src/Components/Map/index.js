import GoogleMapReact from 'google-map-react';
import LocationPin from "./LocationPin";
import {Wrapper} from "./Map.styles";

const defaultLocation = {
    address: '1600 Amphitheatre Parkway, Mountain View, california.',
    lat: 37.42216,
    lng: -122.08427,
}

const Map = ({location = defaultLocation, zoomLevel = 8, height="20rem", width="100%"}) => {
    return (
        <Wrapper height={height} width={width}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_APIKEY}}
                defaultCenter={location}
                defaultZoom={zoomLevel}
            >
                <LocationPin
                    lat={location.lat}
                    lng={location.lng}
                />
            </GoogleMapReact>
        </Wrapper>
    );
}

export default Map;