
    function seeTheRecipe(id_number_recipe) {
      
        $(document).ready(function () {
          fetch("/src/store/API/JSON/recipes.json").
            then(response => response.json()).
            then(data => {
                console.log(data.data[id_number_recipe-1]);
                $(document).ready(function () {
                    localStorage.setItem("recipe_data", JSON.stringify(item_data.data[id_number_recipe]));
                });
                let recipe = data.data[id_number_recipe-1];
            let recipe_data = getdata_byID(data,id_number_recipe-1);
            console.log(recipe_data);
          
            });
        });
    }
    
    
let item_data ;
function getdata_byID (object,id_number_recipe) {
    item_data =object;
    console.log(item_data.data[id_number_recipe].id);
    
    $(document).ready(function () {
        localStorage.setItem("recipe_data", JSON.stringify(item_data.data[id_number_recipe]));

        window.location.href = '/src/html/recipes.html';
    });
    
    // jquery retrerive data from local storage
    $(document).ready(function () {
        let recipe_data = JSON.parse(localStorage.getItem("recipe_data"));
        console.log(recipe_data);
    });
}

   