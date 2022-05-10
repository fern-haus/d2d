import { paliWords } from "../../../data";
import { getPath } from "./scripts";
import Heading from "../Heading";
import React from "react";

export default function Understanding({ setList }) {
    const { path, pali, suttas } = getPath("understanding"),
        fourNobleTruths = path.parts[0],
        truths = fourNobleTruths.parts;

    function formatter({ obj, isFirst }) {
        return (
            <>
                <div className="accent">{obj.definition}</div>
                {obj.pali && (
                    <div className="accent">
                        ({paliWords[obj.pali]}: <em>{obj.pali}</em>)
                    </div>
                )}
                <p>
                    {obj.parts
                        .filter((part) => typeof part === "string")
                        .join(", ")}
                    {isFirst && <>, </>}{" "}
                    {obj.parts
                        .filter((part) => typeof part !== "string")
                        .map((part) => (
                            <span
                                key={part}
                                className="accent clickable"
                                onClick={() => setList(part.name)}
                            >
                                {part.name}
                            </span>
                        ))}
                </p>
            </>
        );
    }

    return (
        <>
            <Heading {...{ pali, suttas }} />
            <div className="accent top-level">{fourNobleTruths.name}</div>
            <div className="spacer"></div>
            {truths.map((truth, i) => (
                <React.Fragment key={`${truth} ${i}`}>
                    {formatter({ obj: truth, isFirst: !i })}
                    {truth.parts
                        .filter((part) => typeof part !== "string")
                        .map((part) => (
                            <React.Fragment key={part}>
                                {formatter({ obj: part })}
                            </React.Fragment>
                        ))}
                    <div className="spacer"></div>
                </React.Fragment>
            ))}
        </>
    );
}
