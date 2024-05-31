import React, {useEffect, useState} from 'react';



const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogin: (email, password) => {},
    onLogout: () => {}
});

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // 로그인 되면 isLoggedIn = true [or] isLoggedIn = false
        const getLogin = localStorage.getItem('isLoggedIn');
        getLogin ? setIsLoggedIn(true) : setIsLoggedIn(false);
        console.log("hello")
    }, []);

    const loginHandler = (email, password) => {
        localStorage.setItem("isLoggedIn", email);
        setIsLoggedIn(true);
    };

    const logoutHandler = () => {
        localStorage.removeItem("isLoggedIn");
        setIsLoggedIn(false);
    };

    return <AuthContext.Provider value={{
        isLoggedIn: false,
        onLogin: logoutHandler,
        onLogout: loginHandler
    }}>
        {props.children}
    </AuthContext.Provider>;
};

export default  AuthContext;