import './aboutme.css'
import { useEffect, useRef } from 'react'
import scrollAnimations from '../utils/scrollAnimations.js'

function Aboutme() {
    const containerRef = useRef(null)
    const headingRef = useRef(null)
    const leftContainerRef = useRef(null)
    const rightContainerRef = useRef(null)

    useEffect(() => {
        // Initialize scroll animations for each element
        if (headingRef.current) {
            headingRef.current.classList.add('fade-down')
            scrollAnimations.observe(headingRef.current)
        }
        if (leftContainerRef.current) {
            leftContainerRef.current.classList.add('fade-slide-top-left')
            scrollAnimations.observe(leftContainerRef.current)
        }
        if (rightContainerRef.current) {
            rightContainerRef.current.classList.add('fade-slide-top-right')
            scrollAnimations.observe(rightContainerRef.current)
        }

        return () => {
            if (headingRef.current) scrollAnimations.unobserve(headingRef.current)
            if (leftContainerRef.current) scrollAnimations.unobserve(leftContainerRef.current)
            if (rightContainerRef.current) scrollAnimations.unobserve(rightContainerRef.current)
        }
    }, [])

    return (
        <div className="container" id='aboutme' ref={containerRef}>
            <h1 className='main-heading' ref={headingRef}>About me</h1>
            <div className='discription-box'>
                <div className='left-container' ref={leftContainerRef}>
                    <p className='my-discription'>My passion lies in the 
                        intersection of art and technology, creating visually
                        stunning websites and designs
                    </p>
                    <button className='clicktocolab-button'>Click to collab</button>
                </div>
                <div className='right-container' ref={rightContainerRef}>
                    <p className='my-second-discription'>Im pursuing my Bachelor of Technology in 
                        Computer Science. This academic foundation has equipped me with
                         a solid understanding of the principles that underpin effective 
                         interaction design, providing me with the knowledge to create 
                         designs that seamlessly blend aesthetics and functionality
                    </p>
                </div>
            </div>
        </div>
        
    )
}

export default Aboutme
