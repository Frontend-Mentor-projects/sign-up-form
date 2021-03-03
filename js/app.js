const form = document.querySelector('#form');
const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

form.addEventListener('submit', (e) => {

      e.preventDefault();

      checkInputs();
});

// check if input is empty or not
function checkInputs() {
      const firstNameValue = firstName.value.trim();
      const lastNameValue = lastName.value.trim();
      const emailValue = email.value.trim();
      const passwordValue = password.value.trim();



      if (firstNameValue === "") {
            setErrorFor(firstName, "First Name cannot be empty");
      } else {
            setSuccessFor(firstName);
      }

      if (lastNameValue === "") {
            setErrorFor(lastName, "Last Name cannot be empty");
      } else {
            setSuccessFor(lastName);
      }

      if (emailValue === "") {
            setErrorFor(email, "Looks like this is not an email");
      } else if (!isEmail(emailValue)) {
            setErrorFor(email, "Please enter valid email address")
      } else {
            setSuccessFor(email);
      }

      if (passwordValue === "") {
            setErrorFor(password, "Password cannot be empty")
      } else {
            setSuccessFor(password);
      }

      if (firstNameValue !== "" && lastNameValue !== "" && emailValue !== "" && emailValue !== isEmail() && passwordValue !== "") {
            submit();
      }
}

// show error message for current input
function setErrorFor(input, message) {
      const formControl = input.parentElement;
      const small = formControl.querySelector("small");

      small.innerText = message;

      formControl.className = "form-control error";
}

//show success for current input
function setSuccessFor(input) {
      const formControl = input.parentElement;
      formControl.className = "form-control success";
}

// test if email is valid
function isEmail(email) {
      let re = /\S+@\S+\.\S+/;
      return re.test(email);
}

// submits the form
function submit() {
      const blur = document.querySelector(".blur");
      blur.style.display = "flex";
      blur.getElementsByTagName("h2")[0].innerHTML = email.value + " is registered for 7 days free trial. We will send You notification on email!";

}

