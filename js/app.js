const api = "https://jsonplaceholder.typicode.com/todos";
const request = new XMLHttpRequest();
let data = [];
request.addEventListener("readystatechange", () => {
  if ((request.readyState == 4) & (request.status == 200)) {
    data = JSON.parse(request.responseText);
    addCard(data);
  } else if (request.readyState == 4) {
    console.log("ERROR");
  } else {
    console.log("Loading...");
  }
});
request.open("get", api);
request.send();
const ul = document.querySelector("ul");
let radioValue;

function addCard(data) {
  let result = [];
  switch (radioValue) {
    case "true":
      result = data.filter((item) => item.completed);
      break;
    case "false":
      result = data.filter((item) => !item.completed);
      break;
    default:
      result = data;
      break;
  }
  result.forEach((todo, index) => {
    ul.innerHTML += `<li><h3>ID:${todo.id}</h3><h4>${
      todo.completed ? "true" : "false"
    }</h4><p>${todo.title}<p></li>`;
  });
}
const getValue = function (radio) {
  ul.innerHTML = "";
  radioValue = radio.value;
  addCard(data);
};
