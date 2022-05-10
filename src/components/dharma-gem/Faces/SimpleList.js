import { getPath } from "./scripts";
import Heading from "../Heading";

export default function SimpleList({ english }) {
    const { path, pali, suttas } = getPath(english);

    return (
        <>
            <Heading {...{ pali, suttas }} />
            <ul>
                {path.parts.map((part) => (
                    <li key={part}>{part}</li>
                ))}
            </ul>
        </>
    );
}
