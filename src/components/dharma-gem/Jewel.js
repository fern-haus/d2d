import "../../css/dharma-gem/jewel.css";
import React, { useEffect, useState } from "react";
import { justPaths } from "../../data";
import Paths from "./Paths";
import ListBox from "../ListBox";
// import Understanding from "./Faces/Understanding";
import Understanding from "./Faces/Understanding";
import SimpleList from "./Faces/SimpleList";
import Effort from "./Faces/Effort";
import Concentration from "./Faces/Concentration";
import Mindfulness from "./Faces/Mindfulness";

const Jewel = ({ dharmaLists, paliWords, thePath }) => {
    const [path, setPath] = useState(undefined),
        // set to undefined, not "CLOSED"
        // so that the clicked className will be removed
        // on first load:
        [list, setList] = useState(undefined);

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

    useEffect(() => {
        const cn = document.getElementById("scene").className;
        document.getElementById("scene").className =
            list !== "CLOSED" ? cn.replaceAll("clicked", "") : cn + " clicked";
    }, [list]);

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
            <Paths
                {...{
                    setPath,
                    list,
                    setList,
                    dharmaLists,
                    justPaths,
                    paliWords,
                    thePath,
                }}
            />
            <div id="scene-container">
                <div id="scene" className="">
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
        </>
    );
};

export default Jewel;
