/* =====================================================================
   CONFIGURACIÓN DEL PORTAL  -  este es el ÚNICO archivo que usted edita
   (sigue los pasos de PASOS.md; los datos de "firebase" los copia de la
   página de Firebase, sección "Configuración del proyecto").
   ===================================================================== */
window.QC_CONFIG = {
  // Nombre que aparece en la página
  nombre: "Control interno de calidad",

  // Correo(s) de Google que pueden entrar al panel del director
  // (tiene que ser el MISMO que puso en firestore.rules)
  admins: ["gestion.laboratoriobiolaq@gmail.com"],

  // Datos de conexión de Firebase (copiar y pegar desde la consola de Firebase)
  firebase: {
    apiKey: "AIzaSyAiWbIKwN6fwkcUFSt0I8CRKOFrA7ZZ_rk",
    authDomain: "control-calidad-lab-9fe9c.firebaseapp.com",
    projectId: "control-calidad-lab-9fe9c",
    appId: "1:813935119308:web:99bdcc87ac5bf361dd6b69"
  }
};
/* Mientras "firebase" esté vacío, la página funciona en MODO DEMOSTRACIÓN
   (los datos se guardan solo en ese navegador, sirve para probar). */
