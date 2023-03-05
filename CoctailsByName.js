import axios from "axios";
import { useEffect, useState } from "react";
import CoctailItem from "./CoctailItetm";

export default function CoctailByName(props) {
    console.log("rendering CoctailByName");

    const [coctail, setCoctail] = useState([]);

    useEffect(() => {
        axios
            .get(
                "http://www.thecocktaildb.com/api/json/v1/1/search.php?s=" +
                    props.name
            )
            .then((response) => {
                console.log(response);
                if (response.data.drinks === null) {
                    setCoctail([]);
                } else {
                    setCoctail(response.data.drinks[0]);
                }
            });
    }, [props.name])

    return (
        <div style={{ backgroundColor: 'white', opacity: 0.879}}>
            <h1>Cocktail by name {props.name}</h1>
            <h5>found: {coctail.length} coctails</h5>
            <ul>
                {coctail.length === 0 && <li> No cocktails found,Get a Beer </li>}
                <CoctailItem name={coctail.strDrink} />
            </ul>
        </div>
    )
}
