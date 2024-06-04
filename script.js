const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");

console.log(tabItems);

function selectItem(e) {
  // Add Border to current tab
  removeBorder();
  removeShow();
  this.classList.add("tab-border");

  //   Grab Content Item
  const tabContentItem = document.querySelector(`#${this.id}-content`);

  //   Add Show Class
  tabContentItem.classList.add("show");
}

const removeBorder = () => {
  tabItems.forEach((item) => item.classList.remove("tab-border"));
};
const removeShow = () => {
  tabContentItems.forEach((item) => item.classList.remove("show"));
};

tabItems.forEach((item) => item.addEventListener("click", selectItem));
