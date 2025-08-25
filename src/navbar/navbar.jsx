import "./navbar.css"
import { useEffect } from "react"

function Navbar(){
    useEffect(() => {
        const navbarItems = document.querySelectorAll('.navbar-item');
        const nav = document.querySelector('nav');
        
        // Scroll detection for navbar transformation
        const handleScroll = () => {
            if (window.scrollY > 100) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        };
        
        // Navbar item hover effects
        navbarItems.forEach(item => {
            item.addEventListener('mouseenter', (e) => {
                const rect = item.getBoundingClientRect();
                const mouseX = e.clientX;
                const itemLeft = rect.left;
                const itemRight = rect.right;
                const itemCenter = (itemLeft + itemRight) / 2;
                
                // Determine which side the cursor entered from
                if (mouseX < itemCenter) {
                    // Cursor entered from left, line starts from left
                    item.style.setProperty('--line-start', '0');
                } else {
                    // Cursor entered from right, line starts from right
                    item.style.setProperty('--line-start', '100%');
                }
            });
        });
        
        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);
        
        // Cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return(
        <nav>
            <div className="container">
                <a className="navbar-item" href="#home">home</a>
                <a className="navbar-item" href="#aboutme">about me</a>
                <a className="navbar-item" href="#myskills">skills</a>
                <a className="navbar-item" href="#">projects</a>
                <a className="navbar-item" href="#">contact</a>
            </div>
        </nav>
    )
}

export default Navbar