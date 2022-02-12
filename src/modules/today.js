const todayFunction = () => {
  const inboxWrapper = document.querySelector(".inbox-wrapper");
  const todayWrapper = document.querySelector(".today-wrapper");
  const weekWrapper = document.querySelector(".week-wrapper");

  const inboxContainer = document.querySelector(".inbox-container");
  const todayContainer = document.querySelector(".today-container");
  const thisweekContainer = document.querySelector(".thisweek-container");

  todayWrapper.addEventListener("click", () => {
    if (
      inboxWrapper.classList.contains("default-active") ||
      weekWrapper.classList.contains("default-active")
    ) {
      todayWrapper.classList.add("default-active");
      inboxWrapper.classList.remove("default-active");
      weekWrapper.classList.remove("default-active");

      todayContainer.style.display = "flex";
      inboxContainer.style.display = "none";
      thisweekContainer.style.display = "none";
    }
  });
};

export default todayFunction;
