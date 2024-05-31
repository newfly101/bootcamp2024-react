import React, {useContext, useEffect, useState} from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';
import MainHeader from "./components/MainHeader/MainHeader";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import AuthContext from "./context/AuthContext";

function App() {
    const [usersList, setUsersList] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const addUserHandler = (uName, uAge) => {
        setUsersList((prevUsersList) => {
            return [
                ...prevUsersList,
                {name: uName, age: uAge, id: Math.random().toString()},
            ];
        });
    };
    // useEffect(() => {
    //     // 로그인 되면 isLoggedIn = true [or] isLoggedIn = false
    //     const getLogin = localStorage.getItem('isLoggedIn');
    //     getLogin ? setIsLoggedIn(true) : setIsLoggedIn(false);
    //     console.log("hello")
    // }, []);
    //
    // const loginHandler = (email, password) => {
    //     localStorage.setItem("isLoggedIn", email);
    //     setIsLoggedIn(true);
    // };
    //
    // const logoutHandler = () => {
    //     localStorage.removeItem("isLoggedIn");
    //     setIsLoggedIn(false);
    // };

    const context = useContext(AuthContext);

    return (
        <AuthContext>
            <MainHeader />
            {/*<MainHeader isAuthenticated={context.isLoggedIn} onLogout={context.logoutHandler}/>*/}
            <main>
                {!isLoggedIn && <Login onLogin={context.loginHandler}/>}
                {isLoggedIn && <Home onLogout={context.logoutHandler}/>}
            </main>
            {isLoggedIn && <>
                <AddUser onAddUser={addUserHandler}/>
                {usersList.length > 0 && (
                    <UsersList users={usersList}/>
                )}
            </>}

        </AuthContext>
    );
}

export default App;