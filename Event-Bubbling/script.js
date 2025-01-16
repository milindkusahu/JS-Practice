let grandParent = document.getElementById("grandParent");
let parent = document.getElementById("parent");
let child = document.getElementById("child");

grandParent.addEventListener(
  "click",
  (e) => {
    console.log("Grand Parent clicked");
    e.stopPropagation();
  },
  true
);

parent.addEventListener(
  "click",
  (e) => {
    console.log("Parent clicked");
    e.stopPropagation();
  },
  true
);

child.addEventListener(
  "click",
  () => {
    console.log("Button Clicked");
  },
  true
);
