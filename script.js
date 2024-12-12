let btn = document.getElementById("btn");
let text = document.getElementById("text");
let result = document.getElementById("result");

btn.onclick = function () {
  if (isPalindrome(text.value)) {
    result.innerHTML = "<h1>It is a palindrome!</h1>";
  } else {
    result.innerHTML = "<h1>It is not a palindrome.</h1>";
  }

  remove();
};
function remove() {
  text.value = "";
}
function isPalindrome(text) {

  const normalizedText = text.toLowerCase().replace(/[^a-z0-9]/g, "");


  const reversedText = normalizedText.split("").reverse().join("");

  return normalizedText === reversedText;
}
