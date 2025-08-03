export function scroll() {
    const container = document.getElementById('scroll-container');

    container.addEventListener('wheel', function (e) {
    // Only scroll horizontally if shift key is not held (to avoid conflict)
    if (e.deltaY !== 0 && !e.shiftKey) {
        e.preventDefault();
        container.scrollLeft += e.deltaY;
    }
    }, { passive: false });
}

