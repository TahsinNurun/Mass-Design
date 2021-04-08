import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config'
import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import imageG from '../../icons/google.png';
import imageF from '../../icons/facebook.png'



if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
else{
    firebase.app();
}

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [user, setUser] = useState({});
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    var provider = new firebase.auth.GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {        
                
                // console.log( result.user );
                const {displayName, email} = result.user;
                const loggedInUser = {name: displayName, email}
                // console.log(loggedInUser);
                setLoggedInUser(loggedInUser);
                history.replace(from);

            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
            });

    }
    return (
        <div className="container text-center" >
            <p>Please Create an Account to place order</p>
            <button onClick={handleGoogleSignIn} className="btn btn-primary"><img style={{ height: '20px', padding: '2px' }} src={imageG} alt="" />Sign In Using Google</button>
            <br/>
            <br/>
            <button className="btn btn-primary btn-lg disabled"><img style={{ height: '20px', padding: '2px' }} src={imageF} alt="" />Sign In Using Facebook</button>
        </div>
    );
};

export default Login;