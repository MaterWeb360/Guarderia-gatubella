function mostrarRedes() {
  const redes = document.querySelector(".bns_sociales");
  if (redes.classList.contains("visible")) {
    redes.classList.remove("visible");
    redes.style.opacity = "0";
    redes.style.transform = "translateY(-10px)";
    setTimeout(() => {
      redes.style.display = "none";
    }, 500); // mismo tiempo que el transition
  } else {
    redes.style.display = "flex";
    redes.style.opacity = "0";
    redes.style.transform = "translateY(-10px)";
    
    // Forzamos reflow
    void redes.offsetWidth;

    redes.classList.add("visible");
    redes.style.opacity = "1";
    redes.style.transform = "translateY(0)";
  }
}
$('.faq_trigger').on('click', function () {
  const $acordeon = $(this).closest('.faq_acordeon');
  const $body = $acordeon.find('.faq_body');
  $('.faq_body').not($body).css('height', '0');
  if ($body.height() > 0) {
    $body.css('height', '0');
  } else {
    $body.css('height', 'auto');
    const fullHeight = $body.height();
    $body.css('height', '0');
    void $body[0].offsetWidth;
    $body.css('height', fullHeight + 'px');
  }
});
function cerrarReserva(){
  const reserva = document.querySelector(".form_rserva");
  reserva.style.display = "none";
}
function abrirReserva(){
  const reserva = document.querySelector(".form_rserva");
  reserva.style.display = "flex";
}
function cerrarMenu(){
  if (window.innerWidth <= 1337) {
    const menu = document.querySelector(".menu_wrp");
    const buttonOpen = document.querySelector("#openId");
    const buttonClose = document.querySelector("#closeId");
    menu.style.display = "none";
    buttonOpen.style.display = "flex";
    buttonClose.style.display = "none"; 
  }
}

function abrirMenu(){
  if (window.innerWidth <= 1337) {
    const menu = document.querySelector(".menu_wrp");
    const buttonOpen = document.querySelector("#openId");
    const buttonClose = document.querySelector("#closeId");
    menu.style.display = "flex";
    buttonOpen.style.display = "none";
    buttonClose.style.display = "flex"; 
  }
}
