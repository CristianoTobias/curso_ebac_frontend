document.addEventListener("DOMContentLoaded", function () {
  const nameElement = document.querySelector("#name");
  const usernameElement = document.querySelector("#username");
  const avatarElement = document.querySelector("#avatar");
  const reposElement = document.querySelector("#repos");
  const followersElement = document.querySelector("#followers");
  const followingElement = document.querySelector("#following");
  const linkElement = document.querySelector("#link");
  // fetch("https://api.github.com/users/CristianoTobias")
  //   .then(function (res) {
  //     return res.json();
  //   })
  //   .then(function (json) {
  //     nameElement.innerText = json.name;
  //     usernameElement.innerText = json.login;
  //     avatarElement.src = json.avatar_url;
  //     reposElement.innerText = json.public_repos;
  //     followersElement.innerText = json.following;
  //     followingElement.innerText = json.followers;
  //     linkElement.href = json.html_url;
  //   })

  const endpoint = "https://api.github.com/users/CristianoTobias";

  $.ajax(endpoint).done(function (resp) {
    nameElement.innerText = resp.name;
    usernameElement.innerText = resp.login;
    avatarElement.src = resp.avatar_url;
    reposElement.innerText = resp.public_repos;
    followersElement.innerText = resp.following;
    followingElement.innerText = resp.followers;
    linkElement.href = resp.html_url;
  });
});
