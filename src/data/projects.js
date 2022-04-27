import track from "./track.png";
import drafting from "./drafting.png";

export const projects = [
  {
    title: "Drafting Portfolio",
    description:
      "A portfolio website I built for my wife showcasing her work at school.",
    stack: ["React", "Bulma"],
    type: "Solo",
    image: drafting,
    live: "https://portfolio-kayla.herokuapp.com/",
    code: "",
  },
  {
    title: "Upcycle Montreal",
    description:
      "A web app that allows Montrealers to extend the life of discarded furniture by displaying their location on an interactive map.",
    stack: ["PostgreSQL", "Express", "React", "Node"],
    type: "Team work",
    image:"https://github.com/andres039/Upcycle-Cradle-Montreal/raw/master/frontend/public/images/demo.gif?raw=true",
    code: "https://github.com/andres039/Upcycle-Cradle-Montreal",
    live: "",
  },
  {
    title: "Scheduler-dashboard",
    description:
      "A web app that allows students to set up apointments with Mentors.",
    stack: ["React", "Storybook", "Cypress"],
    type: "Solo",
    image:
      "https://raw.githubusercontent.com/andres039/scheduler/main/docs/Main.png",
    code: "https://github.com/andres039/scheduler",
    live: "",
  },
  {
    title: "Track",
    description:
      "Track is an app that allows musicians to practice scales daily keeping a record of the speed achieved every day at the end of practice.",
    stack: ["Node", "Express", "Prisma", "React", "Bootstrap", "Bulma"],
    type: "Team work",
    image: track,
    code: "https://github.com/andres039/Track",
    live: "",
  },
];
