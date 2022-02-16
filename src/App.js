import './App.css';
import Toolbar from "./components/Toolbar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import StartGameWindow from "./pages/StartGameWindow";
import MainWindow from "./pages/MainWindow";
import TraderWindow from "./pages/TraderWindow";
import ArenaWindow from "./pages/ArenaWindow";
import {useSelector} from "react-redux";

function App() {

const char = useSelector((state)=>state.character.value.character)

    return (
        <div className="App">
            <BrowserRouter>
            {char && <Toolbar/>}

                <Routes>
                    <Route path="/" element={<StartGameWindow/>}  />
                    <Route path="/main" element={<MainWindow/>}/>
                    <Route path="/trader" element={<TraderWindow/>}/>
                    <Route path="/arena" element={<ArenaWindow/>}/>
                </Routes>

            </BrowserRouter>
        </div>
    );
}
export default App;
