import axios from "axios";
import { useEffect, useState } from "react";
import CoctailItem from "./CoctailItetm";


export default function CoctailsByLetter(props) {
    const [coctails, setCoctails] = useState([])
    useEffect(() => {
        axios
            .get(
                "http://www.thecocktaildb.com/api/json/v1/1/search.php?f=" +
                    props.letter
            )
            .then((response) => {
                console.log(response)
                setCoctails(response.data.drinks)
                if (response.data.drinks === null) {
                    setCoctails([]);
                }
            })
    }, [props.letter])
    return (
        <div style={{ backgroundColor: 'white', opacity: 0.879}}>
            <h1>Cocktails by letter {props.letter}</h1>
            <h5>found: {coctails.length} coctails</h5>
            <ul>
                {coctails.length === 0 && <li> No cocktails found,Get a Beer </li>}
                {coctails.map((coctail) => {
                    return (
                        <CoctailItem    
                            name={coctail.strDrink}
                        />
                    )
                })}
            </ul>
        </div>
    )
}
