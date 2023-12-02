const usuarios = [
  { usuario: "john.doe@example.com", contraseña: "JohnDoe123" },
  { usuario: "jane.smith@example.com", contraseña: "JaneSmith456" },
  { usuario: "bob.jones@example.com", contraseña: "BobJones789" }
];

function validadorEmail(correo) 
{
  let msmCorreo = "";
  const revisarCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!revisarCorreo.test(correo)) 
  {
    msmCorreo = "¡ERROR! Ingresa un correo válido";
  }

  if (correo === "") 
  {
    msmCorreo = "Por favor, llena todos los campos. Ingresa un correo";
  }

  return msmCorreo;
}


function validadorPass(contraseña) {
  let mensajeContraseña = "";

  if (contraseña === "") {
    mensajeContraseña = "Por favor, llena todos los campos. Ingresa una contraseña";
  } else if (contraseña.length < 8) {
    mensajeContraseña = "La contraseña debe tener mas de 8 carateres";
  } else if (!/[A-Z]/.test(contraseña)) {
    mensajeContraseña = "La contraseña debe tener mas de una mayúscula :)";
  } else if (!/[a-z]/.test(contraseña)) {
    mensajeContraseña = "La contraseña debe tener mas de una minúscula";
  } else if (!/\d{2}/.test(contraseña)) {
    mensajeContraseña = "La contraseña debe contener mas de 2 números";
  }

  return mensajeContraseña;
}


function validarUsuario(email, contraseña) {
  const userEncontrado = usuarios.find(user => user.usuario === email && user.contraseña === contraseña);

  return userEncontrado ? "" : "Usuario no válido. Ingresa un usuario y una contraseña correctos";
}

function miPromesa() {
  return new Promise(resolve => {
   
    setTimeout(() => {
      resolve("");
    }, 2000);
  });
}

function login() {
  const email = document.getElementById("email").value;
  const contraseña = document.getElementById("password").value;

  const mensCorreo = validadorEmail(email);
  const mensPaas = validadorPass(contraseña);
  const mensPass = validarUsuario(email, contraseña);

  const mens = mensCorreo || mensPaas || mensPass;

  if (mens) {
    document.getElementById("msm").innerHTML = mens;
   
    
  } else {
    miPromesa().then(mensajeExito => {
      document.getElementById("msm").innerHTML = mensajeExito;
      clean();
      // Redirige a productos.html después de un inicio de sesion valdado
      window.location.href = "productos.html";
    });
  }
}

function limpiar() {
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
  document.getElementById("msm").innerHTML = "";
}

function clean() {
  limpiar();
}


