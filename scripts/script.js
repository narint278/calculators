const lightTheme = "styles/light.css";
const darkTheme = "styles/dark.css";
const sunIcon = "fas fa-sun";
const moonIcon = "fas fa-moon";
const themeIcon = document.getElementById("theme-icon");
const res = document.getElementById("result");

function calculate(value) {
  const calculatedValue = eval(value || null);
  if (isNaN(calculatedValue)) {
    res.value = "Can't divide 0 with 0";
    setTimeout(() => {
      res.value = "";
    }, 1300);
  } else {
    res.value = calculatedValue;
  }
}

// Swaps the stylesheet to achieve dark mode.
function changeTheme() {
    const theme = document.getElementById("theme");
    const icon = document.getElementById("theme-icon");

    if (theme.getAttribute("href") === "styles/dark.css") {
        theme.setAttribute("href", "styles/light.css");
        icon.classList.remove("bxs-moon");
        icon.classList.add("bxs-sun");
    } else {
        theme.setAttribute("href", "styles/dark.css");
        icon.classList.remove("bxs-sun");
        icon.classList.add("bxs-moon");
    }
}

// Displays entered value on screen.
function liveScreen(enteredValue) {
  if (!res.value) {
    res.value = "";
  }
  res.value += enteredValue;
}

// adding event handler on the document to handle keyboard inputs
document.addEventListener("keydown", keyboardInputHandler);

// function to handle keyboard inputs
function keyboardInputHandler(e) {
  e.preventDefault();
  if (e.key >= "0" && e.key <= "9") {
    liveScreen(e.key);
  }

  if (["+", "-", "*", "/"].includes(e.key)) {
    liveScreen(e.key);
  }

  if (e.key === ".") {
    liveScreen(".");
  }

  if (e.key === "Enter") {
    calculate(res.value);
  }

  if (e.key === "Backspace") {
    res.value = res.value.slice(0, -1);
  }
}
