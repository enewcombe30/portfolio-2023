import { projects } from "../types/type";
import { getImagePath } from "../utils/paths";

export const myProjects: projects = {
  projects: [
    {
      name: "portfolio2021",
      label: "2021 Portfolio",
      logo: getImagePath("/images/portfolio-2021.png"),
      link: "https://enewcombe30.github.io/Portfolio-2021/",
      styles: "",
    },
    {
      name: "pairGame",
      label: "Pair Game",
      logo: getImagePath("/images/pairgameLogo.png"),
      link: "https://enewcombe30.github.io/Project-2-pair-game-2021/",
      styles: "",
    },
    {
      name: "localWeather",
      label: "Local Weather",
      logo: getImagePath("/images/Local weather thumbnail.png"),
      link: "https://enewcombe30.github.io/Local-Weather/",
      styles: "",
    },
    {
      name: "jellyBean",
      label: "Jelly Bean Wiki",
      logo: getImagePath("/images/Jelly Bean Screenshot.png"),
      link: "https://enewcombe30.github.io/jelly-bean/",
      styles: "",
    },
    {
      name: "boardHeroes",
      label: "Board Heroes",
      logo: getImagePath("/images/UnderConstruction.png"),
      link: "https://github.com/enewcombe30/board-heroes",
      styles: "line-through",
    },
  ],
};
