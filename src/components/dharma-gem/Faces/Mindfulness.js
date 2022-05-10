import { getPath } from "./scripts";
import Heading from "../Heading";

export default function Mindfulness({ setPath }) {
    const { path, pali, suttas } = getPath("mindfulness"),
        [line, mentalObjs] = path.parts,
        joined = line.parts.join(", ");

    return (
        <>
            <Heading {...{ pali, suttas }} />
            {joined}
            <div className="spacer"></div>
            <div className="accent top-level">{mentalObjs.name}</div>
            {mentalObjs.parts
                .filter((part) => part.name !== "Four Noble Truths")
                .map((part) => (
                    <div key={part.name} className={`accent clickable`}>
                        {part.name}
                    </div>
                ))}
            <div className="spacer"></div>
            <div className="accent top-level">Four Noble Truths</div>
            <p>
                see{" "}
                <span className="accent clickable" onClick={() => setPath(1)}>
                    Right Understanding
                </span>
            </p>
        </>
    );
}
