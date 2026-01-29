// Typing animation for hero header
document.addEventListener("DOMContentLoaded", () => {
    const text = "Hi! I’m Jeemin :)";
    const speed = 80;
    const pauseAfterHi = 600;

    const target = document.getElementById("typed-text");
    if (!target) return;

    let index = 0;

    function type() {
        if (index < text.length) {
            target.textContent += text.charAt(index);
            index++;

            // After "Hi!" is typed
            if (index === 3) {
                setTimeout(type, pauseAfterHi);
            } else {
                setTimeout(type, speed);
            }
        }
    }

    setTimeout(type, 300);
});
