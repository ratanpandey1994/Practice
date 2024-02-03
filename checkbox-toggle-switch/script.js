document.addEventListener("DOMContentLoaded", function () {
      const checkboxSwitcher = document.querySelector("input[type=checkbox]");
      const details = document.querySelector(".details");
      checkboxSwitcher.addEventListener("change", function (event) {
        if (event.target.checked) {
          details.classList.add('tokens-selected');
        } else {
          details.classList.remove('tokens-selected');
        }
      });
  },
  false
);