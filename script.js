const likeBtn = document.querySelector("#avatar-like-btn");
const avatarImg = document.querySelector("#avatar-img");

function returnImg() {
  avatarImg.src =
    "images/Screenshot_2022-04-09-02-59-32-44_93a169e70364edff3877c8161f778a95_561_-modified-removebg-preview (1)-modified.png";
}

function change() {
  avatarImg.src =
    "images/34129d3ea2b2a4c18c0e24c400b9ee2bec9344a85771544db74bc72919d13373.0[563].png";
  setInterval(returnImg, 1500);
}

likeBtn.addEventListener("click", () => {
  change();
});
