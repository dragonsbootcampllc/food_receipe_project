let local ="http://127.0.0.1:5500"
let production= "/food_receipe_project/"
//get the current url
let current_route = window.location.origin;
let route = "";
if (current_route == local){
  //do nothing
}else{
  route = production
}
  
console.log("this is your current route: "+route+"/src/html/contact.html");
let nav_object = {
  navItems: [
    {
      label: "Home",
      url: route+"/src/html/index.html",
    },
    {
      label: "About",
      url: route+"/src/html/about.html",
    },
    {
      label: "Contact",
      url: route+"/src/html/contact.html",
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
