import ui from "./modules/ui";
import todayFunction from "./modules/today";
import inboxFunction from "./modules/inbox";
import thisweekFunction from "./modules/thisweek";
import projectFunc from "./modules/projects";

//Open and close mobile bar
ui.openMobileBar();

//Projects stuff
ui.projectsStuff();

//Small stuff function
ui.smallStuff();

//Inbox function
inboxFunction();

//Today function
todayFunction();

//Thisweek function
thisweekFunction();

//Projects function
projectFunc();
