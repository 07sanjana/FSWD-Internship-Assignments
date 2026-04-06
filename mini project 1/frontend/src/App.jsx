import Profile from "./components/Profile";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Upload from "./components/Upload";



function App() {
    return(
        <div>
            <h1>Auth + Upload App</h1>
            <Signup/>
            <Login/>
            <Upload/>
            <Profile/>
        </div>
    )
}
export default App;