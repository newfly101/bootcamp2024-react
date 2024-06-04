import React, {useContext} from 'react';

import MainHeader from "./components/MainHeader/MainHeader";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import AuthContext from "./context/AuthContext";
import ForwardCounter from "./components/ForwardCounter";
import BackwardCounter from "./components/BackwardCounter";

function App() {
        const context = useContext(AuthContext);

        console.log("context",context); // context값 확인용
        return (
            <>
                <MainHeader/>
                <main>
                    {!context.isLoggedIn && <Login/>}
                    {context.isLoggedIn && <Home/>}
                </main>
                    {/*<ForwardCounter />*/}
                    {/*<BackwardCounter />*/}
            </>
        );
}

export default App;