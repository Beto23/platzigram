var yo = require(yo-yo);

module.exports = yo`<div class="container">
      <div class="row">
        <div class="col s10 push-s1">
          <div class="row">
            <div class="col m5 hide-on-small-only">
              <img src="iphone.png" class="iphone" alt="">
            </div>
            <div class="col s12 m7">
              <div class="row">
                <div class="signup-box">
                  <h1 class="platzigram">Platzigram</h1>
                  <form action="" class="signup-form">
                    <h2>Registrate para ver fotos de tus amigos estudiando en Platzi</h2>
                    <div class="section">
                      <a href="" class="btn btn-fb hide-on-small-only">Iniciar sesón con Facebook</a>
                      <a href="" class="btn btn-fb hide-on-med-and-up">Iniciar sesón</a>
                    </div>
                    <div class="divider"></div>
                    <div class="section">
                      <input type="email" name="email" placeholder="Correo electrónico">
                      <input type="text" name="name" placeholder="Nombre completo">
                      <input type="text" name="username" placeholder="Nombre de usuario">
                      <input type="password" name="password" placeholder="Contraseña">
                      <button class="btn waves-effect waves-light btn-signup" type="submit">Registrate</button>
                    </div>
                  </form>
                </div>
              </div>
              <div class="row">
                <div class="login-box">
                  ¿Tienes una Cuenta? <a href="/signin">Entrar</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`;