import "../../css/dharma-lookup/dharma-lookup.css";
import { useState, useEffect } from "react";
import { dharmaLists, paliWords } from "../../data";
import Banner from "../Banner";
import ListBox, { capitalize } from "../ListBox";

const DharmaLookup = () => {
    const [fromTop, setFromTop] = useState(0);

    // set fromTop after rendering
    useEffect(() => setFromTop(window.innerHeight - 30), []);

    window.addEventListener("resize", () =>
        setFromTop(window.innerHeight - 30)
    );

    function scrollSectionHandler(event) {
        document.getElementById("dharma-lookup").scrollTo({
            top: document
                .getElementById(`${event.target.value} lookup`)
                .getBoundingClientRect().top,
            left: 0,
            behavior: "smooth",
        });
    }

    function backToTopHandler(event) {
        document.getElementById("dharma-lookup").scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }

    return (
        <div id="dharma-lookup">
            <div className="banner-container">
                <Banner />
            </div>
            <div
                id="back-to-top"
                style={{ top: fromTop }}
                onClick={(event) => backToTopHandler(event)}
            >
                ▲
            </div>
            <h1>Dharma Lookup</h1>
            <h2>Study Buddhist lists and concepts.</h2>
            <select onChange={(event) => scrollSectionHandler(event)}>
                {Object.keys(dharmaLists).map((option) => (
                    <option value={option} key={`lookup-option-${option}`}>
                        {capitalize(option)}
                    </option>
                ))}
            </select>
            {Object.keys(dharmaLists).map((key) => (
                <ListBox
                    {...{ dharmaLists, paliWords }}
                    title={key}
                    key={`lookup-list-box-${key}`}
                />
            ))}
        </div>
    );
};

export default DharmaLookup;
