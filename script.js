const assassins = [
    { name: "Mithun Das", description: "Unavailable (This assassin is currently on another mission).", price: "$1000", image: "https://raw.githubusercontent.com/KalakkalKarthikeyan/ASSASSIN.COM/refs/heads/main/Screenshot%202025-02-04%20211910.png" },
    { name: "Divyesh Das", description: "Close combat master, specializes in hand-to-hand fights and pressure point attacks.", price: "$799", image: "https://raw.githubusercontent.com/KalakkalKarthikeyan/ASSASSIN.COM/refs/heads/main/Copy%20of%20DIVYESH.JPG" },
    { name: "Hari Annan", description: "Master Mind, Uses bio technology.", price: "$910", image: "https://raw.githubusercontent.com/KalakkalKarthikeyan/ASSASSIN.COM/refs/heads/main/WhatsApp%20Image%202025-02-05%20at%2017.42.00_d1b27f94.jpg" },
    { name: "Radha Krishnan (Gang Leader)", description: "Most Paid Assassin, Eraser Act Specialist (attacks by throwing erasers), skilled in sniper attacks and strategic eliminations.", price: "$1999", image: "https://raw.githubusercontent.com/KalakkalKarthikeyan/ASSASSIN.COM/refs/heads/main/SPL%20RADHA%20KRISHNA.JPG" },
    { name: "Sanjay Das", description: "Tactical genius, specializes in ambushes and mind games to take down targets.", price: "$999", image: "https://raw.githubusercontent.com/KalakkalKarthikeyan/ASSASSIN.COM/refs/heads/main/IMG_20250204_200058%7E2.jpg" },
    { name: "Karthikeyan (Co-Leader)", description: "Smile Killer & Most Ordered Assassin, takes down targets with a deadly grin, uses psychological warfare.", price: "$1299", image: "https://raw.githubusercontent.com/KalakkalKarthikeyan/ASSASSIN.COM/refs/heads/main/karthi.jpg" },
    { name: "Vasanth Das", description: "Most Low Paid & Worst Skilled Assassin, often misses his target, clumsy with weapons, but still tries his best.", price: "$399", image: "https://raw.githubusercontent.com/KalakkalKarthikeyan/ASSASSIN.IN/refs/heads/main/vas.jpg" },
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

async function orderAssassin(index) {
    const assassin = assassins[index];
    localStorage.setItem("selectedAssassin", JSON.stringify(assassin));

    // Get target details
    let targetName = document.getElementById("target").value;
    let location = document.getElementById("location").value;
    let photoFile = document.getElementById("target-photo").files[0];

    if (!targetName || !location || !photoFile) {
        alert("Please enter target details and upload a photo before choosing an assassin!");
        return;
    }

    let reader = new FileReader();
    reader.onload = async function(e) {
        let photoURL = e.target.result;

        let formData = {
            targetName,
            location,
            photo: photoURL,
            assassinName: assassin.name,
            assassinPrice: assassin.price,
            assassinDescription: assassin.description
        };

        let googleSheetURL = "https://script.google.com/macros/s/AKfycbxmb0XJ4Teqg5uolh32cmvYn5sc0wgVrQA1mbBzWoZmAx31AdqGFWx0byd3ksqHKS4S/exec"; // Replace with your Web App URL

        let response = await fetch(googleSheetURL, {
            method: "POST",
            body: JSON.stringify(formData),
            headers: { "Content-Type": "application/json" }
        });

        let result = await response.text();
        if (result === "Success") {
            alert("Order Saved Successfully!");
            window.location.href = "order.html";
        } else {
            alert("Error saving order!");
        }
    };

    reader.readAsDataURL(photoFile);
}

