function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

async function esconder() {
  const menuToggle = document.getElementById("navbarNav");
  const bsCollapse = new bootstrap.Collapse(menuToggle);
  bsCollapse.toggle();
};
