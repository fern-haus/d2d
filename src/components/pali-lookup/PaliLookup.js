import "../../css/pali-lookup/pali-lookup.css";
import { useEffect, useState } from "react";
import { paliWords } from "../../data";
import Banner from "../Banner";

const sortedPali = Object.keys(paliWords).sort(),
    sortedEng = Object.values(paliWords).sort();

export default function PaliLookup() {
    function findPair(word) {
        const [pali, english] = Object.entries(paliWords).find((entry) =>
            entry.includes(word)
        );
        return { pali, english };
    }

    const [pair, setPair] = useState(findPair(sortedPali[0]));

    useEffect(
        () =>
            Object.values(pair).forEach((word) =>
                document
                    .getElementById(word)
                    .scrollIntoView({ behavior: "smooth", block: "center" })
            ),
        [pair]
    );

    function Words({ words }) {
        return words.map((word) => (
            <div
                key={`word-${word}`}
                id={word}
                className={
                    Object.values(pair).find((value) => value === word)
                        ? "selected"
                        : "not-selected"
                }
                onClick={() => setPair(findPair(word))}
            >
                {word}
            </div>
        ));
    }

    return (
        <div id="pali-lookup">
            <div className="banner-container version-2">
                <Banner />
            </div>
            <div id="all-words">
                <div id="pali-words" className="words">
                    <Words words={sortedPali} />
                </div>
                <div id="eng-words" className="words">
                    <Words words={sortedEng} />
                </div>
            </div>
        </div>
    );
}
