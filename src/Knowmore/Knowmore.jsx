import "./Knowmore.css"
import { useEffect, useRef } from 'react'
import scrollAnimations from '../utils/scrollAnimations.js'

function Knowmore() {
    const headingRef = useRef(null)
    const descriptionRef = useRef(null)
    const card1Ref = useRef(null)
    const card2Ref = useRef(null)
    const card3Ref = useRef(null)
    const card4Ref = useRef(null)
    const card5Ref = useRef(null)

    useEffect(() => {
        if (headingRef.current) {
            headingRef.current.classList.add('fade-down')
            scrollAnimations.observe(headingRef.current)
        }
        if (descriptionRef.current) {
            descriptionRef.current.classList.add('fade-up')
            scrollAnimations.observe(descriptionRef.current)
        }
        if (card1Ref.current) {
            card1Ref.current.classList.add('fade-slide-bottom-left')
            scrollAnimations.observe(card1Ref.current)
        }
        if (card2Ref.current) {
            card2Ref.current.classList.add('fade-up', 'animate-delay-100')
            scrollAnimations.observe(card2Ref.current)
        }
        if (card3Ref.current) {
            card3Ref.current.classList.add('fade-up', 'animate-delay-200')
            scrollAnimations.observe(card3Ref.current)
        }
        if (card4Ref.current) {
            card4Ref.current.classList.add('fade-up', 'animate-delay-300')
            scrollAnimations.observe(card4Ref.current)
        }
        if (card5Ref.current) {
            card5Ref.current.classList.add('fade-slide-bottom-right')
            scrollAnimations.observe(card5Ref.current)
        }

        return () => {
            if (headingRef.current) scrollAnimations.unobserve(headingRef.current)
            if (descriptionRef.current) scrollAnimations.unobserve(descriptionRef.current)
            if (card1Ref.current) scrollAnimations.unobserve(card1Ref.current)
            if (card2Ref.current) scrollAnimations.unobserve(card2Ref.current)
            if (card3Ref.current) scrollAnimations.unobserve(card3Ref.current)
            if (card4Ref.current) scrollAnimations.unobserve(card4Ref.current)
            if (card5Ref.current) scrollAnimations.unobserve(card5Ref.current)
        }
    }, [])

    return(
        <div className="container">
            <h1 className="main-heading" ref={headingRef}>Know more</h1>
            <div className="main-container">
                <div ref={descriptionRef}>
                    <p className="my-discription-knowmore">Want to know more about me? 
                        Check out my social profiles below and stay connected
                        with what I'm working on and sharing</p>
                </div>
                <div className="contact-buttons">
                    <div className="knowmore-card" ref={card1Ref}>
                        <img className="logo" alt="github" src="icons8-github-100.svg"></img>
                        <a href="https://github.com/maneeshkhandavalli" target="_blank">
                            <button className="Contact-button">Github</button>
                        </a>
                        
                    </div>
                    <div className="knowmore-card" ref={card2Ref}>
                        <img className="logo" alt="instagram" src="icons8-instagram-100.svg"></img>
                        <a href="https://www.instagram.com/maneesh_khandavalli/" target="_blank">
                            <button className="Contact-button" >Instagram</button>
                        </a>
                        
                    </div>
                    <div className="knowmore-card" ref={card3Ref}>
                        <img className="logo" alt="youtube" src="icons8-youtube-100.svg"></img>
                        <a href="https://www.youtube.com/@notebookandjourney" target="_blank">
                            <button className="Contact-button" >Youtube</button>
                        </a>
                        
                    </div>
                    <div className="knowmore-card" ref={card4Ref}>
                        <img className="logo" alt="linkedin" src="icons8-linkedin-100.svg"></img>
                        <a href="https://www.linkedin.com/in/maneesh-khandavalli-33b365361/" target="_blank">
                            <button className="Contact-button" >Linkedin</button>
                        </a>
                        
                    </div>
                    <div className="knowmore-card" ref={card5Ref}>
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