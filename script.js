let emailInput = document.querySelector(".email-input");

function newCustomer() {
  let email = emailInput.value;
  checkEmail(email);

  if (checkEmail(email) === false) {
    return (
      (document.querySelector(".email-input").value = ""),
      alert("Digite o e-mail corratamente")
    );
  } else {
    localStorage.setItem("userEmail", email);
    return (
      (document.querySelector(".email-input").value = ""),
      alert("E-mail salvo!")
    );
  }
}

function checkEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}
