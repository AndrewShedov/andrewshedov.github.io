document.addEventListener("DOMContentLoaded", function () {
  let callback_button = document.querySelector(".callback_button");
  let callback_window = document.querySelector(".callback_window");
  let callback_window_button_close = document.querySelector(
    ".callback_window_button_close"
  );
  let callback_wrap = document.querySelector(".callback_wrap");

  callback_button.addEventListener("click", (e) => {
    e.stopPropagation();
    animateDisplay(
      document.querySelector(".callback_wrap"),
      "active",
      "block",
      300
    );
    document.getElementsByClassName("callback_button")[0].style =
      "visibility: hidden";
    document.getElementsByClassName("callback_button")[0].style =
      "opacity: 0";
  });

  callback_window_button_close.addEventListener("click", (e) => {
    e.stopPropagation();
    animateDisplay(
      document.querySelector(".callback_wrap"),
      "active",
      "block",
      300
    );
    document.getElementsByClassName("callback_button")[0].style =
      "visibility: visible";
    document.getElementsByClassName("callback_button")[0].style =
      "opacity: 1";
  });

  // Tracking a click outside of a modal window
  document.addEventListener("click", (e) => {
    let target = e.target;
    let target_callback_window =
      target == callback_window || callback_window.contains(target);
    let target_callback_button = target == callback_button;
    let callback_wrap_active = callback_wrap.classList.contains("active");
    if (
      !target_callback_window &&
      !target_callback_button &&
      callback_wrap_active
    ) {
      animateDisplay(
        document.querySelector(".callback_wrap"),
        "active",
        "block",
        300
      );
      document.getElementsByClassName("callback_button")[0].style =
        "visibility: visible";
      document.getElementsByClassName("callback_button")[0].style =
        "opacity: 1";
    }
  });

  // Animation function
  function animateDisplay(target, animationClass, displayType, timeout) {
    let doneTimedDisplay = false,
      displaying = false;
    target.addEventListener("transitionend", function () {
      if (!target.classList.contains("active")) {
        target.style.display = "none";
      }
      doneTimedDisplay = true;
    });
    if (!target.style.display || target.style.display === "none") {
      displaying = true;
      target.style.display = displayType;
    } else {
      displaying = false;
    }
    setTimeout(function () {
      target.classList.toggle(animationClass);
      doneTimedDisplay = false;
    }, 10);
    if (!displaying) {
      setTimeout(function () {
        if (!doneTimedDisplay) {
          target.style.display = "none";
        }
        doneTimedDisplay = true;
      }, timeout);
    }
  }
});
