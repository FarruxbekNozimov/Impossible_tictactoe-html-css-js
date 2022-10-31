window.addEventListener("DOMContentLoaded", function () {
  let b1 = document.getElementById("b1"),
    b2 = document.getElementById("b2"),
    b3 = document.getElementById("b3"),
    b4 = document.getElementById("b4"),
    b5 = document.getElementById("b5"),
    b6 = document.getElementById("b6"),
    b7 = document.getElementById("b7"),
    b8 = document.getElementById("b8"),
    b9 = document.getElementById("b9"),
    b = document.getElementById("b");
  let w1 = document.getElementById("w1"),
    w2 = document.getElementById("w2"),
    w3 = document.getElementById("w3"),
    w4 = document.getElementById("w4"),
    w5 = document.getElementById("w5"),
    w6 = document.getElementById("w6"),
    w7 = document.getElementById("w7"),
    w8 = document.getElementById("w8");
  let XorO = document.getElementById("win");
  let Result = document.getElementById("winner");
  let btns = [b, b1, b2, b3, b4, b5, b6, b7, b8, b9];
  let reset = document.getElementById("reset");
  playGame();

  function playGame() {
    for (let i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () {
        if (
          btns[i].innerHTML != "X" &&
          btns[i].innerHTML == "" &&
          btns[i].innerHTML != "O"
        ) {
          if (btns[i].innerHTML == "") {
            btns[i].innerHTML = "X";
          }
          botsMove();
        }
        if (checkWin() != -1) {
          btnsDisabled();
        }
      });
    }
  }
  function botsMove() {
    if (
      btns[5].innerHTML == "" &&
      ((btns[1].innerHTML == btns[9].innerHTML && btns[1].innerHTML == "O") ||
        (btns[3].innerHTML == btns[7].innerHTML && btns[3].innerHTML == "O") ||
        (btns[6].innerHTML == btns[4].innerHTML && btns[6].innerHTML == "O") ||
        btns[2].innerHTML == btns[8].innerHTML)
    ) {
      btns[5].innerHTML = "O";
    } else if (
      btns[1].innerHTML == "" &&
      ((btns[2].innerHTML == btns[3].innerHTML && btns[2].innerHTML == "O") ||
        (btns[7].innerHTML == btns[4].innerHTML && btns[7].innerHTML == "O") ||
        (btns[9].innerHTML == btns[5].innerHTML && btns[9].innerHTML == "O"))
    ) {
      btns[1].innerHTML = "O";
    } else if (
      btns[2].innerHTML == "" &&
      ((btns[1].innerHTML == btns[3].innerHTML && btns[1].innerHTML == "O") ||
        (btns[8].innerHTML == btns[5].innerHTML && btns[8].innerHTML == "O"))
    ) {
      btns[2].innerHTML = "O";
    } else if (
      btns[3].innerHTML == "" &&
      ((btns[1].innerHTML == btns[2].innerHTML && btns[1].innerHTML == "O") ||
        (btns[9].innerHTML == btns[6].innerHTML && btns[9].innerHTML == "O") ||
        (btns[7].innerHTML == btns[5].innerHTML && btns[7].innerHTML == "O"))
    ) {
      btns[3].innerHTML = "O";
    } else if (
      btns[4].innerHTML == "" &&
      ((btns[1].innerHTML == btns[7].innerHTML && btns[1].innerHTML == "O") ||
        (btns[5].innerHTML == btns[6].innerHTML && btns[5].innerHTML == "O"))
    ) {
      btns[4].innerHTML = "O";
    } else if (
      btns[6].innerHTML == "" &&
      ((btns[3].innerHTML == btns[9].innerHTML && btns[3].innerHTML == "O") ||
        (btns[5].innerHTML == btns[4].innerHTML && btns[5].innerHTML == "O"))
    ) {
      btns[6].innerHTML = "O";
    } else if (
      btns[7].innerHTML == "" &&
      ((btns[1].innerHTML == btns[4].innerHTML && btns[1].innerHTML == "O") ||
        (btns[3].innerHTML == btns[5].innerHTML && btns[3].innerHTML == "O") ||
        (btns[8].innerHTML == btns[9].innerHTML && btns[8].innerHTML == "O"))
    ) {
      btns[7].innerHTML = "O";
    } else if (
      btns[8].innerHTML == "" &&
      ((btns[2].innerHTML == btns[5].innerHTML && btns[2].innerHTML == "O") ||
        (btns[7].innerHTML == btns[9].innerHTML && btns[7].innerHTML == "O"))
    ) {
      btns[8].innerHTML = "O";
    } else if (
      btns[9].innerHTML == "" &&
      ((btns[3].innerHTML == btns[6].innerHTML && btns[3].innerHTML == "O") ||
        (btns[1].innerHTML == btns[5].innerHTML && btns[1].innerHTML == "O") ||
        (btns[7].innerHTML == btns[8].innerHTML && btns[7].innerHTML == "O"))
    ) {
      btns[9].innerHTML = "O";
    } else if (
      btns[5].innerHTML == "" &&
      ((btns[1].innerHTML == btns[9].innerHTML && btns[1].innerHTML == "X") ||
        (btns[3].innerHTML == btns[7].innerHTML && btns[3].innerHTML == "X") ||
        (btns[6].innerHTML == btns[4].innerHTML && btns[6].innerHTML == "X") ||
        btns[2].innerHTML == btns[8].innerHTML)
    ) {
      btns[5].innerHTML = "O";
    } else if (
      btns[1].innerHTML == "" &&
      ((btns[2].innerHTML == btns[3].innerHTML && btns[2].innerHTML == "X") ||
        (btns[7].innerHTML == btns[4].innerHTML && btns[7].innerHTML == "X") ||
        (btns[9].innerHTML == btns[5].innerHTML && btns[9].innerHTML == "X"))
    ) {
      btns[1].innerHTML = "O";
    } else if (
      btns[2].innerHTML == "" &&
      ((btns[1].innerHTML == btns[3].innerHTML && btns[1].innerHTML == "X") ||
        (btns[8].innerHTML == btns[5].innerHTML && btns[8].innerHTML == "X"))
    ) {
      btns[2].innerHTML = "O";
    } else if (
      btns[3].innerHTML == "" &&
      ((btns[1].innerHTML == btns[2].innerHTML && btns[1].innerHTML == "X") ||
        (btns[9].innerHTML == btns[6].innerHTML && btns[9].innerHTML == "X") ||
        (btns[7].innerHTML == btns[5].innerHTML && btns[7].innerHTML == "X"))
    ) {
      btns[3].innerHTML = "O";
    } else if (
      btns[4].innerHTML == "" &&
      ((btns[1].innerHTML == btns[7].innerHTML && btns[1].innerHTML == "X") ||
        (btns[5].innerHTML == btns[6].innerHTML && btns[5].innerHTML == "X"))
    ) {
      btns[4].innerHTML = "O";
    } else if (
      btns[6].innerHTML == "" &&
      ((btns[3].innerHTML == btns[9].innerHTML && btns[3].innerHTML == "X") ||
        (btns[5].innerHTML == btns[4].innerHTML && btns[5].innerHTML == "X"))
    ) {
      btns[6].innerHTML = "O";
    } else if (
      btns[7].innerHTML == "" &&
      ((btns[1].innerHTML == btns[4].innerHTML && btns[1].innerHTML == "X") ||
        (btns[3].innerHTML == btns[5].innerHTML && btns[3].innerHTML == "X") ||
        (btns[8].innerHTML == btns[9].innerHTML && btns[8].innerHTML == "X"))
    ) {
      btns[7].innerHTML = "O";
    } else if (
      btns[8].innerHTML == "" &&
      ((btns[2].innerHTML == btns[5].innerHTML && btns[2].innerHTML == "X") ||
        (btns[7].innerHTML == btns[9].innerHTML && btns[7].innerHTML == "X"))
    ) {
      btns[8].innerHTML = "O";
    } else if (
      btns[9].innerHTML == "" &&
      ((btns[3].innerHTML == btns[6].innerHTML && btns[3].innerHTML == "X") ||
        (btns[1].innerHTML == btns[5].innerHTML && btns[1].innerHTML == "X") ||
        (btns[7].innerHTML == btns[8].innerHTML && btns[7].innerHTML == "X"))
    ) {
      btns[9].innerHTML = "O";
    } else if (
      btns[1].innerHTML == "" &&
      btns[2].innerHTML == "X" &&
      btns[7].innerHTML == "X" &&
      btns[8].innerHTML == "O"
    ) {
      btns[1].innerHTML = "O";
    } else if (
      btns[1].innerHTML == "" &&
      btns[2].innerHTML == "X" &&
      btns[9].innerHTML == "X" &&
      btns[8].innerHTML == "O"
    ) {
      btns[1].innerHTML = "O";
    } else if (
      btns[4].innerHTML == "" &&
      btns[7].innerHTML == "X" &&
      btns[2].innerHTML == "X" &&
      btns[5].innerHTML == "O"
    ) {
      btns[4].innerHTML = "O";
    } else if (
      btns[4].innerHTML == "" &&
      btns[9].innerHTML == "X" &&
      btns[2].innerHTML == "X" &&
      btns[5].innerHTML == "O"
    ) {
      btns[4].innerHTML = "O";
    } else if (
      btns[4].innerHTML == "" &&
      btns[6].innerHTML == "X" &&
      btns[8].innerHTML == "X" &&
      btns[9].innerHTML == "O"
    ) {
      btns[4].innerHTML = "O";
    } else if (
      btns[1].innerHTML == "" &&
      btns[8].innerHTML == "X" &&
      btns[6].innerHTML == "X" &&
      btns[7].innerHTML == "O"
    ) {
      btns[1].innerHTML = "O";
    } else if (
      btns[4].innerHTML == "" &&
      btns[9].innerHTML == "X" &&
      btns[7].innerHTML == "X" &&
      btns[8].innerHTML == "O" &&
      btns[5].innerHTML == "O"
    ) {
      btns[4].innerHTML = "O";
    } else if (
      btns[1].innerHTML == "" &&
      btns[2].innerHTML == "X" &&
      btns[4].innerHTML == "X" &&
      btns[8].innerHTML == "O"
    ) {
      btns[1].innerHTML = "O";
    } else if (
      btns[1].innerHTML == "" &&
      btns[2].innerHTML == "X" &&
      btns[6].innerHTML == "X" &&
      btns[8].innerHTML == "O"
    ) {
      btns[1].innerHTML = "O";
    } else if (
      btns[9].innerHTML == "" &&
      btns[4].innerHTML == "X" &&
      btns[2].innerHTML == "X" &&
      btns[7].innerHTML == "O"
    ) {
      btns[9].innerHTML = "O";
    } else if (
      btns[7].innerHTML == "" &&
      btns[6].innerHTML == "X" &&
      btns[2].innerHTML == "X" &&
      btns[9].innerHTML == "O"
    ) {
      btns[7].innerHTML = "O";
    } else if (
      btns[5].innerHTML == "" &&
      (btns[1].innerHTML == "X" ||
        btns[3].innerHTML == "X" ||
        btns[9].innerHTML == "X" ||
        btns[7].innerHTML == "X")
    ) {
      btns[5].innerHTML = "O";
    } else if (
      btns[7].innerHTML == "" &&
      (btns[5].innerHTML == "X" ||
        btns[4].innerHTML == "X" ||
        btns[8].innerHTML == "X")
    ) {
      btns[7].innerHTML = "O";
    } else if (btns[9].innerHTML == "" && btns[6].innerHTML == "X") {
      btns[9].innerHTML = "O";
    } else if (btns[8].innerHTML == "" && btns[2].innerHTML == "X") {
      btns[8].innerHTML = "O";
    } else if (
      btns[8].innerHTML == "" &&
      btns[7].innerHTML == "X" &&
      btns[3].innerHTML == "X" &&
      btns[5].innerHTML == "O"
    ) {
      btns[8].innerHTML = "O";
    } else if (
      btns[8].innerHTML == "" &&
      btns[1].innerHTML == "X" &&
      btns[9].innerHTML == "X" &&
      btns[5].innerHTML == "O"
    ) {
      btns[8].innerHTML = "O";
    } else if (
      btns[5].innerHTML == "" &&
      btns[4].innerHTML == "X" &&
      btns[8].innerHTML == "X" &&
      btns[7].innerHTML == "O"
    ) {
      btns[5].innerHTML = "O";
    } else if (
      btns[9].innerHTML == "" &&
      btns[4].innerHTML == "X" &&
      btns[8].innerHTML == "X" &&
      btns[7].innerHTML == "O" &&
      btns[3].innerHTML == "X" &&
      btns[5].innerHTML == "O"
    ) {
      btns[9].innerHTML = "O";
    } else if (
      btns[9].innerHTML == "" &&
      btns[5].innerHTML == "X" &&
      btns[3].innerHTML == "X" &&
      btns[7].innerHTML == "O"
    ) {
      btns[9].innerHTML = "O";
    } else {
      if (btns[1].innerHTML == "") {
        btns[1].innerHTML = "O";
      } else if (btns[2].innerHTML == "") {
        btns[2].innerHTML = "O";
      } else if (btns[3].innerHTML == "") {
        btns[3].innerHTML = "O";
      } else if (btns[4].innerHTML == "") {
        btns[4].innerHTML = "O";
      } else if (btns[5].innerHTML == "") {
        btns[5].innerHTML = "O";
      } else if (btns[6].innerHTML == "") {
        btns[6].innerHTML = "O";
      } else if (btns[7].innerHTML == "") {
        btns[7].innerHTML = "O";
      } else if (btns[8].innerHTML == "") {
        btns[8].innerHTML = "O";
      } else if (btns[9].innerHTML == "") {
        btns[9].innerHTML = "O";
      }
    }
  }

  function checkWin() {
    if (
      btns[1].innerHTML == btns[2].innerHTML &&
      btns[2].innerHTML == btns[3].innerHTML &&
      btns[3].innerHTML != ""
    ) {
      Result.style.display = "block";
      XorO.innerHTML = btns[3].innerHTML + " " + "is Winner";
      w1.style.display = "block";
      return 1;
    } else if (
      btns[4].innerHTML == btns[5].innerHTML &&
      btns[5].innerHTML == btns[6].innerHTML &&
      btns[6].innerHTML != ""
    ) {
      Result.style.display = "block";
      XorO.innerHTML = btns[6].innerHTML + " " + "is Winner";
      w2.style.display = "block";
      return 1;
    } else if (
      btns[7].innerHTML == btns[8].innerHTML &&
      btns[8].innerHTML == btns[9].innerHTML &&
      btns[9].innerHTML != ""
    ) {
      Result.style.display = "block";
      XorO.innerHTML = btns[9].innerHTML + " " + "is Winner";
      w3.style.display = "block";
      return 1;
    } else if (
      btns[1].innerHTML == btns[4].innerHTML &&
      btns[4].innerHTML == btns[7].innerHTML &&
      btns[7].innerHTML != ""
    ) {
      Result.style.display = "block";
      XorO.innerHTML = btns[7].innerHTML + " " + "is Winner";
      w4.style.display = "block";
      return 1;
    } else if (
      btns[2].innerHTML == btns[5].innerHTML &&
      btns[5].innerHTML == btns[8].innerHTML &&
      btns[8].innerHTML != ""
    ) {
      Result.style.display = "block";
      XorO.innerHTML = btns[8].innerHTML + " " + "is Winner";
      w5.style.display = "block";
      return 1;
    } else if (
      btns[3].innerHTML == btns[6].innerHTML &&
      btns[6].innerHTML == btns[9].innerHTML &&
      btns[9].innerHTML != ""
    ) {
      Result.style.display = "block";
      XorO.innerHTML = btns[9].innerHTML + " " + "is Winner";
      w6.style.display = "block";
      return 1;
    } else if (
      btns[1].innerHTML == btns[5].innerHTML &&
      btns[5].innerHTML == btns[9].innerHTML &&
      btns[9].innerHTML != ""
    ) {
      Result.style.display = "block";
      XorO.innerHTML = btns[9].innerHTML + " " + "is Winner";
      w7.style.display = "block";
      return 1;
    } else if (
      btns[3].innerHTML == btns[5].innerHTML &&
      btns[5].innerHTML == btns[7].innerHTML &&
      btns[7].innerHTML != ""
    ) {
      Result.style.display = "block";
      XorO.innerHTML = btns[7].innerHTML + " " + "is Winner";
      w8.style.display = "block";
      return 1;
    } else if (
      btns[1].innerHTML != "" &&
      btns[2].innerHTML != "" &&
      btns[3].innerHTML != "" &&
      btns[4].innerHTML != "" &&
      btns[5].innerHTML != "" &&
      btns[6].innerHTML != "" &&
      btns[7].innerHTML != "" &&
      btns[8].innerHTML != "" &&
      btns[9].innerHTML != ""
    ) {
      Result.style.display = "block";
      XorO.innerHTML = "TIE";
      return 0;
    } else {
      return -1;
    }
  }

  function btnsDisabled() {
    for (let i = 0; i < btns.length; i++) {
      btns[i].setAttribute("disabled", "");
    }
  }

  reset.addEventListener("click", function () {
    for (let i = 0; i < btns.length; i++) {
      btns[i].innerHTML = "";
    }
    Result.style.display = "none";
    w1.style.display = "none";
    w2.style.display = "none";
    w3.style.display = "none";
    w4.style.display = "none";
    w5.style.display = "none";
    w6.style.display = "none";
    w7.style.display = "none";
    w8.style.display = "none";
    b1.removeAttribute("disabled", "");
    b2.removeAttribute("disabled", "");
    b3.removeAttribute("disabled", "");
    b4.removeAttribute("disabled", "");
    b5.removeAttribute("disabled", "");
    b6.removeAttribute("disabled", "");
    b7.removeAttribute("disabled", "");
    b8.removeAttribute("disabled", "");
    b9.removeAttribute("disabled", "");
  });
});
