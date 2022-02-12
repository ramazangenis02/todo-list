const inboxFunction = () => {
  const inboxWrapper = document.querySelector(".inbox-wrapper");
  const todayWrapper = document.querySelector(".today-wrapper");
  const weekWrapper = document.querySelector(".week-wrapper");

  const inboxContainer = document.querySelector(".inbox-container");
  const todayContainer = document.querySelector(".today-container");
  const thisweekContainer = document.querySelector(".thisweek-container");

  inboxWrapper.addEventListener("click", () => {
    if (
      todayWrapper.classList.contains("default-active") ||
      weekWrapper.classList.contains("default-active")
    ) {
      inboxWrapper.classList.add("default-active");
      todayWrapper.classList.remove("default-active");
      weekWrapper.classList.remove("default-active");

      inboxContainer.style.display = "flex";
      todayContainer.style.display = "none";
      thisweekContainer.style.display = "none";
    }
  });
};

export default inboxFunction;
