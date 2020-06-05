import { OperationCanceledException } from "typescript";

class Abc extends OperationCanceledException {
  constructor(private a = 2) {
    super();
  }

  render() {
    this.a = 1;
  }
}

const btn = document.getElementById("btn");
let count: number = 0;
let isEnabled = false;
const countText = "Count";
const object = {
  test: 1,
  test2: () => 2,
};

type ObjectType = typeof object;

function render() {
  btn.innerText = `${countText}: ${count}`;
}

btn.addEventListener("click", () => {
  // Count from 1 to 10.
  if (isEnabled && count < 10) {
    count += 1;
    render();
  }
});
