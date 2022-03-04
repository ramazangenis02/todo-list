const ui = (() => {
  //Open and close mobile bar function
  const openMobileBar = () => {
    const mobileBar = document.querySelector(".mobile-bar");
    const sidebarContainer = document.querySelector(".sidebar-container");
    mobileBar.addEventListener("click", () => {
      if (!sidebarContainer.classList.contains("active-sidebar")) {
        sidebarContainer.classList.add("active-sidebar");
        document.body.classList.add("active-sidebar-background");
      } else {
        sidebarContainer.classList.remove("active-sidebar");
        document.body.classList.remove("active-sidebar-background");
      }
    });
  };

  //Projects stuff function
  const projectsStuff = () => {
    //Show projects add and trash icon
    const sidebarContainer = document.querySelector(".sidebar-container");
    const addIcon = document.querySelector(".fa-plus");

    const addedProjectAll = document.querySelectorAll(".added-project");
    const trashIcon = document.querySelector(".fa-trash-alt");
    sidebarContainer.addEventListener("mouseover", () => {
      addIcon.classList.add("active-add-icon");
    });

    sidebarContainer.addEventListener("mouseout", () => {
      addIcon.classList.remove("active-add-icon");
    });

    //TEST AREA
    addedProjectAll.forEach(e => {
      e.addEventListener("mouseover", () => {
        e.firstElementChild.classList.add("active-trash-icon");
        console.log(e);
      });

      e.addEventListener("mouseout", () => {
        e.firstElementChild.classList.remove("active-trash-icon");
      });
    });
    //TEST AREA

    //When click change projects chevron icon
    const projectsWrapper = document.querySelector(".projects-wrapper");
    const projectsChevron = document.querySelector(".projects-chevron");
    const sidebarProjectsContainer = document.querySelector(
      ".sidebar-projects-container"
    );
    let projectStatus = false;
    let checkClick = false;

    addIcon.addEventListener("click", () => {
      checkClick = true;
    });

    projectsWrapper.addEventListener("click", () => {
      if (projectStatus == false && checkClick == false) {
        projectStatus = true;
        projectsChevron.classList.remove("fa-chevron-down");
        projectsChevron.classList.add("fa-chevron-right");
        sidebarProjectsContainer.style.marginLeft = "35px";
      } else if (projectStatus == true && checkClick == false) {
        projectStatus = false;
        projectsChevron.classList.remove("fa-chevron-right");
        projectsChevron.classList.add("fa-chevron-down");
        sidebarProjectsContainer.style.marginLeft = "30px";
      }
      checkClick = false;
    });

    //Show projects modal function
    const addProjectsModalContainer = document.querySelector(
      ".add-projects-modal-container"
    );
    const headerContainer = document.querySelector(".header-container");
    addIcon.addEventListener("click", () => {
      addProjectsModalContainer.style.display = "flex";
      headerContainer.style.pointerEvents = "none";
    });
    if (addProjectsModalContainer.style.display == "flex") {
    }

    //Show or Close color picker area
    const colorPickerArea = document.querySelector(".color-picker-area");
    const colorWrapper = document.querySelector(".color-wrapper");

    colorWrapper.addEventListener("click", () => {
      if (colorPickerArea.style.display == "block") {
        colorPickerArea.style.display = "none";
      } else {
        colorPickerArea.style.display = "block";
      }
    });

    document.addEventListener("click", e => {
      if (!e.target.matches(".color-wrapper")) {
        colorPickerArea.style.display = "none";
      }
    });

    //Change color pick to input color
    const colorPick = document.querySelector(".color-pick");
    const colorPickerRed = document.querySelector(".color-picker-red");
    const colorPickerBlue = document.querySelector(".color-picker-blue");
    const colorPickerYellow = document.querySelector(".color-picker-yellow");
    const colorPickerPurple = document.querySelector(".color-picker-purple");
    const colorPickerGreen = document.querySelector(".color-picker-green");
    const colorPickerSienna = document.querySelector(".color-picker-sienna");
    const colorPickerCyan = document.querySelector(".color-picker-cyan");
    const colorPickerSilver = document.querySelector(".color-picker-silver");
    const colorPickerBlack = document.querySelector(".color-picker-black");

    colorPickerRed.addEventListener("click", () => {
      colorPick.style.setProperty("--black", "#ff0000");
      colorPick.innerHTML = "Red";
    });
    colorPickerBlue.addEventListener("click", () => {
      colorPick.style.setProperty("--black", "#0000ff");
      colorPick.innerHTML = "Blue";
    });
    colorPickerYellow.addEventListener("click", () => {
      colorPick.style.setProperty("--black", "#ffff00");
      colorPick.innerHTML = "Yellow";
    });
    colorPickerPurple.addEventListener("click", () => {
      colorPick.style.setProperty("--black", "#800080");
      colorPick.innerHTML = "Purple";
    });
    colorPickerGreen.addEventListener("click", () => {
      colorPick.style.setProperty("--black", "#008000");
      colorPick.innerHTML = "Green";
    });
    colorPickerSienna.addEventListener("click", () => {
      colorPick.style.setProperty("--black", "#a0522d");
      colorPick.innerHTML = "Sienna";
    });
    colorPickerCyan.addEventListener("click", () => {
      colorPick.style.setProperty("--black", "#00ffff");
      colorPick.innerHTML = "Cyan";
    });
    colorPickerSilver.addEventListener("click", () => {
      colorPick.style.setProperty("--black", "#c0c0c0");
      colorPick.innerHTML = "Silver";
    });
    colorPickerBlack.addEventListener("click", () => {
      colorPick.style.setProperty("--black", "#000");
      colorPick.innerHTML = "Black";
    });

    //Cancel and add buttons functions
    const cancelBtn = document.querySelector(".cancel-btn");
    const addBtn = document.querySelector(".add-btn");
    const addProjectInput = document.querySelector(".add-projects-input");

    const addedProjectWrapperFirst = document.querySelector(
      ".added-projects-wrapper"
    );
    cancelBtn.addEventListener("click", () => {
      addProjectsModalContainer.style.display = "none";
      headerContainer.style.pointerEvents = "all";
      resetInput();
    });

    addProjectInput.addEventListener("keyup", () => {
      if (addProjectInput.value.length > 0) {
        addBtn.style.opacity = "1";
        addBtn.style.pointerEvents = "all";
      }
    });

    addProjectInput.addEventListener("keyup", () => {
      if (addProjectInput.value.length === 0) {
        addBtn.style.opacity = "0.5";
        addBtn.style.pointerEvents = "none";
      }
    });

    class Project {
      constructor(name) {
        this.name = name;
      }
    }

    let projectsList = [];

    function createProject() {
      const addedProject = document.createElement("li");
      const trashIconCreate = document.createElement("i");
      // trashIconCreate.classList.add("fas");
      // trashIconCreate.classList.add("fa-trash-alt");
      trashIconCreate.classList.add("fas");
      trashIconCreate.classList.add("fa-trash-alt");
      addedProject.classList.add("added-project");
      let proje = new Project(addProjectInput.value);
      projectsList.push(proje);
      let last = projectsList.length - 1;
      addedProject.innerHTML = projectsList[last].name;
      addedProject.appendChild(trashIconCreate);
      addedProjectWrapperFirst.appendChild(addedProject);
    }

    addBtn.addEventListener("click", () => {
      console.log(colorPick.innerHTML);
      addProjectsModalContainer.style.display = "none";
      headerContainer.style.pointerEvents = "all";
      createProject();
      resetInput();
    });

    //Reset Input
    const resetInput = () => {
      addProjectInput.value = "";
      colorPick.style.setProperty("--black", "#000");
      colorPick.innerHTML = "Black";
    };

    //Show and hide projects
    const addedProjectsContainer = document.querySelector(
      ".added-projects-container"
    );
    projectsWrapper.addEventListener("click", () => {
      if (projectsChevron.classList.contains("fa-chevron-down")) {
        addedProjectsContainer.style.display = "block";
      } else if (projectsChevron.classList.contains("fa-chevron-right")) {
        addedProjectsContainer.style.display = "none";
      }
    });

    //When click trash icon delete to project
    const addedProjectWrapper = document.querySelector(
      ".added-projects-wrapper"
    );
    const trashIconAll = document.querySelectorAll(".fa-trash-alt");
    trashIconAll.forEach(e => {
      e.addEventListener("click", () => {
        addedProjectWrapper.removeChild(e.parentElement);
      });
    });
  };

  const smallStuff = () => {
    //When click add task section change border color
    const addTaskSelect = document.querySelector(".add-task-select");
    addTaskSelect.addEventListener("click", () => {
      addTaskSelect.style.borderColor = "#606470";
    });

    document.addEventListener("click", e => {
      if (!e.target.parentElement.matches(".add-task-select")) {
        addTaskSelect.style.borderColor = "#cecece";
      }
    });

    //When click add task icon opened add task select
    const addTask = document.querySelectorAll(".add-task");
    const addTaskSelectAll = document.querySelectorAll(".add-task-select");

    addTask.forEach(e => {
      e.addEventListener("click", () => {
        addTaskSelectAll.forEach(e => {
          e.style.display = "block";
        });
        e.style.display = "none";
      });
    });

    //Task add and cancel buttons function
    const taskCancelBtn = document.querySelectorAll(".task-cancel-btn");

    const nameTextInput = document.querySelectorAll(".name-text-input");
    const descTextInput = document.querySelectorAll(".desc-text-input");

    taskCancelBtn.forEach(e => {
      e.addEventListener("click", () => {
        addTask.forEach(e => {
          e.style.display = "initial";
        });
        addTaskSelectAll.forEach(e => {
          e.style.display = "none";
        });
        nameTextInput.forEach(e => {
          e.value = "";
        });

        descTextInput.forEach(e => {
          e.value = "";
        });
      });
    });
  };

  return { openMobileBar, projectsStuff, smallStuff };
})();

export default ui;
