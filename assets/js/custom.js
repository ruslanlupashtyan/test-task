let message = "";

let q1 = document.querySelector("#q1");
let q2 = document.querySelector("#q2");
let q3 = document.querySelector("#q3");
let q4 = document.querySelector("#q4");

function findElement(e) {
  if (!e.children || e.children.length === 0) {
    return e;
  } else {
    return findElement(e.children[0]);
  }
}

q1.addEventListener("click", function (e) {
  let deepestElement = findElement(e.target);
  let deepestText = deepestElement.innerHTML;
  message += `Sex - ${deepestText}\n`;
});

q2.addEventListener("click", function (e) {
  let deepestElement = findElement(e.target);
  let deepestText = deepestElement.innerHTML;
  message += `Age - ${deepestText}\n`;
});

q3.addEventListener("click", function (e) {
  let deepestElement = findElement(e.target);
  let deepestText = deepestElement.innerHTML;
  message += `Family count - ${deepestText}\n`;
});

q4.addEventListener("click", function (e) {
  let deepestElement = findElement(e.target);
  let deepestText = deepestElement.innerHTML;
  message += `Last question - ${deepestText}\n`;
});

document
  .querySelector("#p_modal_button3")
  .addEventListener("click", function () {
    console.log(message);
  });

let targetBox = document.querySelector("#comment0");
let cloneComment = targetBox.cloneNode(true);
let addComment = document.querySelector(".comments_face .comments");
let newComment = document.querySelector(".add_comment");
let publishComment = document.querySelector(".comments_face .publish_comment");
let commentTxt = document.querySelector(".add_comment textarea");
let custom = document.querySelectorAll(".comments")[1];

addComment.addEventListener("click", function () {
  newComment.style.display = "block";
});

publishComment.addEventListener("click", function () {
  cloneComment.querySelector(".name font font").innerHTML = "Anonim";
  cloneComment.querySelectorAll(".comment-content p")[1].innerHTML =
    commentTxt.value;
  console.log(custom);
  addComment.parentNode.insertBefore(cloneComment, custom.previousSibling);
  document.querySelector(".comments_face .add_comment").style.display = "none";
  commentTxt.value = "";
});
