document.addEventListener("keydown", function (e) {
  console.log(e.keyCode);
  // 123 = F12
  // 224 = Command
  // 82 = R
  // 83 = S
  if (e.ctrlKey || e.keyCode === 80 || e.keyCode === 123 || e.keyCode === 83) {
    e.preventDefault();
    return false;
  } else if (e.keyCode === 82) {
    e.preventDefault();
    window.top.postMessage(
      {
        event: "openPopupClose",
        value: 1,
      },
      "*"
    );
  }
});
document.addEventListener("cut", function (e) {
  alert("!!!!!!!!!!");
  e.preventDefault();
  return false;
});
document.addEventListener("copy", function (e) {
  alert("!!!!!!!!!!");
  e.preventDefault();
  return false;
});
document.addEventListener("selectstart", function (event) {
  event.preventDefault();
  return false;
});
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
  return false;
});
