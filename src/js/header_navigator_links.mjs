let local ="http://127.0.0.1:5500/"
let production= "https://dragonseg.github.io/food_receipe_project/"
//get the current url
let current_route = window.location.origin;

console.log("this is your current route: "+current_route);
let nav_object = {
  navItems: [
    {
      label: "Home",
      url: current_route+"/src/html/index.html",
    },
    {
      label: "About",
      url: current_route+"/src/html/about.html",
    },
    {
      label: "Contact",
      url: current_route+"/src/html/contact.html",
    },
  ],
};
let nav_ul = document.getElementById("header_navigator_ul");

for (const element of nav_object.navItems) {
  let li = document.createElement("li");
  let a = document.createElement("a");
  a.href = element.url;
  a.innerHTML = element.label;
  li.appendChild(a);
  nav_ul.appendChild(li);
}
