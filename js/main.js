/*open-close header mobıle menu*/

function openNav() {
  document.getElementById("myNav").style.width = "65%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

window.onscroll = function () {
  myFunction();
};

var header = document.getElementById("header");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}



const constraints = {
  name: {
      presence: { allowEmpty: false }
  },
  email: {
      presence: { allowEmpty: false },
      email: true
  },
  message: {
      presence: { allowEmpty: false }
  }
};

const form = document.getElementById('contact-form');
form.addEventListener('submit', function (event) {

  const formValues = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      message: form.elements.message.value
  };


  const errors = validate(formValues, constraints);
  if (errors) {
      event.preventDefault();
      const errorMessage = Object
          .values(errors)
          .map(function (fieldValues) {
              return fieldValues.join(', ')
          })
          .join("\n");

      alert(errorMessage);
  }
}, false);