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

let newComment = document.querySelector("#comment0").cloneNode(true);

document
  .querySelector(".comments_face .comments")
  .addEventListener("click", function () {
    document.querySelector(".comments_face .add_comment").style.display =
      "block";
  });

document
  .querySelector(".comments_face .publish_comment")
  .addEventListener("click", function () {
    console.log(document.querySelector(".add_comment textarea").value);
    newComment.querySelector(".name font font").innerHTML = "Anonim";
    newComment.querySelectorAll(".comment-content p")[1].innerHTML =
      document.querySelector(".add_comment textarea").value;
    document
      .querySelector(".add_comment")
      .insertBefore(
        newComment,
        document.querySelector(".add_comment").nextSibling
      );
    document
      .querySelector(".comments_face .comments")
      .addEventListener("click", function () {});
    document.querySelector(".comments_face .add_comment").style.display =
      "none";
    document.querySelector(".add_comment textarea").value = "";
  });
