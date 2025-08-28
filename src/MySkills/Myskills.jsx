import './Myskills.css'
import { useEffect, useRef } from 'react'
import scrollAnimations from '../utils/scrollAnimations.js'

function Myskills() {
    const headingRef = useRef(null)
    const card1Ref = useRef(null)
    const card2Ref = useRef(null)
    const card3Ref = useRef(null)

    useEffect(() => {
        if (headingRef.current) {
            headingRef.current.classList.add('fade-down')
            scrollAnimations.observe(headingRef.current)
        }
        if (card1Ref.current) {
            card1Ref.current.classList.add('fade-slide-bottom-left')
            scrollAnimations.observe(card1Ref.current)
        }
        if (card2Ref.current) {
            card2Ref.current.classList.add('fade-up', 'animate-delay-200')
            scrollAnimations.observe(card2Ref.current)
        }
        if (card3Ref.current) {
            card3Ref.current.classList.add('fade-slide-bottom-right')
            scrollAnimations.observe(card3Ref.current)
        }

        return () => {
            if (headingRef.current) scrollAnimations.unobserve(headingRef.current)
            if (card1Ref.current) scrollAnimations.unobserve(card1Ref.current)
            if (card2Ref.current) scrollAnimations.unobserve(card2Ref.current)
            if (card3Ref.current) scrollAnimations.unobserve(card3Ref.current)
        }
    }, [])

    return (
        <div className="container" id='myskills'>
            <h1 className='main-heading' ref={headingRef}>My Skills</h1>
            <div className="skills-grid">
                <div className='card-container' ref={card1Ref}>
                    <h1 className='card-name'>Front end</h1>
                    <div className='icons-container'>
                        <img src='/icons8-html-5-100.png' alt='HTML5' className='icons'></img>
                        <img src='/icons8-javascript-logo-128.svg' alt='JavaScript' className='icons'></img>
                        <img src='/icons8-react-100.png' alt='React' className='icons'></img>
                        <img src='/icons8-css-logo.svg' alt='CSS' className='icons'></img>
                    </div>
                </div>
                <div className='card-container' ref={card2Ref}>
                    <h1 className='card-name'>Back end</h1>
                    <div className='icons-container'>
                        <img src='/icons8-c-programming.svg' alt='Node.js' className='icons'></img>
                        <img src='/icons8-python-100.png' alt='Python' className='icons'></img>
                        <img src='' alt='' className='icons'></img>
                    </div>
                </div>
                <div className='card-container' ref={card3Ref}>
                    <h1 className='card-name'>Tools</h1>
                    <div className='icons-container'>
                        <img src='/icons8-chat-gpt.svg' alt='Git' className='icons'></img>
                        <img src='/icons8-github-100.svg' alt='VS Code' className='icons'></img>
                        <img src='/icons8-figma.svg' alt='Figma' className='icons'></img>
                        <img src='/lovable-logo-icon.svg' alt='Figma' className='lovable-icons'></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Myskills
