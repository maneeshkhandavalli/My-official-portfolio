import './Home.css'
import { useEffect, useRef } from 'react'
import scrollAnimations from '../utils/scrollAnimations.js'

function Home() {
    const uiUxRef = useRef(null)
    const descriptionRef = useRef(null)
    const squareRef = useRef(null)
    const nameRef = useRef(null)

    useEffect(() => {
        // Add initial animations for page load
        if (uiUxRef.current) {
            uiUxRef.current.classList.add('fade-slide-top-left')
            scrollAnimations.observe(uiUxRef.current)
        }
        if (descriptionRef.current) {
            descriptionRef.current.classList.add('fade-left', 'animate-delay-200')
            scrollAnimations.observe(descriptionRef.current)
        }
        if (squareRef.current) {
            squareRef.current.classList.add('fade-slide-bottom-left', 'animate-delay-300')
            scrollAnimations.observe(squareRef.current)
        }
        if (nameRef.current) {
            nameRef.current.classList.add('fade-slide-bottom-right', 'animate-delay-400')
            scrollAnimations.observe(nameRef.current)
        }

        // Trigger initial animations on page load
        setTimeout(() => {
            if (uiUxRef.current) uiUxRef.current.classList.add('animate')
            setTimeout(() => {
                if (descriptionRef.current) descriptionRef.current.classList.add('animate')
            }, 200)
            setTimeout(() => {
                if (squareRef.current) squareRef.current.classList.add('animate')
            }, 300)
            setTimeout(() => {
                if (nameRef.current) nameRef.current.classList.add('animate')
            }, 400)
        }, 100)

        return () => {
            if (uiUxRef.current) scrollAnimations.unobserve(uiUxRef.current)
            if (descriptionRef.current) scrollAnimations.unobserve(descriptionRef.current)
            if (squareRef.current) scrollAnimations.unobserve(squareRef.current)
            if (nameRef.current) scrollAnimations.unobserve(nameRef.current)
        }
    }, [])

    return (
        <div className="container" id='home'>
            <div>
                <h2 className='ui-ux' ref={uiUxRef}>UI / UX</h2>
                <p className='discription-uiux' ref={descriptionRef}>Every pixel is a choice, every choice tells a story</p>
            </div>
            <div className='name-container'>
                <div className='rotating-square' ref={squareRef}></div>
                <h1 className='my-name' ref={nameRef}>Maneesh Khandavalli</h1>
            </div>
        </div>
        
    )
}

export default Home
