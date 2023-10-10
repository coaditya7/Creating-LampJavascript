function saklar(params) {
  let lampu = document.getElementById("lampu");
  if (params == "on") {
    lampu.src = "img/on.gif";
  }
  if (params == "off") {
    lampu.src = "img/off.gif";
  }
}