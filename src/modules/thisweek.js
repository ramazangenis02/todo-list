const thisweekFunction = () => {
  const inboxWrapper = document.querySelector(".inbox-wrapper");
  const todayWrapper = document.querySelector(".today-wrapper");
  const weekWrapper = document.querySelector(".week-wrapper");

  const inboxContainer = document.querySelector(".inbox-container");
  const todayContainer = document.querySelector(".today-container");
  const thisweekContainer = document.querySelector(".thisweek-container");

  weekWrapper.addEventListener("click", () => {
    if (
      inboxWrapper.classList.contains("default-active") ||
      todayWrapper.classList.contains("default-active")
    ) {
      weekWrapper.classList.add("default-active");
      inboxWrapper.classList.remove("default-active");
      todayWrapper.classList.remove("default-active");

      thisweekContainer.style.display = "flex";
      inboxContainer.style.display = "none";
      todayContainer.style.display = "none";
    }
  });
};

export default thisweekFunction;
