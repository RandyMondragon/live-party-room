import logo from './logo.svg';
import './App.css';
import { Auth } from './Auth';
import Cookies from 'universal-cookie';
import { useState, useRef } from 'react';
import { PartyRoom } from './PartyRoom';
import { signOut } from 'firebase/auth';
import { auth } from './firebaseConfig';

const cookies = new Cookies();

function App() {

  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  const [room, setRoom] = useState(null);
  
  const roomInputRef = useRef(null);

  const signUserOut = async() => {
        await signOut(auth);
        cookies.remove("auth-token");
        setIsAuth(false);
        setRoom(null);
  };

  if (!isAuth) {

  return (
    <div>
      <Auth setIsAuth={setIsAuth}/>
    </div>

  );
  
  }

  return (

    <>
      {room ? <PartyRoom room ={room}/> 
      : <div className="room"> 
        <label> Enter Room Name: </label> 
        <input ref = {roomInputRef} />
        <button onClick={() => setRoom (roomInputRef.current.value)}>
          Enter Chat 
          </button>
       </div>} 

       <div className="sign-out">

        <button onClick={signUserOut}> Sign Out</button>

       </div>
    </>

  );
}

export default App;
