const food_sheif_items = [{
        type: "dinner",
        name: "Chicken and Rice",
        prise: 10,
        img: "../../assist/images/3.png",
        color: "yellow"
    },
    {
        type: "dinner",
        name: "Chicken and Rice",
        prise: 10,
        img: "../../assist/images/3.png",
        color: "yellow"
    },
    {
        type: "dinner",
        name: "Chicken and Rice",
        prise: 10,
        img: "../../assist/images/3.png",
        color: "yellow"
    },
    {
        type: "dinner",
        name: "Chicken and Rice",
        prise: 10,

        img: "../../assist/images/3.png",
        color: "yellow"
    },
    {
        type: "dinner",
        name: "Chicken and Rice",
        prise: 10,

        img: "../../assist/images/3.png",
        color: "yellow"
    }, {
        type: "dinner",
        name: "Chicken and Rice",
        prise: 10,
        img: "../../assist/images/3.png",
        color: "yellow"
    },
    {
        type: "dinner",
        name: "Chicken and Rice",
        prise: 10,
        img: "../../assist/images/3.png",
        color: "yellow"
    },
    {
        type: "dinner",
        name: "Chicken and Rice",
        prise: 10,

        img: "../../assist/images/3.png",
        color: "yellow"
    },
    {
        type: "dinner",
        name: "Chicken and Rice",
        prise: 10,

        img: "../../assist/images/3.png",
        color: "red"
    },
    {
        type: "dinner",
        name: "Chicken and Rice",
        prise: 10,

        img: "../../assist/images/3.png",
        color: "yellow"
    },
    {
        type: "breakfast",
        name: "eggs and bacon",
        prise: 10,

        img: "../../assist/images/3.png",
        color: "yellow"
    },
    {
        type: "breakfast",
        name: "eggs and bacon",
        prise: 10,

        img: "../../assist/images/3.png",
        color: "yellow"
    },
];

const food_shelf = document.querySelector(".food_shelf_container");

function createFoodShelfItem(item) {
    const food_shelf_item = document.createElement("div");
    food_shelf_item.classList.add("food_shelf_item");
    food_shelf_item.classList.add(item.type);
    food_shelf_item.innerHTML = `



    <div class="container">
    <div class="card">
        <div class="card_image2">
            <img src="${item.img}" class="card_image_inner" alt="" height="170px"
                width="240px">

        </div>


        <p class="p_card_announce">
        <div class="card_h1 container">
            <div class="inner_card">
                <div class="container_food_item">
                    <div style="color:${item.color};" class="dot_spot"><span style="  background-color:${item.color};
                    " class="dot_animated ">.</span>${item.type}</p>

                    </div>
                    <div class="data_container">
                        <h3>${item.name}</h3>
                        <p>${item.prise}$</p>
                        <button>order</button>
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