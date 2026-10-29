// ==========================================
// BIRTHDAY WEBSITE ACTIVATION TIME
// ==========================================

// India Standard Time (IST)
// October 30, 2026 - 12:00 AM

const activationTime = new Date(
    "2026-10-29T23:56:00+05:30"
).getTime();

// const activationTime = new Date(
//     "2026-10-26T00:00:00+05:30"
// ).getTime();


// ==========================================
// UPDATE COUNTDOWN
// ==========================================

const countdown = setInterval(function () {

    const now = new Date().getTime();

    const distance = activationTime - now;


    // ------------------------------------------
    // WEBSITE UNLOCKED
    // ------------------------------------------

    if (distance <= 0) {

        clearInterval(countdown);

        // Send her to your first birthday page
        window.location.href = "index1.html";

        return;
    }


    // ------------------------------------------
    // CALCULATE TIME
    // ------------------------------------------

    const days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60))
        / 1000
    );


    // ------------------------------------------
    // DISPLAY
    // ------------------------------------------

    document.getElementById("days").textContent =
        String(days).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");

}, 1000);