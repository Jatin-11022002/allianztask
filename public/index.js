async function operands() {
  let operandsData = await fetch("http://127.0.0.1:8000/data", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      let cardHTML = "";
      data.forEach((element) => {
        cardHTML += `<div class="box" draggable="true" value=${element.value}>
            <span >${element.name}</span>
            <span class="close"onclick = "closeEvent(this)">❌</span>
        </div>`;
      });
      document.getElementById("operands").innerHTML = cardHTML;
    });

  eventListen();
}

operands();
let elem;

function rhsClick() {
  let number = prompt("What should be the RHS value");
  if (isNaN(number)) {
    alert("please enter valid number");
  } else {
    cardClick(number);
    //elem=
  }
}

function cardClick(value) {
  let card = `<div class="box operator" value='${value}'>
            <span>${value}</span>
            <span class="close" onclick = "closeEvent(this)" style ="visibility:visible;">❌</span>
        </div>`;
  result_div.innerHTML += card;
}

function eventListen() {
  let cards = document.getElementsByClassName("box");
  for (const card of cards) {
    card.addEventListener("dragstart", (e) => {
      elem = e.target.cloneNode(true);
    });
  }
}

const result_div = document.getElementById("result-div");

result_div.addEventListener("drop", (e) => {
  const closeBtn = elem.querySelector(".close");
  closeBtn.style = "visibility:visible";
  result_div.appendChild(elem);
});
result_div.addEventListener("dragover", (e) => {
  e.preventDefault();
});

function closeEvent(e) {
  result_div.removeChild(e.parentNode);
}
function evaluate1() {
  let childList = [...result_div.getElementsByClassName("box")];

  let expr = "";
  childList.forEach((child) => {
    expr += child.getAttribute("value");
  });

  try {
    alert(eval(expr));
  } catch (error) {
    alert("please check expression");
  }
}
