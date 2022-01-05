window.onscroll = function () {
  myFunction();
};

function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector(".scroll").setAttribute("style", "display:block;");
  } else {
    document.querySelector(".scroll").setAttribute("style", "display:none");
  }

  if (document.documentElement.scrollTop > 550) {
    document
      .querySelector("#header")
      .setAttribute("style", "background: rgba(0, 0, 0, 0.5);");
  } else {
    document
      .querySelector("#header")
      .setAttribute("style", "background: none;");
  }
}

const btnScroll = document.getElementById("scroll");
btnScroll.addEventListener("click", () => {
  document.documentElement.scrollTop = 0;
});

const btnCmt = document.getElementById('sub');
const inputCmt = document.getElementById('cmt')
inputCmt.addEventListener('input',()=>{
  if(inputCmt.value){
    btnCmt.setAttribute("class",'active');
  }else{
    btnCmt.setAttribute("class",'sub');
  }
 
})

const icons = document.getElementById('icon');
console.log(icon);
const iconDiv = document.getElementById('icons')
icons.addEventListener('click',() => {
  if(iconDiv.style.display ==="none"){
    iconDiv.style.display = 'block'
  }else{
    iconDiv.style.display = 'none'
  }
})

let emoji = document.getElementsByClassName("emoji");
for (let index = 0; index < emoji.length; index++) {
  emoji[index].addEventListener('click',(e) =>{
    inputCmt.value += e.target.textContent;
    console.log(e.target.textContent);
  })
  
}

console.log(emoji.length);
const username = document.getElementById("username");
const pass = document.getElementById("password");
const notification = document.getElementById("notification");
const form = document.getElementsByClassName("login")[0];

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const check = vadilate(username.value);
//   if (check !== null) {
//     if (username.value == "longthan2819@gmail.com" && pass.value === "123") {
//       window.location = "http://127.0.0.1:5500/Film/home.html";
//     } else {
//       notification.innerText = "Username or password invalid";
//     }
//   } else {
//     console.log("say ok");
//     notification.innerText = "Username or password invalid";
//   }
// });
// const vadilate = (username) => {
//   return String(username)
//     .toLowerCase()
//     .match(
//       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//     );
// };

const btnRep = document.getElementById('reply');
const inputRep = document.getElementById('rep');
btnRep.addEventListener('click',()=>{
  inputRep.classList.toggle('disable');
})