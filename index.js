
function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  document.querySelector("#nested .target").remove();
}

function increaseRankBy(n) {
  let list = document.querySelectorAll(".ranked-list > li");
  for (var i = 0; i < list.length; i++) {
    list[i].innerHTML = parseInt(list[i].innerHTML) + n;
  }
}
