function addFooter(el) {
  const elemento = document.createElement("div");
  elemento.innerHTML = `
  <section class="footer-container">
  <template class="footer-template">
  <img src = "/Assets/Logo-nacho.jpg" class="template-logo"/>
  <div class="iconos">
  <div class="template-home">
    <a class="template-home-text" href="/index.html">Home</a>
    <img src = "/Assets/home.png" alt="" class="template-home-icon">
  </div>
  <div class="template-service">
    <a class="template-service-text" href="/servicios.html">Servicios</a>
    <img src="/Assets/user.png" alt="" class="template-service-icon">
  </div>
  <div class="template-contact">
    <a class="template-contact-text" href="/contacto.html">Contacto</a>
    <img src="/Assets/phone.png" alt="" class="template-contact-icon">
  </div>
  </div>
  <div class="template-media-icons">
  <a href="https://www.linkedin.com/in/ignacio-juarez-99b869275/">
    <img src="/Assets/linkedin-svgrepo-com (1) 1.png" alt=""  class="template-media-icons-linkedin">
    </a> 
    <a href="https://github.com/Nashinshin">
    <img src="/Assets/github-svgrepo-com 1.png" alt="" class="template-media-icons-github">
    </a>
    </div>
  <p class="template-copyright">@2024 - Nachito</p>
</template>
</section>
`;

  function showText(items) {
    const template = document.querySelector(".footer-template");
    const container = document.querySelector(".footer-container");
    const clone = document.importNode(template.content, true);

    for (let i of items) {
      const homeEl = template.content.querySelector(".template-home-text");
      homeEl.textContent = i.fields.homeText;

      const contactEl = template.content.querySelector(
        ".template-contact-text"
      );
      contactEl.textContent = i.fields.contactoText;

      const serviceEl = template.content.querySelector(
        ".template-service-text"
      );
      serviceEl.textContent = i.fields.serviciosText;

      const copyrightEl = template.content.querySelector(".template-copyright");
      copyrightEl.textContent = i.fields.copyright;

      container.appendChild(clone);
    }
  }

  function main() {
    fetch(
      "https://cdn.contentful.com/spaces/rxsmar2qufs3/environments/master/entries?access_token=3xHZ2GHLhftskQL11ok7-Z922DaJyWjrSLjidaxRsDM"
    )
      .then((response) => response.json())
      .then((data) => showText(data.items));
  }

  main();

  el.appendChild(elemento);
}
