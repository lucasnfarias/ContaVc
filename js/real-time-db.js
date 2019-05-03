    var inputEmail = document.getElementById('inputEmail');
    var inputName = document.getElementById('inputName');
    var addBtn = document.getElementById('addBtn');
    var ipUser = document.getElementById('ip');
    var dataHora = new Date().toJSON(); 
    
//Ao clicar no botão
addBtn.addEventListener('click', function () {
  var typo = document.getElementById('tipoNeg');
  create(inputName.value, inputEmail.value, ipUser.value, typo.value);
});

function create(name, email, ip, tipo) {
  var data = {
      name: name,
      email: email,
      ip: ip,
      tipo: tipo,
      date: dataHora
  };
  return firebase.database().ref().child('leads').push(data);
}

