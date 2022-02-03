import './App.scss';
import Header from "./components/c1-header";
import Routers from "./route";
import {useState} from "react";
import Container from "./common/container/container";
import Footer from "./components/c7-footer";
import {useSelector} from "react-redux";

function App() {
    const [navigate, setNavigate] = useState(window.location.hash.slice(1) || '/')
    const [forceUpdate, setForceUpdate] = useState(1)
    const basket = useSelector((state) => state.cardItems.basket)
    const liked = useSelector((state) => state.cardItems.liked)

    const forceUpdateHelper = () => {
        setForceUpdate(forceUpdate + 1)
    }

    return (
        <div className="App">
            <Header setNavigate={setNavigate} navigate={navigate} lengthBasket={basket.length}
                    lengthLiked={liked.length}/>
            <Container>
                <Routers basket={basket} liked={liked} forceUpdateHelper={forceUpdateHelper}/>
            </Container>
            <Footer/>
            <div id="vk_community_messages"/>
        </div>
    );
}

export default App;
