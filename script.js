let emailInput = document.querySelector(".email-input");

function newCustomer() {
  let email = emailInput.value;
  validateEmail(email);

  if (validateEmail(email) === false) {
    return (
      (document.querySelector(".email-input").value = ""),
      alert("Digite um e-mail válido")
    );
  } else {
    localStorage.setItem("userEmail", email);
    return (
      (document.querySelector(".email-input").value = ""),
      alert("E-mail salvo com sucesso")
    );
  }
}

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}
