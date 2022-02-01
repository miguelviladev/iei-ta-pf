function esconder() {
  const menuToggle = document.getElementById("navbarNav");
  const bsCollapse = new bootstrap.Collapse(menuToggle);
  bsCollapse.toggle();
  console.log("oops");
};
