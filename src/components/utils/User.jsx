import { createContext, useState } from "react";

const UserContext = createContext({
    loggedInUser: null,
    avatarUrl:  null,
    setUser: () => {}   
});

export const UserProvider = ({children}) => {
    const [loggedInUser, setLogginedUser] = useState(null);
    const [avatarUrl, setAvatarUrl] = useState(null);

    const setUser = (user, avatar) => {
        setLogginedUser(user);
         setAvatarUrl(avatar);
    }
    return(
        <UserContext.Provider value={{loggedInUser, avatarUrl, setUser}}>
            {children}
        </UserContext.Provider>
    )

}

export default UserContext;