import './Myskills.css'

function Myskills() {
    return (
        <div className="container" id='myskills'>
            <h1 className='main-heading'>My Skills</h1>
            <div className="skills-grid">
                <div className='card-container'>
                    <h1 className='card-name'>Front end</h1>
                    <div className='icons-container'>
                        <img src='/icons8-html-5-100.png' alt='HTML5' className='icons'></img>
                        <img src='/icons8-javascript-logo-128.svg' alt='JavaScript' className='icons'></img>
                        <img src='/icons8-react-100.png' alt='React' className='icons'></img>
                        <img src='/icons8-css-logo.svg' alt='CSS' className='icons'></img>
                    </div>
                </div>
                <div className='card-container'>
                    <h1 className='card-name'>Back end</h1>
                    <div className='icons-container'>
                        <img src='/icons8-c-programming.svg' alt='Node.js' className='icons'></img>
                        <img src='/icons8-python-100.png' alt='Python' className='icons'></img>
                        <img src='' alt='' className='icons'></img>
                    </div>
                </div>
                <div className='card-container'>
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
