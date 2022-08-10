const parentOriginal = document.querySelector(".content__blocks_first");
const parent = document.querySelector(".content__blocks_second");
const item = document.querySelector(".content__block_item");

window.addEventListener("resize", function () {
  const viewportWidth = window.innerWidth;
  if (viewportWidth < 992) {
    if (!item.classList.contains("done")) {
      parent.insertBefore(item, parent.children[1]);
      item.classList.add("done");
    }
  } else {
    if (item.classList.contains("done")) {
      parentOriginal.insertBefore(item, parentOriginal.children[1]);
      item.classList.remove("done");
    }
  }
});
