import axios from "axios";
import { useEffect, useState } from "react";
import CoctailsByLetter from "./CoctailsByLetter";
import CoctailByName from "./CoctailsByName";
// import CoctailItem from "./CoctailItem";
import { Container, Typography, Stack, Button} from "@mui/material"


const COCTAILS_URL = "http://www.thecocktaildb.com/api/json/v1/1/search.php?f=";
const COCTAILS_BY_NAME_URL =    "http://www.thecocktaildb.com/api/json/v1/1/search.php?s="; 

export default function Coctails(props) {
    console.log("rendering Coctails")
    const [letter, setLetter] = useState("")
    const [submittedLetter, setSubmittedLetter] = useState(false)
    const [name, setName] = useState("")
    const [submittedName, setSubmittedName] = useState(false)
    const [coctails, setCoctails] = useState([])
    
    useEffect(() => {
        if (submittedLetter) {
            axios.get(COCTAILS_URL + letter).then((response) => {
                console.log(response);
                setCoctails(response.data.drinks);
            })
        }
    }, [submittedLetter, letter]);

    useEffect(() => {
        if (submittedName) {
            axios.get(COCTAILS_BY_NAME_URL + name).then((response) => {
                console.log(response);
                setCoctails(response.data.drinks);
            })
        }

    }, [submittedName, name]);


    return (
        <>
        <></>
            <Container maxWidth="sm">
                <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="text.primary"
                    gutterBottom
                >
                    Welcome to Cocktail's App 
                </Typography>
                <Stack>
                    <Typography
                        variant="h6"
                        align="center"
                        color="text.secondary"
                        paragraph
                    >
                        Search by name
                    </Typography>
                    <Stack
                        direction="row"
                        spacing={2}
                        justifyContent="center"
                    >
                        <input
                            onChange={(event) => {
                                setName(event.target.value)

                            }}>
                        </input>
                        <Button
                            id = "search"
                            variant="contained"
                            onClick={() => {
                                setSubmittedLetter(false);
                                setSubmittedName(true);
                            }}
                        >
                            Search
                        </Button>
                    </Stack>
                </Stack>
                <Stack
                    sx={{ pt: 2 }}
                    direction="row"
                    spacing={2}
                    justifyContent="center"
                >
                    <Stack>
                        <Typography
                            variant="h6"
                            align="center"
                            color="text.secondary"
                            paragraph
                        >
                            Search by letter
                        </Typography>
                        <Stack
                            direction={{ xs: "column", sm: "row" }}
                            spacing={{ xs: 0.1, sm: 0.1, md: 0.1 }}
                        >
                            <Button
                                variant="contained"
                                onClick={() => {
                                    setLetter("a");
                                    setSubmittedLetter(true)
                                    }}
                            >
                                A
                            </Button>
                            <Button
                                variant="contained"
                                onClick={() => {
                                    setLetter("b");
                                    setSubmittedLetter(true);
                                }}
                            >
                                B
                            </Button>
                            <Button
                                variant="contained"
                                onClick={() => {
                                    setLetter("c");
                                    setSubmittedLetter(true);
                                }}
                            >
                                C
                            </Button>
                            <Button
                                variant="contained"
                                onClick={() => {
                                    setLetter("d");
                                    setSubmittedLetter(true);
                                }}
                            >
                                D
                            </Button>
                            <Button
                                variant="contained"
                                onClick={() => {
                                    setLetter("e");
                                    setSubmittedLetter(true);
                                }}
                            >
                                E
                            </Button>
                        </Stack>
                        <Stack>
                            <Stack
                                direction={{ xs: "column", sm: "row" }}
                                spacing={{ xs: 0.1, sm: 0.1, md: 0.1 }}
                            >
                                <Button
                                    variant="contained"
                                    onClick={() => {
                                        setLetter("f");
                                        setSubmittedLetter(true);
                                    }}
                                >
                                    F
                                </Button>
                                <Button
                                    variant="contained"
                                    onClick={() => {
                                        setLetter("g");
                                        setSubmittedLetter(true);
                                    }}
                                >
                                    G
                                </Button>
                                <Button
                                    variant="contained"
                                    onClick={() => {
                                        setLetter("h");
                                        setSubmittedLetter(true);
                                    }}
                                >
                                    H
                                </Button>{" "}
                                <Button
                                    variant="contained"
                                    onClick={() => {
                                        setLetter("i");
                                        setSubmittedLetter(true);
                                    }}
                                >
                                    I
                                </Button>{" "}
                                <Button
                                    variant="contained"
                                    onClick={() => {
                                        setLetter("j");
                                        setSubmittedLetter(true);
                                    }}
                                >
                                    J
                                </Button>{" "}
                            </Stack>
                        </Stack>
                        <Stack>
                            <Stack
                                direction={{ xs: "column", sm: "row" }}
                                spacing={{ xs: 0.1, sm: 0.1, md: 0.1 }}
                            >
                                <Button
                                    variant="contained"
                                    onClick={() => {
                                        setLetter("k");
                                        setSubmittedLetter(true);
                                    }}
                                >
                                    K
                                </Button>
                                <Button
                                    variant="contained"
                                    onClick={() => {
                                        setLetter("l");
                                        setSubmittedLetter(true);
                                    }}
                                >
                                    L
                                </Button>
                                <Button
                                    variant="contained"
                                    onClick={() => {
                                        setLetter("m");
                                        setSubmittedLetter(true);
                                    }}
                                >
                                    M
                                </Button>{" "}
                                <Button
                                    variant="contained"
                                    onClick={() => {
                                        setLetter("n");
                                        setSubmittedLetter(true);
                                    }}
                                >
                                    N
                                </Button>{" "}
                                <Button
                                    variant="contained"
                                    onClick={() => {
                                        setLetter("o");
                                        setSubmittedLetter(true);
                                    }}
                                >
                                    O
                                </Button>{" "}
                            </Stack>
                        </Stack>
                        <Stack>
                            <Stack
                                direction={{ xs: "column", sm: "row" }}
                                spacing={{ xs: 0.1, sm: 0.1, md: 0.1 }}
                            >
                                <Button
                                    variant="contained"
                                    onClick={() => {
                                        setLetter("p");
                                        setSubmittedLetter(true);
                                    }}
                                >
                                    P
                                </Button>
                                <Button
                                    variant="contained"
                                    onClick={() => {
                                        setLetter("q");
                                        setSubmittedLetter(true);
                                    }}
                                >
                                    Q
                                </Button>
                                <Button
                                    variant="contained"
                                    onClick={() => {
                                        setLetter("r");
                                        setSubmittedLetter(true);
                                    }}
                                >
                                    R
                                </Button>{" "}
                                <Button
                                    variant="contained"
                                    onClick={() => {
                                        setLetter("s");
                                        setSubmittedLetter(true);
                                    }}
                                >
                                    S
                                </Button>{" "}
                                <Button
                                    variant="contained"
                                    onClick={() => {
                                        setLetter("t");
                                        setSubmittedLetter(true);
                                    }}
                                >
                                    T
                                </Button>{" "}
                            </Stack>
                        </Stack>
                        <Stack>
                            <Stack
                                direction={{ xs: "column", sm: "row" }}
                                spacing={{ xs: 0.1, sm: 0.1, md: 0.1 }}
                            >
                                <Button
                                    variant="contained"
                                    onClick={() => {
                                        setLetter("u");
                                        setSubmittedLetter(true);
                                    }}
                                >
                                    U
                                </Button>
                                <Button
                                    variant="contained"
                                    onClick={() => {
                                        setLetter("v");
                                        setSubmittedLetter(true);
                                    }}
                                >
                                    V
                                </Button>
                                <Button
                                    variant="contained"
                                    onClick={() => {
                                        setLetter("w");
                                        setSubmittedLetter(true);
                                    }}
                                >
                                    W
                                </Button>{" "}
                                <Button
                                    variant="contained"
                                    onClick={() => {
                                        setLetter("x");
                                        setSubmittedLetter(true);
                                    }}
                                >
                                    X
                                </Button>{" "}
                                <Button
                                    variant="contained"
                                    onClick={() => {
                                        setLetter("y");
                                        setSubmittedLetter(true);
                                    }}
                                >
                                    Y
                                </Button>{" "}
                            </Stack>
                        </Stack>
                        <Stack>
                            <Stack
                                direction={{ xs: "column", sm: "row" }}
                                spacing={{ xs: 0.1, sm: 0.1, md: 0.1 }}
                            >
                                <Button
                                    variant="contained"
                                    onClick={() => {
                                        setLetter("z");
                                        setSubmittedLetter(true);
                                    }}
                                >
                                    Z
                                </Button>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
            </Container>
            <Container>
                <Stack spacing={2}>
                    <Stack direction="row" spacing={2}>
                        <Button
                            variant="contained"
                            onClick={() => {
                                setLetter("");
                                setSubmittedLetter(false);
                                setSubmittedName(false)
                                
                            }}
                        >
                            Clear
                        </Button>
                    </Stack>
                    <Stack direction="row" spacing={2}>
                        <p>
                        {submittedLetter ? (
                            <CoctailsByLetter letter={letter} />
                        ) : (
                            submittedName ? (
                                <CoctailByName name={name}
                                />
                            ) : (
                                <></>
                            )
                        )}
                    </p>
                    </Stack>
                </Stack>
            </Container>
        </>
        )
    }
