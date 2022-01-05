const username = document.getElementById("username");
const pass = document.getElementById("password");
const notification = document.getElementById("notification");
const form = document.getElementsByClassName("login")[0];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const check = vadilate(username.value);
  if (check !== null) {
    if (username.value == "longthan2819@gmail.com" && pass.value === "123") {
      window.location = "http://127.0.0.1:5500/Film/home.html";
    } else {
      notification.innerText = "Username or password invalid";
    }
  } else {
    console.log("say ok");
    notification.innerText = "Username or password invalid";
  }
});
const vadilate = (username) => {
  return String(username)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
