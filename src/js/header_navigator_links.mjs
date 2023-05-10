let nav_object = {
  navItems: [
    {
      label: "Home",
      url: "/food_receipe_project/src/html/index.html",
    },
    {
      label: "About",
      url: "/food_receipe_project/src/html/about.html",
    },
    {
      label: "Contact",
      url: "/food_receipe_project/src/html/contact.html",
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
