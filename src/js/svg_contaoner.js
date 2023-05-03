const svg_list = [{
        "Svg_name": "Bibo",
        "Svg_link": "../../assist/svg/Bibo Restaurant.svg"
    },
    {
        "Svg_name": "Burger King",
        "Svg_link": "../../assist/svg/Burger_King_Logo.wine.svg"
    },
    {
        "Svg_name": "Disney",
        "Svg_link": "../../assist/svg/Disney Wordmark.svg"
    },
    {
        "Svg_name": "Evotec",
        "Svg_link": "../../assist/svg/Evotec_Logo.wine.svg"
    },
    {
        "Svg_name": "Gushers",
        "Svg_link": "../../assist/svg/Gushers.svg"
    },
    {
        "Svg_name": "Gü",
        "Svg_link": "../../assist/svg/Gü_Logo.wine.svg"
    },
    {
        "Svg_name": "KFC",
        "Svg_link": "../../assist/svg/KFC Kentucky Fried Chicken Black.svg"
    },
    {
        "Svg_name": "McDonald",
        "Svg_link": "../../assist/svg/McDonald's_Logo.wine.svg"
    },
    {
        "Svg_name": "Adidas",
        "Svg_link": "../../assist/svg/Adidas New 2022.svg"
    },
    {
        "Svg_name": "tvdb",
        "Svg_link": "../../assist/svg/brand-tvdb-svgrepo-com.svg"
    },

]
let svg_container = document.getElementById("svg_container");

svg_list.forEach((item) => {
    let svg = document.createElement("img");
    svg.src = item.Svg_link;
    svg.alt = item.Svg_name;
    svg.classList.add("svg_property");
    svg_container.appendChild(svg);
})
