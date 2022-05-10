import "../css/app/app.css";
import { Link } from "react-router-dom";

function App() {
    return (
        <div id="dharma-home">
            <header>
                <div id="name">
                    <div id="door">door</div>
                    <div id="two">2</div>
                    <div id="dharma">dharma</div>
                </div>
                <h2>
                    Study dharma &<br />
                    test your Buddhist knowledge.
                </h2>
                <div id="home-nav-links">
                    <Link to="dharma-gem">Dharma Gem</Link>
                    <Link to="dharma-lookup">Dharma Lookup</Link>
                    <Link to="dharma-quiz">Dharma Quiz</Link>
                    <br />
                    <Link to="pali-lookup">Pali Lookup</Link>
                    <Link to="pali-quiz">Pali Quiz</Link>
                </div>
            </header>
        </div>
    );
}

export default App;
