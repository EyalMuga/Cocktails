import axios from "axios";
import * as React from "react";
import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";

const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
});

export default function CoctailItem(props) {
    console.log("rendering CoctailItem")
    const [coctail, setCoctail] = useState([])

    useEffect(() => {
        axios
            .get(
                "http://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + props.name
            )
            .then((response) => {
                console.log(response)
                if (response.data.drinks === null) {
                    setCoctail([]);
                } else {
                    setCoctail(response.data.drinks[0]);
                }
            })
    }, [props.name])
// DISPLAY TWO COCTAILS IN ONE ROW
    return (
        <Paper 
            sx={{
                padding: 2,
                p: 2,
                margin: "auto",
                maxWidth: 500,
                flexGrow: 1,
                backgroundColor: (theme) =>
                    theme.palette.mode === "dark" ? "#1A2027" : "#fff",
            }}
        >
        <Grid container spacing={2}>
            <Grid container spacing={3}>
                <Grid item>
                    <ButtonBase sx={{ width: 130, height: 130 }}>
                        <Img
                            src={coctail.strDrinkThumb}
                            alt={coctail.strDrink}
                        />
                    </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography
                                gutterBottom
                                variant="subtitle1"
                                component="div"
                            >
                                {coctail.strDrink}
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                {coctail.strIngredient1}{" "}
                                {coctail.strIngredient2}{" "}
                                {coctail.strIngredient3}{" "}
                                {coctail.strIngredient4}{" "}
                                {coctail.strIngredient5}{" "}
                                {coctail.strIngredient6}{" "}
                                {coctail.strIngredient7}{" "}
                                {coctail.strIngredient8}{" "}
                                {coctail.strIngredient9}{" "}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Instructions: {coctail.strInstructions}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body2" style={{ cursor: "pointer" }}>
                                Glass: {coctail.strGlass}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle1">ID: {coctail.idDrink}</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Paper>
)
}
