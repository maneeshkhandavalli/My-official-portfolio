import "./Knowmore.css"

function Knowmore() {
    return(
        <div>
            <h1 className="main-heading">Know more</h1>
            <div className="main-container">
                <div>
                    <p className="my-discription-knowmore">Want to know more about me? 
                        Check out my social profiles below and stay connected
                        with what I’m working on and sharing</p>
                </div>
                <div className="contact-buttons">
                    <div className="knowmore-card">
                        <img className="logo" alt="github" src="icons8-youtube-100.svg"></img>
                        <button className="Contact-button">Github</button>
                    </div>
                    <div className="knowmore-card">
                        <img className="logo" alt="instagram" src="icons8-youtube-100.svg"></img>
                        <button className="Contact-button">Instagram</button>
                    </div>
                    <div className="knowmore-card">
                        <img className="logo" alt="youtube" src="icons8-youtube-100.svg"></img>
                        <button className="Contact-button">Youtube</button>
                    </div>
                    <div className="knowmore-card">
                        <img className="logo" alt="linkedin" src="icons8-youtube-100.svg"></img>
                        <button className="Contact-button">Linkedin</button>
                    </div>
                    <div className="knowmore-card">
                        <img className="logo" alt="mail" src="icons8-youtube-100.svg"></img>
                        <button className="Contact-button">Mail</button>
                    </div>
                </div>
            </div>  
        </div>
    )
}

export default Knowmore