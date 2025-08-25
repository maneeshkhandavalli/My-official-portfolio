import { useEffect } from 'react';
import './Cursor.css';

function Cursor() {
    useEffect(() => {
        // Wait for the DOM to be ready
        const initCursor = () => {
            const cursor = document.querySelector('.cursor-circle');
            if (!cursor) {
                // If element doesn't exist yet, try again in a moment
                setTimeout(initCursor, 100);
                return;
            }

            let mouseX = 0;
            let mouseY = 0;
            let cursorX = 0;
            let cursorY = 0;
            let lastMouseX = 0;
            let lastMouseY = 0;
            let velocity = 0;

            const updateCursor = () => {
                // Calculate velocity for fluid effects
                const deltaX = mouseX - lastMouseX;
                const deltaY = mouseY - lastMouseY;
                velocity = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
                
                // Smooth following with delay
                cursorX += (mouseX - cursorX) * 0.2;
                cursorY += (mouseY - cursorY) * 0.2;
                
                // Ensure cursor stays within viewport bounds
                cursorX = Math.max(20, Math.min(cursorX, window.innerWidth - 20));
                cursorY = Math.max(20, Math.min(cursorY, window.innerHeight - 20));
                
                // Apply fluid shape changes based on velocity
                if (velocity > 5) {
                    cursor.classList.add('fluid');
                    // Stretch the circle based on movement direction
                    const stretchX = 1 + Math.abs(deltaX) * 0.01;
                    const stretchY = 1 + Math.abs(deltaY) * 0.01;
                    cursor.style.transform = `translate(-50%, -50%) scaleX(${stretchX}) scaleY(${stretchY})`;
                } else {
                    cursor.classList.remove('fluid');
                    cursor.style.transform = 'translate(-50%, -50%) scaleX(1) scaleY(1)';
                }
                
                cursor.style.left = cursorX + 'px';
                cursor.style.top = cursorY + 'px';
                
                lastMouseX = mouseX;
                lastMouseY = mouseY;
                requestAnimationFrame(updateCursor);
            };

            const handleMouseMove = (e) => {
                mouseX = e.clientX;
                mouseY = e.clientY;
            };

            document.addEventListener('mousemove', handleMouseMove);
            updateCursor();

            return () => {
                document.removeEventListener('mousemove', handleMouseMove);
            };
        };

        // Start the cursor initialization
        initCursor();
    }, []);

    return <div className='cursor-circle'></div>;
}

export default Cursor;
