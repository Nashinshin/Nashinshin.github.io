function addCards(el) {
  const elemento = document.createElement("div");
  elemento.innerHTML = `
  <div class="cards">
    <section class="container">
      <div class="card">
        <img class="card-image" src="/Assets/CardImage.png" />
        <p class="card-title">Trabajo 1</p>
        <p class="card-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          efficitur nisl enim, eu laoreet ante posuere ut. Quisque et eleifend
          velit. Nullam vulputate odio id ornare porttitor
        </p>
      </div>
    </section>
    <section class="container">
      <div class="card">
        <img class="card-image" src="/Assets/CardImage.png" />
        <p class="card-title">Trabajo 2</p>
        <p class="card-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          efficitur nisl enim, eu laoreet ante posuere ut. Quisque et eleifend
          velit. Nullam vulputate odio id ornare porttitor
        </p>
      </div>
    </section>
    <section class="container">
      <div class="card">
        <img class="card-image" src="/Assets/CardImage.png" />
        <p class="card-title">Trabajo 3</p>
        <p class="card-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          efficitur nisl enim, eu laoreet ante posuere ut. Quisque et eleifend
          velit. Nullam vulputate odio id ornare porttitor
        </p>
      </div>
    </section>
  </div>`;

  el.appendChild(elemento);
}
