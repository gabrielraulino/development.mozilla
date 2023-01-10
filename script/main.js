const myImage = document.querySelector("img");


myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/rinoceronte-negro.webp") {
    myImage.setAttribute("src", "images/mascotejs.jpg");
  } else {
    myImage.setAttribute("src", "images/rinoceronte-negro.webp");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
let myName = null;
function setUserName() {
  myName = prompt('Por favor, insira seu nome.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Javascript é legal, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Javascript é legal, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
