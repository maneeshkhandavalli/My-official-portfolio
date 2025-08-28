import "./index.css"
import "./styles/scrollAnimations.css"
import Navbar from "./navbar/navbar.jsx"
import Home from "./home/Home.jsx"
import Aboutme from "./Aboutme/aboutme.jsx"
import Myskills from "./MySkills/Myskills.jsx"
import Cursor from "./cursoranimation/Cursor.jsx"
import Knowmore from "./Knowmore/Knowmore.jsx"
import Contact from "./Contact/Contact.jsx"
import Myprojects from "./Myprojects/Myprojects.jsx"

function App() {
    return (
        <>
        <Cursor/>
        <Navbar/>
        <Home/>
        <Aboutme/>
        <Myskills/>
        <Myprojects/>
        <Knowmore/>
        <Contact/>
        </>
    )
}

export default App
