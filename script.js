const assassins = [
    { name: "Mithun Das", description: "Sorry, this assassin is busy taking down Thanos!.", price: "$1050", image: "https://raw.githubusercontent.com/KalakkalKarthikeyan/ASSASSIN.COM/refs/heads/main/Screenshot%202025-02-04%20211910.png" },
    { name: "Divyesh Das", description: "Close combat master, specializes in hand-to-hand fights and pressure point attacks.", price: "$799", image: "https://raw.githubusercontent.com/KalakkalKarthikeyan/ASSASSIN.COM/refs/heads/main/Copy%20of%20DIVYESH.JPG" },
    { name: "Hari Annan", description: "Master Mind, Uses bio technology.", price: "$910", image: "https://raw.githubusercontent.com/KalakkalKarthikeyan/ASSASSIN.COM/refs/heads/main/WhatsApp%20Image%202025-02-05%20at%2017.42.00_d1b27f94.jpg" },
    { name: "Radha Krishnan (Gang Leader)", description: "Most Paid Assassin, Eraser Act Specialist (attacks by throwing erasers), skilled in sniper attacks and strategic eliminations.", price: "$1999", image: "https://raw.githubusercontent.com/KalakkalKarthikeyan/ASSASSIN.COM/refs/heads/main/SPL%20RADHA%20KRISHNA.JPG" },
    { name: "Sanjay Das", description: "Tactical genius, specializes in ambushes and mind games to take down targets.", price: "$999", image: "https://raw.githubusercontent.com/KalakkalKarthikeyan/ASSASSIN.COM/refs/heads/main/IMG_20250204_200058%7E2.jpg" },
    { name: "Karthikeyan (Co-Leader)", description: "Smile Killer & Most Ordered Assassin, takes down targets with a deadly grin, uses psychological warfare.", price: "$1299", image: "https://raw.githubusercontent.com/KalakkalKarthikeyan/ASSASSIN.COM/refs/heads/main/karthi.jpg" },
    { name: "Vasanth Das", description: "Worst Skilled Assassin, often misses his target, Still Fighting With Chutki For A Laddoo.", price: "$399", image: "https://raw.githubusercontent.com/KalakkalKarthikeyan/ASSASSIN.IN/refs/heads/main/va.jpg" },
    { name: "Vikaash Das", description: "Gadget specialist, known for setting up clever traps and using high-tech gear for the job.", price: "$999", image: "https://raw.githubusercontent.com/KalakkalKarthikeyan/ASSASSIN.COM/refs/heads/main/vi.jpg" }
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
