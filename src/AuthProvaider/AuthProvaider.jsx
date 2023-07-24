import React, { Children, createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, updateProfile, signInWithEmailAndPassword, signInWithPopup, signOut, onAuthStateChanged, sendPasswordResetEmail } from "firebase/auth";
import app from '../firebase/firebase.config';
import useAxiosSecure from '../CustomHook/useAxiosSecure/useAxiosSecure';


export const AuthContext = createContext(null);
const Auth = getAuth(app)

const AuthProvaider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvaider = new GoogleAuthProvider()
    const [axios] = useAxiosSecure()

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(Auth, email, password)
    }
    const updateUserProfile = (name, photo) => {
        return updateProfile(Auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }
    const resetYourPass = () => {
        return sendPasswordResetEmail(Auth , email)
    }

    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(Auth, email, password)
    }

    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(Auth, googleProvaider)
    }
    const logOut = () => {
        setLoading(true)
        return signOut(Auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(Auth, presentUser => {
            setUser(presentUser);
            // console.log('present user', presentUser);
            setUser(presentUser)
            setLoading(false)
            if (presentUser) {
                // console.log('res');
                // axios.post('http://localhost:5000/jwt', { email: presentUser.email })
                axios.post('https://collage-admission-server-psi.vercel.app/jwt', { email: presentUser.email })
                    .then(response => {
                        // console.log('res', response.data.token);
                        localStorage.setItem('access-token', response.data.token);
                    })

            }
            localStorage.removeItem('access-token')

        });
        return () => {
            return unsubscribe();
        }
    }, [])
    const Authinfo = {
        user,
        loading,
        createUser,
        login,
        logOut,
        googleLogin,
        updateUserProfile,
        resetYourPass
    }
    return (
        <AuthContext.Provider value={Authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvaider;