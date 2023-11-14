let repeat = true;

while (repeat) {
  let arithmeticActions = prompt(
    `What operation do you want to perform: division(div), addition(add), subtraction(sub), multiplication(mult)?`
  );

  if (
    arithmeticActions === "add" ||
    arithmeticActions === "div" ||
    arithmeticActions === "sub" ||
    arithmeticActions === "mult"
  ) {
    let check = false;
    let firstNum, secondNum, result, sign;

    do {
      firstNum = +prompt("Enter first number");
      secondNum = +prompt("Enter second number");

      if (
        typeof firstNum === "number" &&
        !isNaN(firstNum) &&
        typeof secondNum === "number" &&
        !isNaN(secondNum)
      ) {
        check = false;
      } else {
        alert(`Please enter valid numbers.`);
        check = true;
      }
    } while (check);

    switch (arithmeticActions) {
      case "add":
        sign = "+";
        result = firstNum + secondNum;
        break;
      case "sub":
        sign = "-";
        result = firstNum - secondNum;
        break;
      case "mult":
        sign = "*";
        result = firstNum * secondNum;
        break;
      case "div":
        sign = "/";
        result = firstNum / secondNum;
        break;
    }

    alert(`${firstNum} ${sign} ${secondNum} = ${result}`);
  } else {
    alert(`Please enter a valid operation.`);
    repeat = false;
  }
}
