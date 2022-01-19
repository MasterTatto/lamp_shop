import './App.scss';
import Header from "./components/c1-header";
import Routers from "./route";
import {useState} from "react";
import Container from "./common/container/container";
import Footer from "./components/c7-footer";

function App() {
    const [navigate, setNavigate] = useState(window.location.hash.slice(1) || '/')
    const [basket, setBasket] = useState([])
    return (
        <div className="App">
            <Header setNavigate={setNavigate} navigate={navigate} lengthBasket={basket.length}/>
            <Container>
                <Routers basket={basket} setBasket={setBasket}/>
            </Container>
            <Footer/>
            <div id="vk_community_messages"/>
        </div>
    );
}

export default App;
