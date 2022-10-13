import './App.css';
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import app from './firebase/firebase.init';

const auth = getAuth(app)

function App() {
  const provider = GoogleAuthProvider();
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
