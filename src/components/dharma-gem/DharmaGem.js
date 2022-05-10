import "../../css/dharma-gem/jewel.css";
import React, { useEffect, useState } from "react";
import { dharmaLists, justPaths, paliWords, thePath } from "../../data";
import Banner from "../Banner";
import Paths from "./Paths";
import ListBox from "../ListBox";
import Understanding from "./Faces/Understanding";
import SimpleList from "./Faces/SimpleList";
import Effort from "./Faces/Effort";
import Concentration from "./Faces/Concentration";
import Mindfulness from "./Faces/Mindfulness";

export default function DharmaGem() {
    const [path, setPath] = useState(undefined),
        // set to undefined, not "CLOSED"
        // so that the clicked className will be removed
        // on first load:
        [list, setList] = useState(undefined),
        [pathsOpen, setPathsOpen] = useState(undefined),
        [navOpen, setNavOpen] = useState(undefined);

    useEffect(() => {
        const margins = 100 * 2,
            baseDim = 480,
            breakPoint = margins + baseDim;
        window.screen.width < breakPoint &&
            window.scrollTo((breakPoint - window.screen.width) / 2, 0);
    }, []);

    const faces = [
        <Understanding {...{ setList }} />,
        <SimpleList english="thought" />,
        <SimpleList english="speech" />,
        <SimpleList english="action" />,
        <SimpleList english="livelihood" />,
        <Effort />,
        <Mindfulness {...{ setPath }} />,
        <Concentration />,
    ];

    const getPathText = (pathRank) => {
        return (
            <div className="face">
                <div className="side-triangle left"></div>
                <div className="side-triangle right"></div>
                {faces[pathRank - 1]}
            </div>
        );
    };

    return (
        <>
            <Banner {...{ isGem: true, navOpen }} />
            <div id="dharma-gem">
                <Paths
                    {...{
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
                    }}
                />
                <div id="scene-container">
                    <div
                        id="scene"
                        className={
                            (pathsOpen !== undefined ||
                                navOpen !== undefined) &&
                            !pathsOpen &&
                            !navOpen
                                ? "clicked"
                                : ""
                        }
                    >
                        <div id="jewel" className={`jewel side${path || 1}`}>
                            <div className="pyramid top">
                                {getPathText(1)}
                                {getPathText(2)}
                                {getPathText(3)}
                                {getPathText(4)}
                            </div>
                            <div className="pyramid bottom">
                                {getPathText(5)}
                                {getPathText(6)}
                                {getPathText(7)}
                                {getPathText(8)}
                            </div>
                        </div>
                    </div>
                </div>
                <div id="gem-list-boxes">
                    {Object.keys(dharmaLists).map((key) => (
                        <ListBox
                            {...{
                                key: `jewel-list-box-${key}`,
                                title: key,
                                list,
                                setList,
                                dharmaLists,
                                paliWords,
                            }}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}
