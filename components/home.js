function addHome(el) {
  const elemento = document.createElement("div");
  elemento.innerHTML = `<section class="introduction-container">
    <div class="introduction-text">
      <p class="introduction-text-hello">Hola</p>
      <div class="introduction-text-iam-name">
      <p class="introduction-text-iam">Soy</p>
      <p class="introduction-text-name">Nacho</p>
      </div>  
    </div>
    <img src="/Assets/RocketImage.png" alt="" class="introduction-image"/>
  </section>
  <section class="presentation-container">
    <div class="presentation-text">
      <p class="presentation-text-iam">Soy Nacho</p>
      <p class="presentation-text-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
        vulputate libero et velit interdum, ac aliquet odio mattis. Class
        aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos. Curabitur tempus urna at turpis condimentum
        lobortis....
      </p>
    </div>
      <img src="/Assets/FotoPerfil.jpg" alt="" class="presentation-image">
  </section>`;

  el.appendChild(elemento);
}
