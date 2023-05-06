const food_sheif_items = [{
        type: "dinner",
        name: "Chicken and Rice",
        prise: 10,
        img: "../../assist/images/3.png",
        color: "yellow"
        , id: 1
    },
    {
        type: "dinner",
        name: "Chicken and Rice",
        prise: 10,
        img: "../../assist/images/3.png",
        color: "yellow"
        , id:2,
    },
    {
        type: "dinner",
        name: "Chicken and Rice",
        prise: 10,
        img: "../../assist/images/3.png",
        color:"yellow"
        , id:3,
    },
    {
        type: "dinner",
        name: "Chicken and Rice",
        prise: 10,
         id:4,
        img: "../../assist/images/3.png",
        color: "yellow"
    },
    {
        type: "dinner",
        name: "Chicken and Rice",
        prise: 10,
        id:5,
        img: "../../assist/images/3.png",
        color: "yellow"
    }, {
        type: "dinner",
        name: "Chicken and Rice",
        prise: 10,
        img: "../../assist/images/3.png",
        color: "yellow"
        ,id:6,
    },
    {
        type: "dinner",
        name: "Chicken and Rice",
        prise: 10,
        id:6,
        img: "../../assist/images/3.png",
        color: "yellow"
    },
    {
        type: "dinner",
        name: "Chicken and Rice",
        prise: 10,
        id:7,
        img: "../../assist/images/3.png",
        color: "yellow"
    },
    {
        type: "dinner",
        name: "Chicken and Rice",
        prise: 10,
        id:8,
        img: "../../assist/images/3.png",
        color: "red"
    },
    {
        type: "dinner",
        name: "Chicken and Rice",
        prise: 10,
        id:9,
        img: "../../assist/images/3.png",
        color: "yellow"
    },
    {
        type: "breakfast",
        name: "eggs and bacon",
        prise: 10,
        id:10,
        img: "../../assist/images/3.png",
        color: "yellow"
    },
    {
        type: "breakfast",
        name: "eggs and bacon",
        prise: 10,
        id:11,
        img: "../../assist/images/3.png",
        color: "yellow"
    },
];
import   "../store/API/JSON/item_recipe.js";

const food_shelf = document.querySelector(".food_shelf_container");

function createFoodShelfItem(item) {
    const food_shelf_item = document.createElement("div");
    food_shelf_item.classList.add("food_shelf_item");
    food_shelf_item.classList.add(item.type);
    food_shelf_item.innerHTML = `



    <div class="container">
    <div class="card">
        <div class="card_image2">
            <img src="${item.img}" class="card_image_inner noselect" alt="${item.name}?=${item.type}" height="170px"
                width="240px">

        </div>


        <p class="p_card_announce">
        <div class="card_h1 container">
            <div class="inner_card">
                <div class="container_food_item">
                    <div style="color:${item.color};" class="dot_spot noselect"><span style=" background-color:${item.color};
                    " class="dot_animated noselect ">.</span>${item.type}</p>

                    </div>
                    <div class="data_container">
                        <h3>${item.name}</h3>
                        <p>${item.prise}$</p>
                        <button   type="button" onclick="seeTheRecipe(${item.id})">order</button>
                    </div>
                </div>
            </div>

        </div>

        <div class="card_p container">

        </div>

    `;
    food_shelf.appendChild(food_shelf_item);
}

function showFoodShelfItems(items) {
    items.forEach((item) => {
        createFoodShelfItem(item);
    });
}

showFoodShelfItems(food_sheif_items);


