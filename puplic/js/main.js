if (localStorage.getItem("isbig") === "yes") {
  SidebarID.classList.add("big-sidebare");
} else {
  SidebarID.classList.remove("big-sidebare");
}
const togglesidebar = () => {
  if (localStorage.getItem("isbig") === "yes") {
    localStorage.setItem("isbig", "no");
    SidebarID.classList.remove("big-sidebare");
  } else {
    localStorage.setItem("isbig", "yes");
    SidebarID.classList.add("big-sidebare");
  }
};

window.addEventListener("load", function () {
  var currentScreenWidth = window.innerWidth;
  if (currentScreenWidth < 400) {
    localStorage.setItem("isbig", "no");
    SidebarID.classList.remove("big-sidebare");
  } else {
  }
});
