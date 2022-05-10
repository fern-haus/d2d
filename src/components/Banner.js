import "../css/banner/banner.css";
import { Link } from "react-router-dom";

export default function Banner({ isGem, navOpen }) {
    const links = (
        <>
            <Link to="../d2d/dharma-gem">Dharma Gem</Link>
            <Link to="../d2d/dharma-lookup">Dharma Lookup</Link>
            <Link to="../d2d/dharma-quiz">Dharma Quiz</Link>
            <Link to="../d2d/pali-lookup">Pali Lookup</Link>
            <Link to="../d2d/pali-quiz">Pali Quiz</Link>
        </>
    );

    return (
        <>
            <div
                id="navigation"
                className={`nav-${navOpen ? "open" : "closed"} ${
                    isGem ? "gem" : "not-gem"
                }`}
            >
                <h2>Door 2 Dharma</h2>
                <Link to="../d2d">Home</Link>
                {links}
            </div>
            {!isGem && (
                <>
                    <div
                        id="hamburger"
                        className={`hamburger-closed ${
                            isGem ? "gem" : "not-gem"
                        }`}
                        onClick={() => toggleNav({ isGem })}
                    >
                        <div id="top-line"></div>
                        <div id="mid-line"></div>
                        <div id="btm-line"></div>
                    </div>
                    <div className="banner">
                        <Link to="../d2d">Door 2 Dharma</Link>
                        {links}
                    </div>
                </>
            )}
        </>
    );
}

function toggleNav({ isGem }) {
    const nav = document.getElementById("navigation"),
        hamburger = document.getElementById("hamburger"),
        cn = nav.className.includes("nav-open") ? "nav-closed" : "nav-open",
        gem = isGem ? "gem" : "not-gem";
    nav.className = cn + " " + gem;
    hamburger &&
        (hamburger.className = "hamburger-" + cn.split("-")[1] + " " + gem);
}

export { toggleNav };
