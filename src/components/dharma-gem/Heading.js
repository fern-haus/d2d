import React from "react";
import { capitalize } from "../ListBox";
import { paliWords } from "../../data";

export default function Heading({ pali, suttas }) {
    return (
        <>
            <PaliWord {...{ pali }} />
            <Suttas {...{ suttas }} />
            <span className="accent">
                Right {capitalize(paliWords[pali])} includes:
            </span>
            <div className="spacer"></div>
        </>
    );
}

function PaliWord({ pali }) {
    return (
        <div className="pali-word">
            <div>
                <span>{`${pali}`}</span> ({paliWords[pali]})
            </div>
        </div>
    );
}

function Sutta({ sutta }) {
    return (
        <div className="sutta">
            <a href={sutta.link} target="_blank" rel="noreferrer">
                {sutta.title}
                <br />
                {`(${sutta.section} ${sutta.verse})`}
            </a>
        </div>
    );
}

function Suttas({ suttas }) {
    return (
        <div className="suttas">
            {suttas?.map((sutta) => (
                <Sutta {...{ key: sutta.title, sutta }} />
            ))}
        </div>
    );
}
