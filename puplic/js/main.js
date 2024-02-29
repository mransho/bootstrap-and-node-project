if (localStorage.getItem("isSmall") === "yes") {
  SidebarID.classList.add("small-sidebare");
} else {
  SidebarID.classList.remove("small-sidebare");
}
const togglesidebar = () => {
  if (localStorage.getItem("isSmall") === "yes") {
    localStorage.setItem("isSmall", "no");
    SidebarID.classList.remove("small-sidebare");
  } else {
    localStorage.setItem("isSmall", "yes");
    SidebarID.classList.add("small-sidebare");
  }
};

window.addEventListener("load", function () {
  var currentScreenWidth = window.innerWidth;
  if (currentScreenWidth < 400) {
    localStorage.setItem("isSmall", "yes");
    SidebarID.classList.add("small-sidebare");
  } else {
  }
});
