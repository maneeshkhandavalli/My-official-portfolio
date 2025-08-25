import './aboutme.css'

function Aboutme() {
    return (
        <div className="container" id='aboutme'>
            <h1 className='main-heading'>About me</h1>
            <div className='discription-box'>
                <div className='left-container'>
                    <p className='my-discription'>My passion lies in the 
                        intersection of art and technology, creating visually
                        stunning websites and designs
                    </p>
                    <button className='clicktocolab-button'>Click to collab</button>
                </div>
                <div className='right-container'>
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
