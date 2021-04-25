let usernameProfile = document.getElementById('username-profile');
let emailProfile = document.getElementById('email-profile');
let prefLodgingProfile = document.getElementById('pref-lodging-profile');

let usernameValue = localStorage.getItem('username');
let emailValue = localStorage.getItem('email');
let prefLodgingValue = localStorage.getItem('preferred lodgings');

window.onload = () => {
  userData();
};

function userData() {
  let usernameElem = document.createElement('div');
  let emailElem = document.createElement('div');
  let prefLodgingValueArr = prefLodgingValue.split(',');
  
  usernameElem.classList.add('data-user-profile');
  usernameElem.innerHTML = usernameValue;
  usernameProfile.appendChild(usernameElem);
  emailElem.classList.add('data-user-profile');
  emailElem.innerHTML = emailValue;
  emailProfile.appendChild(emailElem);
  
  for (let i = 0; i < prefLodgingValueArr.length; i++) {
    let prefLodg = prefLodgingValueArr[i];
    let preflodgingElem = document.createElement('div');
    preflodgingElem.classList.add('data-user-profile');
    preflodgingElem.textContent = prefLodg;
    prefLodgingProfile.appendChild(preflodgingElem);
  }
}
