import "./Myprojects.css"
import { useEffect, useRef } from 'react'
import scrollAnimations from '../utils/scrollAnimations.js'

function Myprojects() {
    const headingRef = useRef(null)
    const project1Ref = useRef(null)
    const project2Ref = useRef(null)
    const viewMoreRef = useRef(null)

    useEffect(() => {
        if (headingRef.current) {
            headingRef.current.classList.add('fade-down')
            scrollAnimations.observe(headingRef.current)
        }
        if (project1Ref.current) {
            project1Ref.current.classList.add('fade-slide-top-left')
            scrollAnimations.observe(project1Ref.current)
        }
        if (project2Ref.current) {
            project2Ref.current.classList.add('fade-slide-top-right')
            scrollAnimations.observe(project2Ref.current)
        }
        if (viewMoreRef.current) {
            viewMoreRef.current.classList.add('fade-up', 'animate-delay-300')
            scrollAnimations.observe(viewMoreRef.current)
        }

        return () => {
            if (headingRef.current) scrollAnimations.unobserve(headingRef.current)
            if (project1Ref.current) scrollAnimations.unobserve(project1Ref.current)
            if (project2Ref.current) scrollAnimations.unobserve(project2Ref.current)
            if (viewMoreRef.current) scrollAnimations.unobserve(viewMoreRef.current)
        }
    }, [])

    return(
        <div className="myprojects-entire-container">
            <h1 className="main-heading" ref={headingRef}>My Projects</h1>
            <div className="myproject-container">
            <div className="project-card-containers">
                <div className="project-card" ref={project1Ref}>
                    <h1 className="Project-name">Project 1</h1>
                    <button className="view-project-button">View Project</button>
                </div>
                <div className="project-card" ref={project2Ref}>
                    <h1 className="Project-name">Project 2</h1>
                    <button className="view-project-button">View Project</button>
                </div>
            </div>
            <button className="view-more-button" ref={viewMoreRef}>View More</button>
        </div>
        </div>

    )
}

export default Myprojects

