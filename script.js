function updateClock() {
    const now = new Date();

    // Time
    let hours = String(now.getHours()).padStart(2, '0');
    let minutes = String(now.getMinutes()).padStart(2, '0');
    let seconds = String(now.getSeconds()).padStart(2, '0');

    document.getElementById("clock").textContent =
        `${hours}:${minutes}:${seconds}`;

    // Day
    const days = [
        "Sunday", "Monday", "Tuesday",
        "Wednesday", "Thursday", "Friday", "Saturday"
    ];

    let today = days[now.getDay()];
    document.getElementById("day").textContent = today;
}

// Update every second
setInterval(updateClock, 1000);

// Show immediately on load
updateClock();

//background


const images = [
  "heartstrawberry.gif",
  "pinkcake.gif",
  "pinkcinamoroll.gif",
  "pinkStrabery.gif"
];

const container = document.getElementById("container");

for(let i = 0; i < 10; i++) {
    // Pili random na image
    const imgSrc = images[Math.floor(Math.random() * images.length)];
    
    const img = document.createElement("img");
    img.src = imgSrc;
    img.style.position = "absolute";
    img.style.opacity = "0.25";
    
    // Random position sa container
    img.style.top = Math.random() * (window.innerHeight - 100) + "px"; // minus approx height ng image
    img.style.left = Math.random() * (window.innerWidth - 100) + "px"; // minus approx width ng image
    
    // Optional: random size
    const width = 50 + Math.random() * 150; // 50px to 200px
    const height = 50 + Math.random() * 150;
    img.style.width = width + "px";
    img.style.height = height + "px";

    container.appendChild(img);
}

//song
const musicBtn = document.getElementById("music");
const bgMusic = document.getElementById("bgMusic");

let isPlaying = false;

musicBtn.addEventListener("click", () => {
    if(isPlaying) {
        bgMusic.pause();
        musicBtn.style.opacity = "0.5"; // visual cue for paused
    } else {
        bgMusic.play();
        musicBtn.style.opacity = "1"; // visual cue for playing
    }
    isPlaying = !isPlaying;
});


//button
  document.addEventListener("DOMContentLoaded", () => {
    const playButton = document.querySelector(".play");
    playButton.style.cursor = "pointer"; // Optional: makes it look clickable

    playButton.addEventListener("click", () => {
      window.location.href = "game.html"; // Change to your target file
    });
  });
