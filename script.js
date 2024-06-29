const element = document.getElementsByClassName("element")[0].innerText
const text = document.getElementsByClassName("text")[0]


 const circleText = element.split("").map((letter, i) => {
    return `<span style="transform: rotate(${i * (360 / element.length)}deg)" class="letter">${letter}</span>`;
  }).join("");

  text.innerHTML = circleText;

  console.log(circleText)