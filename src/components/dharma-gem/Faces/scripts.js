import { justPaths, paliWords } from "../../../data";

function getPath(english) {
    const pali = Object.entries(paliWords).find((entry) =>
        entry.includes(english)
    )[0];
    const path = justPaths.find((path) => path.pali[0] === pali),
        { suttas } = path;
    return { path, pali, suttas };
}

export { getPath };
