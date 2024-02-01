function addHeader(el) {
  const elemento = document.createElement("div");
  elemento.innerHTML = `
  <section class="header">
        <img src="/Assets/Logo-nacho.jpg" alt="" class="template__logo" />
        <img class="header__burguer" src="/Assets/menu-svgrepo-com 1bars.png" alt="" />

    <div class="burger-menu">
    <img class="burger-x" src="/Assets/ximg.png" alt="" />
      
      <a href="./portfolio.html" class="burger__link">Portfolio</a>
      <a href="./servicios.html" class="burger__link">Servicios</a>
      <a href="./contacto.html" class="burger__link">Contacto</a>
</div>
      <template class="template">
        <div class="template__links">
          <a class="template__portfolio" href="/portfolio.html"></a>
          <a class="template__service" href="/servicios.html"></a>
          <a class="template__contact" href="/contacto.html"></a>
        </div>
      </template>
    </section>`;

  function showText(fields) {
    const template = document.querySelector(".template");
    const container = document.querySelector(".header");

    for (const f of [fields]) {
      const portfolioEl = template.content.querySelector(
        ".template__portfolio"
      );
      portfolioEl.textContent = f.portfolio;

      const serviceEl = template.content.querySelector(".template__service");
      serviceEl.textContent = f.servicios;

      const contactEl = template.content.querySelector(".template__contact");
      contactEl.textContent = f.contacto;

      const clone = document.importNode(template.content, true);
      container.appendChild(clone);
    }
  }

  function main() {
    fetch(
      "https://cdn.contentful.com/spaces/rxsmar2qufs3/environments/master/entries/544221j9PKIb6jLvdK7WdH?access_token=3xHZ2GHLhftskQL11ok7-Z922DaJyWjrSLjidaxRsDM"
    )
      .then((response) => response.json())
      .then((data) => showText(data.fields));
  }

  main();

  el.appendChild(elemento);
  burgerMenu();
}

function burgerMenu() {
  const imageMenu = document.querySelector(".header__burguer");
  const burgerDiv = document.querySelector(".burger-menu");
  const xclose = document.querySelector(".burger-x");

  imageMenu.addEventListener("click", () => {
    burgerDiv.style.display = "inherit";
  });

  xclose.addEventListener("click", () => {
    burgerDiv.style.display = "none";
  });
}
