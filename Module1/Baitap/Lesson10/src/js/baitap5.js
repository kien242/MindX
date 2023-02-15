function caculator() {
  x = document.getElementById("numberOne").value;
  console.log(x);
  y = document.getElementById("numberTwo").value;
  console.log(y);
  if (x === "" && y === "") {
    document.getElementById("warningNumber").innerHTML = "Chưa nhập cả hai số";
  } else if (y === "") {
    document.getElementById("warningNumber").innerHTML = "Chưa nhập số thứ hai";
  } else if (x === "") {
    document.getElementById("warningNumber").innerHTML = "Chưa nhập số thứ nhất";
  }
  operator = checkOperator();
  if (operator === "none") {
    document.getElementById("warningOperator").innerHTML =
      "Chưa chọn phép tính";
  }
  z = eval(`${x} ${checkOperator()} ${y}`);
    console.log(z);
    document.getElementById("output").placeholder = z;
}

function checkOperator() {
  let operator;
  if (document.getElementById("plus").checked) {
    operator = "+";
    document.getElementById("warning").innerHTML = "";
  } else if (document.getElementById("minus").checked) {
    operator = "-";
    document.getElementById("warning").innerHTML = "";
  } else if (document.getElementById("multiply").checked) {
    operator = "*";
    document.getElementById("warning").innerHTML = "";
  } else if (document.getElementById("divider").checked) {
    operator = "/";
    document.getElementById("warning").innerHTML = "";
  } else {
    operator = "none";
  }
  return operator;
}
