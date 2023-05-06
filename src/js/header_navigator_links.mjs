let nav_object={
  "navItems": [
    {
      "label": "Home",
      "url": "/src/html"
    },
    {
      "label": "About",
      "url": "/src/html/about"
    },
    {
      "label": "Contact",
      "url": "/src/html/contact"
    },
  ]
};
let nav_ul=document.getElementById("header_navigator_ul");

for(const element of nav_object.navItems){
  let li=document.createElement("li");
  let a=document.createElement("a");
  a.href=element.url;
  a.innerHTML=element.label;
  li.appendChild(a);
  nav_ul.appendChild(li);
}  