let code_sec1 = `<div class="container_what_we_do_card">
<div class="line_vertical"></div>
<div class="shape_circle_tail pointer noselect">
<h3>
`;
let code_sec2 = `
</h3>
</div>
<div class="container_what_we_do_content">
  <h3 class="container_what_we_do_content_title pointer noselect">`;
let code_sec3 = `</h3>
<div class="split_secion_grid_2">


<img class="image_optomization `
let code_sec4 = `" src=`

let code_sec5 = ` alt="shape_1"/>


</div>
</div></div>

</div>
</div>
</div>`;













let data = [{
        "title": "Weight Loss",
        "description": "We help you lose weight and get in shape",
        "h1": "DIET PLAN FOR WEIGHT LOSS",
        "img_link": "../../assist/images/fat_billy.png",
        "image_sizing": "image_sizing_1\""
    },
    {
        "title": "Food Salads",
        "description": "We help you eat healthy and delicious food",
        "h1": "Personalized Nutrition Plan",
        "img_link": "../../assist/images/salad.png",
        "image_sizing": "image_sizing_2\""

    },
    {
        "title": "Food Sensitivities",
        "description": "We help you identify food sensitivities and allergies",
        "h1": "Excess Weight is the Result of Bad Nutrition",
        "image_sizing": "image_sizing_3\"",
        "img_link": "../../assist/images/ill.png"

    }, {
        "title": "Daily Exercise ",
        "h1": "We Have A Exercise Program",
        "description": "We help you get in shape with a daily exercise plan",
        "img_link": "../../assist/images/training.png",
        "image_sizing": "image_sizing_4\"",

    }
];









let container = document.querySelector(".list_what_we_do");

for (let i = 0; i < data.length; i++) {
    container.innerHTML += code_sec1 + (i + 1) + code_sec2 + data[i].title + code_sec3 + data[i].image_sizing + code_sec4 + data[i].img_link + code_sec5;
    document.getElementsByClassName("shape_circle_tail")[i].classList.add("color_" + (i + 1));
    document.getElementsByClassName("container_what_we_do_content_title")[i].classList.add("color_text_" + (i + 1));
    document.getElementsByClassName("line_vertical")[i].classList.add("color_" + (i + 1));

}