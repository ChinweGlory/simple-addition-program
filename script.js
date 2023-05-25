function addNum() {
let first = parseInt(document.getElementById("first-input").value);
let second= parseInt(document.getElementById("second-input").value);
const result = document.getElementById("answer");
answer.value = first + second;
return result

}

btn.addEventListener('click', addNum);
