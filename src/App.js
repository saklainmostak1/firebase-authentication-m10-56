import './App.css';
import {getAuth, GoogleAuthProvider, signInWithPopup, signOut} from 'firebase/auth'
import app from './firebase/firebase.init';
import { useState } from 'react';

const auth = getAuth(app)

function App() {
  const [user, setUser] = useState({});
 const provider = new GoogleAuthProvider();
 const handleGoogleSingIn = () =>{
  signInWithPopup(auth, provider)
  .then(result =>{
    const user = result.user
    console.log(user)
    setUser(user)
  })
  .catch(error =>{
    console.error(error)

  })
 }
 const handleSingOut = () =>{
    signOut(auth)
    .then( () =>{
      setUser({})
    } )
    .catch(() => {
      setUser({})
    })
 }

  return (
    <div className="App">
     { user.email ?
     <button onClick={handleSingOut}>Sing Out</button>
     :
       <button onClick={handleGoogleSingIn}>Google SingIn</button>}
     { user.email && <div>
       <h2>User Name: {user.displayName}</h2> 
       <p> User Email: {user.email}</p>
       <img src={user.photoURL} alt="" />
      </div>}
    </div>
  );
}

export default App;
