if (localStorage.getItem("isSmall") === "yes") {
  SidebarID.classList.add("small-sidebare");
} else {
  SidebarID.classList.remove("small-sidebare");
}
const togglesidebar = () => {
  console.log("ssssssssssssss");
  if (localStorage.getItem("isSmall") === "yes") {
    localStorage.setItem("isSmall", "no");
    SidebarID.classList.remove("small-sidebare");
  } else {
    localStorage.setItem("isSmall", "yes");
    SidebarID.classList.add("small-sidebare");
  }
};
