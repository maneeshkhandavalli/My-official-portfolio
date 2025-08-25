import "./Knowmore.css"

function Knowmore() {
    return(
        <div className="container">
            <h1 className="main-heading">Know more</h1>
            <div className="main-container">
                <div>
                    <p className="my-discription-knowmore">Want to know more about me? 
                        Check out my social profiles below and stay connected
                        with what I’m working on and sharing</p>
                </div>
                <div className="contact-buttons">
                    <div className="knowmore-card">
                        <img className="logo" alt="github" src="icons8-github-100.svg"></img>
                        <a href="https://github.com/maneeshkhandavalli" target="_blank">
                            <button className="Contact-button">Github</button>
                        </a>
                        
                    </div>
                    <div className="knowmore-card">
                        <img className="logo" alt="instagram" src="icons8-instagram-100.svg"></img>
                        <a href="https://www.instagram.com/maneesh_khandavalli/" target="_blank">
                            <button className="Contact-button" >Instagram</button>
                        </a>
                        
                    </div>
                    <div className="knowmore-card">
                        <img className="logo" alt="youtube" src="icons8-youtube-100.svg"></img>
                        <a href="https://www.youtube.com/@notebookandjourney" target="_blank">
                            <button className="Contact-button" >Youtube</button>
                        </a>
                        
                    </div>
                    <div className="knowmore-card">
                        <img className="logo" alt="linkedin" src="icons8-linkedin-100.svg"></img>
                        <a href="https://www.linkedin.com/in/maneesh-khandavalli-33b365361/" target="_blank">
                            <button className="Contact-button" >Linkedin</button>
                        </a>
                        
                    </div>
                    <div className="knowmore-card">
                        <img className="logo" alt="mail" src="icons8-gmail-100.svg"></img>
                        <a href="maneeshkhandavalliwork@gmail.com" target="_blank">
                            <button className="Contact-button" >Mail</button>
                        </a>
                    </div>
                </div>
            </div>  
        </div>
    )
}

export default Knowmore