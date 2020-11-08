let count = 0;
let n1 = 0;
let i = 0;

const print = () => {
  let div = document.createElement("div");
  div.id = i + " sticky";
  document.getElementById("sticky").appendChild(div);
  document.getElementById(i.toString() + " sticky").innerHTML =
    "Sticky Keys Activated";

 

  i++;
};

const stickykeys = () => {
  let x = event.key;
  if (x === "Shift") {
    count++;
    if (count === 1) {
      n1 = Date.now();
    }
    let n2 = Date.now();
    if (count === 5 && n2 - n1 < 5000) {
      print();
      console.log("sticky keys activated");
    }
    count %= 5;
  }
};

document.addEventListener("keydown", () => stickykeys());
