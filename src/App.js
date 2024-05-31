import React, {useContext} from 'react';

import MainHeader from "./components/MainHeader/MainHeader";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import AuthContext from "./context/AuthContext";

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
            </>
        );
}

export default App;