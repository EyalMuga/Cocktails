import { useState } from "react";
import { Button, Form, Stack } from "react-bootstrap";
import { IMG_DATA } from "./imgsData.js";
import SearchImg from "./SearchImg";

export default function SearchForm(props) {
    const [searchText, setSearchText] = useState("");
    const [currImgUrl, setCurrImgUrl] = useState(null);
    const [imgCounter, setImgCounter] = useState(0);
    const [totalSearch, setTotalSearch] = useState(0);
    const [numberPics, setNumberPics] = useState(0);
    const [imgIndex, setImgIndex] = useState(0);

    const handleTextSubmit = (event) => {
        event.preventDefault();
        console.log(IMG_DATA);

        if (searchText.toLowerCase() in IMG_DATA) {
            setCurrImgUrl(IMG_DATA[searchText.toLowerCase()][0]);
            setNumberPics(IMG_DATA[searchText.toLowerCase()].length);
            setTotalSearch(totalSearch + 1);
            setImgCounter(imgCounter + 1);
        } else {
            console.log(IMG_DATA.searchText);
            setCurrImgUrl(IMG_DATA["notfound"]);
            setTotalSearch(totalSearch + 1);
        }
    };

    return (
        <Stack gap={5} className="col-md-5 mx-auto">
            <Form className="col-md-5 mx-auto" onSubmit={handleTextSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Search for image:</Form.Label>
                    {/* Controlled component */}
                    <Form.Control
                        type="text"
                        placeholder="Insert your text here"
                        value={searchText}
                        onChange={(event) => {
                            setSearchText(event.target.value);
                        }}
                    />
                    {/* buttons next to each other with spaces  */}
                </Form.Group>
                <div>
                    <div>
                        <Button  variant="primary" type="submit" class="col-md-5 mx-auto">
                            Show
                        </Button>
                    </div>
                    <div>
                        {searchText && (
                            <Button
                                variant="danger"
                                class="col"
                                onClick={() => {
                                    setCurrImgUrl(null);
                                    setSearchText("");
                                }}
                            >
                                Clear
                            </Button>
                        )}
                    </div>
                    <div>
                        <p>Number of searches: {totalSearch}</p>
                        <p>Number of images found: {imgCounter}</p>
                        {currImgUrl && (
                            <p>
                                We have {numberPics} pictures of {searchText}s
                            </p>
                        )}
                    </div>
                </div>
                <div>
                    <div>
                        {numberPics > 1 && imgIndex > 0 && (
                            <Button
                                variant="primary"
                                class="col"
                                onClick={() => {
                                    setCurrImgUrl(
                                        IMG_DATA[searchText.toLowerCase()][
                                            imgIndex
                                        ]
                                    );
                                    setImgIndex(imgIndex - 1);
                                }}
                            >
                                Previous
                            </Button>
                        )}
                    </div>
                    <div>
                        {imgIndex < numberPics - 1 && numberPics > 1 && (
                            <Button
                                onClick={() => {
                                    setCurrImgUrl(
                                        IMG_DATA[searchText.toLowerCase()][
                                            imgIndex
                                        ]
                                    );
                                    setImgIndex(imgIndex + 1);
                                }}
                            >
                                next
                            </Button>
                        )}
                    </div>
                </div>
            </Form>
            {currImgUrl && <SearchImg imgUrl={currImgUrl} />}
        </Stack>
    );
}
