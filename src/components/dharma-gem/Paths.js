import "../../css/dharma-gem/paths.css";
import { useEffect, useState } from "react";
import { toggleNav } from "../Banner";

const Paths = ({
    setPath,
    list,
    setList,
    dharmaLists,
    justPaths,
    paliWords,
    thePath,
}) => {
    const [isOpen, setIsOpen] = useState(undefined);

    useEffect(() => {
        const cn = document.getElementById("scene").className;
        document.getElementById("scene").className = isOpen
            ? cn.replaceAll("clicked", "")
            : isOpen !== undefined && cn + " clicked";
        // set to undefined, not "CLOSED"
        // so that the clicked className will be removed:
        isOpen && setList(undefined);
    }, [isOpen, setList]);

    function getPathGroups() {
        let result = {};
        thePath.forEach(
            (p) =>
                (result[`${p.pali} (${paliWords[p.pali]})`] = p.parts.map(
                    (part) => `${paliWords[part.pali[0]]}`
                ))
        );
        return result;
    }

    const pathGroups = getPathGroups(),
        pathNames = justPaths.map((path) => paliWords[path.pali]);

    function sidesHandler(path) {
        setPath(pathNames.indexOf(path) + 1);
        setIsOpen(false);
        console.log(pathNames.indexOf(path) + 1);
    }

    const processKey = (key) =>
        key
            .split(" (")
            .map((part, i) => (
                <div key={`processed-key-${key}-${part}`}>
                    {i === 1 ? "(" + part : part}
                </div>
            ));

    function listsDropdown() {
        let result = Object.keys(dharmaLists).map((key) => (
            <option value={key} key={key}>
                {key}
            </option>
        ));
        return (
            <select
                onChange={(e) => {
                    setList(e.target.value);
                    setIsOpen(false);
                }}
                value={list || "CLOSED"}
            >
                <option value="CLOSED" disabled>
                    BUDDHIST LISTS
                </option>
                {result}
            </select>
        );
    }

    return (
        <div id="paths" className={isOpen ? "open" : "closed"}>
            <div id="main">
                <div id="header">
                    The Noble Eightfold Path from the
                    <br />
                    <a href="./">
                        Saccavibhanga Sutta
                        <br />
                        (Majjhima Nikaya 141)
                    </a>
                </div>
                <div id="path-groups">
                    {Object.keys(pathGroups).map((key) => (
                        <div key={`path-group-${key}`} className="path-group">
                            {processKey(key)}
                            {pathGroups[key].map((path) => (
                                <button
                                    key={`path-button-${path}`}
                                    onClick={() => sidesHandler(path)}
                                >
                                    {path}
                                </button>
                            ))}
                        </div>
                    ))}
                </div>
                <div id="dropdowns-container">{listsDropdown()}</div>
            </div>
            <div id="links">
                <div onClick={() => toggleNav({ isGem: true })}>MENU</div>
                <div id="select-path" onClick={() => setIsOpen(!isOpen)}>
                    SELECT A PATH
                </div>
            </div>
        </div>
    );
};

export default Paths;
