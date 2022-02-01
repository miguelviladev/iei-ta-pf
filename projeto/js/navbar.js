async function esconder(navlink = true) {
    toggler_visivel = window.getComputedStyle(document.getElementById('toggler'), null).display == "block" ? true:false;
    navbar_aberta = document.getElementById('toggler').classList.contains('collapsed') ? false:true;
    if ((toggler_visivel && navbar_aberta)){
        const bsCollapse = new bootstrap.Collapse(document.getElementById("navbarNav"));
    }
  };
