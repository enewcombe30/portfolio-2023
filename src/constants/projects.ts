import { projects } from "../types/type";
import { getImagePath } from "../utils/paths";

export const myProjects: projects = {
  projects: [
    {
      name: "flashPos",
      label: "Flash POS",
      logo: getImagePath("/images/flashPosHome.png"),
      link: "https://github.com/enewcombe30/flash-pos",
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
  ],
};
