document.addEventListener('mousemove', (event) => {
    createLight(event.clientX, event.clientY);
});

// You would also listen for touch events on a mobile device
document.addEventListener('touchmove', (event) => {
    const touch = event.touches[0];
    createLight(touch.clientX, touch.clientY);
});

function createLight(x, y) {
    const light = document.createElement('div');
    light.className = 'light-ripple';
    light.style.left = `${x}px`;
    light.style.top = `${y}px`;
    document.body.appendChild(light);

    // Remove the element after the animation is done
    light.addEventListener('animationend', () => {
        light.remove();
    });
}
