window.onload = function () {
  document.getElementById("local1").style.display = 'none';
  function onConfirm() { }
  setTimeout(function () {
    navigator.notification.beep(1);
    navigator.notification.confirm(
      'Hoje é um belo dia para passear de bicicleta!',
      onConfirm,
      'EQUIPE MECode.',
      ['VOLTAR']
    );
  }, 15000);
  setTimeout(function () {
    navigator.notification.beep(1);
    navigator.notification.confirm(
      'Se hidrate! Beba bastante água!',
      onConfirm,
      'EQUIPE MECode.',
      ['VOLTAR']
    );
  }, 40000);
  setTimeout(function () {
    navigator.notification.beep(1);
    navigator.notification.confirm(
      'A cidade fica linda quando ajudamos a mantê-la assim!!',
      onConfirm,
      'EQUIPE MECode.',
      ['VOLTAR']
    );
  }, 55000);
  setTimeout(function () {
    navigator.notification.beep(1);
    navigator.notification.confirm(
      'Que tal aproveitar a praia',
      onConfirm,
      'EQUIPE MECode.',
      ['VOLTAR']
    );
  }, 70000);
}

function ganhaPonto() {
  cordova.plugins.barcodeScanner.scan(
    function (codBarra) {
      var codBarra = codBarra.text;
      if (codBarra == '12345') {
        var valor = 0;
        for (valor = 0; valor <= 90; valor++) {
          document.getElementById("local1").style.display = "";
          document.getElementById("pontos").textContent = parseInt(valor);
        }
      } else {
        function onConfirm() { }
        navigator.notification.beep(1);
        navigator.notification.confirm(
          'Nenhum código cadastrado corresponde',
          onConfirm,
          'EQUIPE MECode.',
          ['VOLTAR']
        );
      }
    },
    function (error) {

    },
    {
      preferFrontCamera: false, // iOS and Android
      showFlipCameraButton: true, // iOS and Android
      showTorchButton: true, // iOS and Android
      torchOn: false, // Android, launch with the torch switched on (if available)
      saveHistory: true, // Android, save scan history (default false)
      prompt: "Mantenha o código na área marcada", // Android
      resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
      formats: "QR_CODE,PDF_417, CODE_39", // default: all but PDF_417 and RSS_EXPANDED
      orientation: "retrat", // Android only (portrait|landscape), default unset so it rotates with the device
      disableAnimations: false, // iOS
      disableSuccessBeep: false // iOS and Android
    }
  );
}

function redirectMapa() {
  window.location.href = "mapa.html";
}

function redirectPerfil() {
  window.location.href = "user.html";
}

function redirectTroca() {
  window.location.href = "troca.html";
}

function notificar() {

}
