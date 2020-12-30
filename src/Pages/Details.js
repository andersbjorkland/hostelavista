import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import FontAwesomeObjectful from "../Utils/FontAwesomeObjectful";

const Details = () => {

    let { id } = useParams();
    const [content, setContent] = useState(null);

    useEffect(() => {
        fetch("https://localhost:8000/api/lodges/" + id)
            .then(res => res.json())
            .then(
                (result) => {
                    const lodge = result;
                    const features = lodge.features;
                    const featureDivs = features.map(feat => {
                        return (
                            <div key={feat.name}>
                                <FontAwesomeObjectful icon={feat.faCode}/>
                                <p>{feat.name}</p>
                            </div>
                        );
                    });
                    setContent(featureDivs);
                });
    }, [id]);

    return (
        <div>
            <h2>Details for {id}</h2>
            {content}
        </div>
    );
}

export default Details;