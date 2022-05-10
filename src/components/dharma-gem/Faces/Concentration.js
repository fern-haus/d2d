import { getPath } from "./scripts";
import Heading from "../Heading";
import { paliWords } from "../../../data";

export default function Concentration() {
    const { path, pali } = getPath("concentration"),
        fourMeditatives = path.parts[0],
        mediPali = fourMeditatives.pali[0];

    return (
        <>
            <Heading {...{ pali, suttas: fourMeditatives.suttas }} />
            <div className="accent">{fourMeditatives.definition}</div>
            <div className="accent">
                ({paliWords[mediPali]}: <em>{mediPali}</em>)
            </div>
            <div className="spacer"></div>
            <ol>
                {fourMeditatives.parts.map((part) => (
                    <li key={part}>{part}</li>
                ))}
            </ol>
        </>
    );
}
