import { createContext, useContext, useEffect, useState } from "react"
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from "firebase/auth";


const AuthinticationContext = createContext()


const AuthContext = ({ children }) => {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);
    const signUP = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);

    }
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);

    }
    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email);

    }
    const handlelogOut = () => {
        return signOut(auth);


    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    }, [])
    return (
        <AuthinticationContext.Provider value={{
            currentUser,
            signUP,
            signIn,
            resetPassword,
            handlelogOut


        }}>
            {!loading && children}
        </AuthinticationContext.Provider>
    )
}

export default AuthContext
const useAuth = () => {
    return useContext(AuthinticationContext)

}
export { useAuth };