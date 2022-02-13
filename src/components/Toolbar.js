import {Link} from "react-router-dom";

const Toolbar = () => {

    return (
        <div className="toolbar">
            <Link to="/">Start Game Window</Link>
            <Link to="/main">Main Window</Link>
            <Link to="/trader">Trader Window</Link>
            <Link to="/arena">Arena Window</Link>

        </div>
    );
};

export default Toolbar;