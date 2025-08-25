import "./index.css"
import Navbar from "./navbar/navbar.jsx"
import Home from "./home/Home.jsx"
import Aboutme from "./Aboutme/aboutme.jsx"
import Myskills from "./MySkills/Myskills.jsx"
import Cursor from "./cursoranimation/Cursor.jsx"
import Knowmore from "./Knowmore/Knowmore.jsx"

function App() {
    return (
        <>
        <Navbar/>
        <Home/>
        <Aboutme/>
        <Myskills/>
        <Cursor/>
        <Knowmore/>
        </>
    )
}

export default App
