let username = document.forms['account-create-form']['username'];
let password = document.forms['account-create-form']['password'];
let passwordConfirm = document.forms['account-create-form']['password-confirm'];
let email = document.forms['account-create-form']['email'];
let prefLodging = [];

let fireCabins = document.getElementById('fire-cabins');
let horseshoeCabins = document.getElementById('horseshoe-cabins');
let spruceCabins = document.getElementById('spruce-cabins');
let ursaMajorCabins = document.getElementById('ursa-major-cabins');
let bearMeadowCampground = document.getElementById('bear-meadow-campground');
let lakesideCampground = document.getElementById('lakeside-campground');
let leadfootCampground = document.getElementById('leadfoot-campground');
let talusCampground = document.getElementById('talus-campground');

let usernameError = document.getElementById('username-error');
let passwordError = document.getElementById('password-error');
let passwordConfirmError = document.getElementById('password-confirm-error');
let emailError = document.getElementById('email-error');

let regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// Event Listeners
username.addEventListener('blur', usernameVerify);
password.addEventListener('blur', passwordVerify);
passwordConfirm.addEventListener('blur', passwordConfirmVerify);
email.addEventListener('blur', emailVerify);

// Function validate and save data of user

function accountCreate() {
  Object.prototype.validateFields = function (field, fieldError) {
    field.style.border = '1px solid #fd4949';
    fieldError.textContent = 'Required';
    fieldError.style.color = '#fd4949';
    field.focus();
  }

  if (username.value == '') {
    username.validateFields(username, usernameError);
    return false;
  }

  if (password.value == '') {
    password.validateFields(password, passwordError);
    return false;
  }

  if (passwordConfirm.value == '') {
    passwordConfirm.validateFields(passwordConfirm, passwordConfirmError);
    return false;
  }

  if (password.value != passwordConfirm.value) {
    passwordConfirm.style.border = '1px solid #fd4949';
    passwordConfirmError.textContent = 'The two passwords do not match';
    passwordConfirmError.style.color = '#fd4949';
    passwordConfirm.focus();
    return false;
  }

  if (email.value == '') {
    email.validateFields(email, emailError);
    return false;
  }
  
  if (regexEmail.test(email.value) == false) {
    email.style.border = '1px solid #fd4949';
    emailError.textContent = 'Invalid email format';
    emailError.style.color = '#fd4949';
    email.focus();
    return false;
  }

  localStorage.setItem('username', username.value);
  localStorage.setItem('password', password.value);
  localStorage.setItem('email', email.value);
  localStorage.setItem('preferred lodgings', prefLodging);
}

// Event handler functions

function usernameVerify() {
  if (username.value != '') {
    username.style.border = '1px solid #3dc03d';
    usernameError.innerHTML = '';
    return true;
  }
}

function passwordVerify() {
  if (password.value != '') {
    password.style.border = '1px solid #3dc03d';
    passwordError.innerHTML = '';
    return true;
  }
}

function passwordConfirmVerify() {
  if (passwordConfirm.value != '') {
    passwordConfirm.style.border = '1px solid #3dc03d';
    passwordConfirmError.innerHTML = '';
    return true;
  }
}

function emailVerify() {
  if (regexEmail.test(email.value) == true) {
    email.style.border = '1px solid #3dc03d';
    emailError.innerHTML = '';
    return true;
  } else if (email.value == '') {
    email.style.border = '1px solid #666';
    emailError.innerHTML = '';
  } else {
    email.style.border = '1px solid #fd4949';
    emailError.textContent = 'Invalid email format';
    emailError.style.color = '#fd4949';
  }
}

let objCkeckboxes = {
  fireCabins,
  horseshoeCabins,
  spruceCabins,
  ursaMajorCabins,
  bearMeadowCampground,
  lakesideCampground,
  leadfootCampground,
  talusCampground,
  checkedBox(props) {
    if (props.checked == true) {
      prefLodging.push(props.value);
    } else {
      prefLodging.splice(prefLodging.indexOf(props.value), 1);
    }
  }
};

fireCabins.addEventListener('change', () => {
  objCkeckboxes.checkedBox(objCkeckboxes.fireCabins);
});
horseshoeCabins.addEventListener('change', () => {
  objCkeckboxes.checkedBox(objCkeckboxes.horseshoeCabins);
});
spruceCabins.addEventListener('change', () => {
  objCkeckboxes.checkedBox(objCkeckboxes.spruceCabins);
});
ursaMajorCabins.addEventListener('change', () => {
  objCkeckboxes.checkedBox(objCkeckboxes.ursaMajorCabins);
});
bearMeadowCampground.addEventListener('change', () => {
  objCkeckboxes.checkedBox(objCkeckboxes.bearMeadowCampground);
});
lakesideCampground.addEventListener('change', () => {
  objCkeckboxes.checkedBox(objCkeckboxes.lakesideCampground);
});
leadfootCampground.addEventListener('change', () => {
  objCkeckboxes.checkedBox(objCkeckboxes.leadfootCampground);
});
talusCampground.addEventListener('change', () => {
  objCkeckboxes.checkedBox(objCkeckboxes.talusCampground);
});
