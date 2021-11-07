import {
    getAuth,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    updateProfile,
    getIdToken
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/LogIn/Firebase/firebase.init";

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const [admin, setAdmin] = useState(false)
    const [token, setToken] = useState('')

    const auth = getAuth()
    const GoogleProvider = new GoogleAuthProvider()

    const handelCreateUser = (email, password, name, history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const newUser = { email, displayName: name }
                setUser(newUser)
                saveUser(email, name, 'POST')
                updateProfile(auth.currentUser, {
                    displayName: name
                })
                setError('')
                history.replace('/home')
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false))

    };


    const processLogin = (email, password, location, history) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const destination = location?.state?.from || '/home'
                history.replace(destination)
                setError('')
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false))

    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {

                setUser(user)
                getIdToken(user)
                    .then(idToken => {
                        setToken(idToken)
                    })

            }
            else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribed;
    }, [auth]);

    // verify admin from server
    useEffect(() => {
        fetch(`https://stormy-mesa-33638.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    const handelSignOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser({})
                setError('')
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false))
    };

    const googleLogIn = (location, history) => {
        setIsLoading(true)
        signInWithPopup(auth, GoogleProvider)
            .then(result => {
                const user = result.user
                saveUser(user.email, user.displayName, 'PUT')
                const destination = location?.state?.from || '/home'
                history.replace(destination)
                setError('')
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => {
                setIsLoading(false)
            })
    };

    const saveUser = (email, displayName, method) => {
        const user = { email, displayName }
        fetch('https://stormy-mesa-33638.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }
    return {
        user,
        admin,
        error,
        isLoading,
        handelCreateUser,
        processLogin,
        handelSignOut,
        googleLogIn,
        token

    }
}
export default useFirebase;