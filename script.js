function createLight(x, y) {
    const light = document.createElement('div');
    light.className = 'light-ripple';
    light.style.left = `${x}px`;
    light.style.top = `${y}px`;

    // Randomize gradient to simulate stars
    const gradients = [
        'radial-gradient(circle, #ffffff, #00ccff, #ff00cc)',
        'radial-gradient(circle, #ffcc00, #ff9900, #ff3300)',
        'radial-gradient(circle, #66ffcc, #33ccff, #0066ff)',
        'radial-gradient(circle, #ffffff, #99ccff, #cc99ff)'
    ];
    const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];
    light.style.background = randomGradient;

    document.body.appendChild(light);

    light.addEventListener('animationend', () => {
        light.remove();
    });
}

document.addEventListener('mousemove', (e) => {
    createLight(e.clientX, e.clientY);
});

document.addEventListener('touchmove', (e) => {
    const touch = e.touches[0];
    createLight(touch.clientX, touch.clientY);
});
