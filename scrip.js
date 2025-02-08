"use strict";
//ẩn hiện khi nhập email
const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const formContainer = document.querySelector(".form-container");
const infContainer = document.querySelector(".inf-container");
const emailInform = document.getElementById("Email-inform");
const submit = document.querySelector(".submit");
const errorMessage = document.getElementById("error-message");

submit.addEventListener("click", function (event) {
  event.preventDefault();
  const emailInput = emailInform.value;
  console.log(emailInput);
  if (regex.test(emailInput)) {
    formContainer.classList.add("hide");
    infContainer.classList.remove("hide");
  } else {
    errorMessage.classList.remove("hide");
  }
});
//phần thông tin nghề nghiệp
const jobInformation = document.querySelectorAll(".job");
const viewMore = document.querySelectorAll(".view-more");
console.log(viewMore.length);
const viewLess = document.querySelectorAll(".view-less");
console.log(viewLess.length);
const sectionContent = document.querySelectorAll(".section-content");
console.log(sectionContent.length);
function firstSetting() {
  for (let i = 0; i < jobInformation.length; i++) {
    const job = jobInformation[i];
    const viewMores = viewMore[i];
    job.addEventListener("mouseenter", function () {
      viewMores.classList.remove("hiden");
    });
    job.addEventListener("mouseleave", function () {
      viewMores.classList.add("hiden");
    });
  }
}
firstSetting();

for (let i = 0; i < sectionContent.length; i++) {
  const sectionContents = sectionContent[i];
  const More = viewMore[i];
  const Less = viewLess[i];
  const job = jobInformation[i];
  More.addEventListener("click", function () {
    sectionContents.classList.remove("hide");
    Less.classList.remove("hiden");
    More.classList.add("hide");
  });
  Less.addEventListener("click", function () {
    sectionContents.classList.add("hide");
    Less.classList.add("hiden");
    More.classList.remove("hide");
    firstSetting();
  });
}
