const food_sheif_items = [{
    "name": "Chicken Parmesan",
    "type": "dinner",
    "color": "yellow",
    "image": "../../assist/images/3.png",
        "prise": 10,
        "id": 1,
    },
    {
        "name": "Chicken Marsala",
        "type": "dinner",
        "color": "yellow",
        "image": "../../assist/images/3.png",
        "prise": 10,
         "id":2,
    },
    {
        "name": "Chicken Piccata",
        "type": "dinner",
        "color": "yellow",
        "image": "../../assist/images/3.png",
        "prise": 10,

        "id":3,
    },
    {
        "name": "Chicken Cacciatore",
        "type": "dinner",
        "color": "yellow",
        "image": "../../assist/images/3.png",
        "prise": 10,
         "id":4,

    },
    {
        "name": "Chicken Florentine",
        "type": "dinner",
        "color": "yellow",
        "image": "../../assist/images/3.png",
        "prise": 10,
        "id":5,

    }, {

        "prise": 10,
        "name": "Chicken Fettuccine Alfredo",
        "type": "dinner",
        "color": "yellow",
        "image": "../../assist/images/3.png",
        "id":6,
    },
    {
        "name": "Chicken Pot Pie",
        "type": "dinner",
        "color": "yellow",
        "image": "../../assist/images/3.png",
        "prise": 10,
        "id":6,
  
    },
    {
        "name": "Chicken Pot Pie",
        "type": "dinner",
        "color": "yellow",
        "image": "../../assist/images/3.png",
        "prise": 10,
        "id":7,

    },
    {
        "name": "Chicken Enchiladas",
        "type": "dinner",
        "color": "yellow",
        "image": "../../assist/images/3.png",
        "prise": 10,
        "id":8,

    },
    {
        "name": "Chicken Parmesan",
        "type": "dinner",
        "color": "yellow",
        "image": "../../assist/images/3.png",
        "prise": 10,
        "id":9,

    },
    {
        "name": "Chicken Piccata",
        "type": "dinner",
        "color": "yellow",
        "image": "../../assist/images/3.png",
        "prise": 10,
        "id":10,

    },
    {
        "name": "Chicken Parmesan",
        "type": "dinner",
        "color": "yellow",
        "image": "../../assist/images/3.png",
        "prise": 10,
        "id":11,
 
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
            <img src="${item.image}" class="card_image_inner noselect" alt="${item.name}?=${item.type}" height="170px"
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
                        <h4>${item.name}</h4>
                        <button   type="button" onclick="seeTheRecipe(${item.id})">Discover</button>
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


