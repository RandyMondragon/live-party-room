import { auth, provider } from './firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react';
import Cookies from 'universal-cookie';
const cookies = new Cookies();


// AUTHORIZATION USING EMAIL/PASSWORD AUTHENTICATION FROM FIREBASE
// export const Auth = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const handleSignIn = async () => {
//         try {
//             const userCredential = await signInWithEmailAndPassword(auth, email, password);
//             // Signed in 
//             const user = userCredential.user;
//             console.log(user);
//         } catch (error) {
//             // Handle sign-in errors
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             console.error(errorCode, errorMessage);
//             // ...
//         }
//     };

//     const handleSignUp = async () => {
//         try {
//             const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//             // Signed up
//             const user = userCredential.user;
//             console.log(user);
//         } catch (error) {
//             // Handle sign-up errors
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             console.error(errorCode, errorMessage);
//             // ...
//         }
//     };

//     return (
//         <div className="auth">
//             <p>Sign In</p>
//             <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Email"
//             />
//             <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="Password"
//             />
//             <button onClick={handleSignIn}>Sign In</button>
//             <button onClick={handleSignUp}>Sign Up</button>
//         </div>
//     );
// };

export const Auth = (props) => {

    const { setIsAuth } = props;

    const signInWIthGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, provider);
        cookies.set("auth-token", result.user.refreshToken);
        setIsAuth(true);
    } catch (err) {
        console.error(err);
    }
    };

    return(
        <div className="auth"> 
            <p>Sign In With Google To Continue</p>
            <button onClick={signInWIthGoogle}> Sign In With Google</button>
        </div>
    );
};