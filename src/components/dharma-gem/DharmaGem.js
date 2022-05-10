import { useEffect } from "react";
import { dharmaLists, justPaths, paliWords, thePath } from "../../data";
import Banner from "../Banner";
import Jewel from "./Jewel";

const DharmaGem = () => {
    useEffect(() => {
        const margins = 100 * 2,
            baseDim = 480,
            breakPoint = margins + baseDim;
        window.screen.width < breakPoint &&
            window.scrollTo((breakPoint - window.screen.width) / 2, 0);
    }, []);

    return (
        <>
            <Banner isGem={true} />
            <div id="dharma-gem">
                <Jewel {...{ dharmaLists, justPaths, paliWords, thePath }} />
            </div>
        </>
    );
};

export default DharmaGem;
