
// Select the custom cursor element
const customCursor = document.getElementById('custom-cursor');

// Add an event listener to track mouse movements
document.addEventListener('mousemove', (event) => {
    const { clientX, clientY } = event;

    // Update cursor position
    customCursor.style.left = `${clientX}px`;
    customCursor.style.top = `${clientY}px`;
});

// Add event listeners for links to enlarge the cursor on hover
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('mouseover', () => {
        customCursor.classList.add('enlarged');
    });

    link.addEventListener('mouseout', () => {
        customCursor.classList.remove('enlarged');
    });
});
