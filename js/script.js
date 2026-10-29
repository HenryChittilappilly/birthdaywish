/* --------------------------
   PAGE NAVIGATION
--------------------------- */

function goTo(page) {

    document.body.style.opacity = "0";

    document.body.style.transition = "opacity 0.4s ease";

    setTimeout(() => {

        window.location.href = page;

    }, 350);

}


/* --------------------------
   FLOATING HEARTS
--------------------------- */

function createHeart() {

    const container =
        document.querySelector(".hearts");

    if (!container) return;

    const heart =
        document.createElement("div");

    heart.className = "heart";

    const hearts = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "💘",
        "💓",
        "♡","♡","♡","♡"
    ];

    heart.innerHTML =
        hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left =
        Math.random() * 100 + "%";

    heart.style.fontSize =
        (12 + Math.random() * 20) + "px";

    heart.style.animationDuration =
        (5 + Math.random() * 6) + "s";

    container.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 11000);

}


setInterval(createHeart, 700);


/* --------------------------
   CONFETTI
--------------------------- */

function createConfetti() {

    const confettiCount = 80;

    for (let i = 0; i < confettiCount; i++) {

        const piece =
            document.createElement("div");

        piece.style.position = "fixed";

        piece.style.width = "8px";

        piece.style.height = "8px";

        piece.style.background =
            getRandomColor();

        piece.style.left =
            Math.random() * 100 + "vw";

        piece.style.top = "-10px";

        piece.style.zIndex = "9999";

        piece.style.borderRadius =
            Math.random() > 0.5
                ? "50%"
                : "2px";

        document.body.appendChild(piece);


        const duration =
            2000 + Math.random() * 2500;


        piece.animate(

            [

                {
                    transform:
                        "translateY(0) rotate(0deg)",

                    opacity: 1

                },

                {

                    transform:
                        `translateY(110vh)
                         translateX(${Math.random() * 200 - 100}px)
                         rotate(720deg)`,

                    opacity: 0

                }

            ],

            {

                duration: duration,

                easing: "cubic-bezier(.2,.7,.3,1)"

            }

        );


        setTimeout(() => {

            piece.remove();

        }, duration);

    }

}


function getRandomColor() {

    const colors = [

        "#ff5c9a",
        "#ff9ec5",
        "#ffd166",
        "#ffffff",
        "#c77dff",
        "#7df9ff"

    ];

    return colors[
        Math.floor(Math.random() * colors.length)
    ];

}


/* --------------------------
   PAGE LOAD
--------------------------- */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        document.body.style.opacity = "1";

    }
);


/* --------------------------
   FIREWORKS
--------------------------- */

function startFireworks() {

    const canvas =
        document.getElementById("fireworks");

    if (!canvas) return;

    const ctx =
        canvas.getContext("2d");

    canvas.width =
        window.innerWidth;

    canvas.height =
        window.innerHeight;


    const particles = [];


    function createExplosion(x, y) {

        for (let i = 0; i < 70; i++) {

            const angle =
                Math.random() * Math.PI * 2;

            const speed =
                2 + Math.random() * 6;

            particles.push({

                x: x,

                y: y,

                vx:
                    Math.cos(angle) * speed,

                vy:
                    Math.sin(angle) * speed,

                life: 1,

                color:
                    getRandomColor()

            });

        }

    }


    function animate() {

        ctx.clearRect(
            0,
            0,
            canvas.width,
            canvas.height
        );


        if (Math.random() < 0.04) {

            createExplosion(

                Math.random() *
                canvas.width,

                Math.random() *
                canvas.height *
                0.6

            );

        }


        particles.forEach(
            (particle, index) => {

                particle.x += particle.vx;

                particle.y += particle.vy;

                particle.vy += 0.04;

                particle.life -= 0.015;


                ctx.globalAlpha =
                    particle.life;

                ctx.fillStyle =
                    particle.color;


                ctx.beginPath();

                ctx.arc(
                    particle.x,
                    particle.y,
                    2,
                    0,
                    Math.PI * 2
                );

                ctx.fill();


                if (particle.life <= 0) {

                    particles.splice(index, 1);

                }

            }
        );


        ctx.globalAlpha = 1;

        requestAnimationFrame(animate);

    }


    animate();

}