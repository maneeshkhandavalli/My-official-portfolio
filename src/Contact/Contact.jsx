import { useState } from "react"
import "./Contact.css"

function Contact(){
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [charsLeft, setCharsLeft] = useState(400)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [status, setStatus] = useState("")

    const handleMessageChange = (e) => {
        const text = e.target.value.slice(0, 400)
        setMessage(text)
        setCharsLeft(400 - text.length)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!name.trim() || !email.trim() || !message.trim()){
            setStatus("Please fill in all fields.")
            return
        }
        setIsSubmitting(true)
        setStatus("")
        try{
            const res = await fetch("/api/send-email",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body: JSON.stringify({ name, email, message })
            })
            if(!res.ok){
                throw new Error("Failed to send message")
            }
            setStatus("Message sent! Thank you.")
            setName("")
            setEmail("")
            setMessage("")
            setCharsLeft(400)
        }catch(err){
            setStatus("Could not send message. Please try again later.")
        }finally{
            setIsSubmitting(false)
        }
    }

    return (
        <div className="container">
            <h1 className="main-heading">Contact Me</h1>
            <section id="contact" className="contact-section">
            <div className="contact-container">
                <form className="contact-form" onSubmit={handleSubmit}>
                    
                    <input
                        id="name"
                        type="text"
                        className="contact-input"
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                        placeholder="Your name"
                        required
                    />

                    
                    <input
                        id="email"
                        type="email"
                        className="contact-input"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        placeholder="yourname@gmail.com"
                        required
                    />

                    
                    <textarea
                        id="message"
                        className="contact-textarea"
                        value={message}
                        onChange={handleMessageChange}
                        placeholder="Type your message"
                        rows={8}
                        maxLength={400}
                        required
                    />
                    <div className="contact-counter">{charsLeft} characters left</div>

                    <button className="contact-submit" type="submit" disabled={isSubmitting}>
                        {isSubmitting ? "Sending..." : "Send"}
                    </button>
                    {status && <div className="contact-status">{status}</div>}
                </form>

                <div className="contact-aside">
                    <p>
                        Got an idea, project, or just
                    want to say hi? Feel free to
                    reach out I’d love to connect, collaborate, 
                    or even create something together
                    </p>
                </div>
            </div>
        </section>
        </div>
    )
}

export default Contact


