function addContact(el){
    const elemento = document.createElement("div");
    elemento.innerHTML =`
    
    <form action="" class="contact-form">
        <h2 class="write-me">Escribime</h2>
        <div class="inputs-and-texts">
          <div class="text-inputs">
        <div class="form-name-container">
          <p class="form-name-text">Nombre</p>
          <input type="text" placeholder="Tu nombre" class="form-name-input">
        </div>
        <div class="form-email-container">
          <p class="form-email-text">Email</p>
          <input type="text" placeholder="Tu@mail.com" class="form-email-input">
        </div>
          </div>
        <div class="form-message-container">
          <p class="form-message-text">Mensaje</p>
          <textarea class="form-message-textarea" cols="30" rows="10"></textarea>
        </div>
        <button class="form-button">Enviar</button>
        </div>
      </form>
    `

    el.appendChild(elemento);
}