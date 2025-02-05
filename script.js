const assassins = [
    { name: "Avval", description: "Stealth expert, skilled in silent takedowns and disappearing without a trace.", price: "$899", image: "https://raw.githubusercontent.com/KalakkalKarthikeyan/ASSASSIN.COM/refs/heads/main/IMG_20250204_200356%7E2.jpg" },
    { name: "Divyesh", description: "Close combat master, specializes in hand-to-hand fights and pressure point attacks.", price: "$799", image: "Photo of Divyesh" },
    { name: "Mithun", description: "Unavailable (This assassin is currently on another mission).", price: "N/A", image: "https://raw.githubusercontent.com/KalakkalKarthikeyan/ASSASSIN.COM/refs/heads/main/Screenshot%202025-02-04%20211910.png" },
    { name: "Radha Krishnan", description: "Most Paid Assassin, Eraser Act Specialist (attacks by throwing erasers), skilled in sniper attacks and strategic eliminations.", price: "$1999", image: "Photo of Radha Krishnan" },
    { name: "Sanjay", description: "Tactical genius, specializes in ambushes and mind games to take down targets.", price: "$999", image: "https://raw.githubusercontent.com/KalakkalKarthikeyan/ASSASSIN.COM/refs/heads/main/IMG_20250204_200058%7E2.jpg" },
    { name: "Karthikeyan", description: "Smile Killer & Most Ordered Assassin, takes down targets with a deadly grin, uses psychological warfare.", price: "$1299", image: "https://raw.githubusercontent.com/KalakkalKarthikeyan/ASSASSIN.COM/refs/heads/main/DGUF.jpg" },
    { name: "Vasanth Raj", description: "Most Low Paid & Worst Skilled Assassin, often misses his target, clumsy with weapons, but still tries his best.", price: "$599", image: "https://raw.githubusercontent.com/KalakkalKarthikeyan/ASSASSIN.COM/refs/heads/main/Screenshot%202025-02-04%20211941.png" },
    { name: "Vikaash", description: "Gadget specialist, known for setting up clever traps and using high-tech gear for the job.", price: "$1099", image: "https://raw.githubusercontent.com/KalakkalKarthikeyan/ASSASSIN.COM/refs/heads/main/IMG_20250204_200112%7E2.jpg" }
];

const slider = document.getElementById("assassin-slider");

document.getElementById("choose-assassin").addEventListener("click", () => {
    slider.innerHTML = ""; // Clear previous assassins
    assassins.forEach((assassin, index) => {
        if (assassin.price !== "N/A") {
            const card = document.createElement("div");
            card.classList.add("assassin-card");

            card.innerHTML = `
                <img src="${assassin.image}" alt="${assassin.name}">
                <h2>${assassin.name}</h2>
                <p>${assassin.description}</p>
                <p><strong>Price: ${assassin.price}</strong></p>
                <button class="order-button" onclick="orderAssassin(${index})">Order This Assassin</button>
            `;
            slider.appendChild(card);
        }
    });
});

function orderAssassin(index) {
    const assassin = assassins[index];
    localStorage.setItem("selectedAssassin", JSON.stringify(assassin));
    window.location.href = "order.html";
}
