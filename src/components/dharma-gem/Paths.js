import "../../css/dharma-gem/paths.css";

const Paths = ({
    setPath,
    list,
    setList,
    dharmaLists,
    justPaths,
    paliWords,
    thePath,
    pathsOpen,
    setPathsOpen,
    setNavOpen,
}) => {
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
        setPathsOpen(false);
        setNavOpen(false);
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
                    setPathsOpen(false);
                    setNavOpen(false);
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
        <div id="paths" className={pathsOpen ? "open" : "closed"}>
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
                <div
                    onClick={() => {
                        setNavOpen((navOpen) => !navOpen);
                        setPathsOpen(false);
                        setList(undefined);
                    }}
                >
                    MENU
                </div>
                <div
                    id="select-path"
                    onClick={() => {
                        setPathsOpen((path) => !path);
                        setNavOpen(false);
                        setList(undefined);
                    }}
                >
                    SELECT A PATH
                </div>
            </div>
        </div>
    );
};

export default Paths;
