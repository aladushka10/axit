document.addEventListener("DOMContentLoaded", function () {
  const tabButtons = document.querySelectorAll(".tabs-button")
  const tabContents = document.querySelectorAll(".tabs-content")

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Удаляем активный класс со всех кнопок и контента
      tabButtons.forEach((btn) => btn.classList.remove("tabs-button-active"))
      tabContents.forEach((content) => content.classList.remove("active"))

      // Добавляем активный класс на выбранную кнопку и контент
      button.classList.add("tabs-button-active")
      const tabIndex = button.getAttribute("data-tab")
      document
        .querySelector(`.tabs-content[data-content="${tabIndex}"]`)
        .classList.add("active")
    })
  })
})
