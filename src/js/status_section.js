const data = [{
        "h1": "90",
        "p": "CITIES",
    },
    {
        "h1": "41B+",
        "p": "customer PER WEEK",
    },
    {
        "h1": "10PB",
        "p": "Search SERVED",
    },
    {
        "h1": "99.99%",
        "p": "customer SATISFACTION",
    }
]
const container = document.getElementById("container");

data.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add("element");
    div.innerHTML = `
        <h1 class="element_h1">${item.h1}</h1>
        <p class="element_p">${item.p}</p>
    `;
    container.appendChild(div);
})