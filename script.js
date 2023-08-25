// get passworld fields
const password = document.getElementById("pw1");
const confirmPassword = document.getElementById("pw2");

// check if password match
function checkPassword() {
  if (password.value!== confirmPassword.value) {
    confirmPassword.setCustomValidity("The entered passwords do not match.");
  } else {
    confirmPassword.setCustomValidity('');
  }
}

password.onchange = checkPassword;