import { projects } from "../../../types/type";
import fernImage from "../../../images/fernLogo.png";
import pairGameLogo from "../../../images/pairgameLogo.png";
import portfolio2021 from "../../../images/portfolio-2021.png";
import underConstruction from "../../../images/UnderConstruction.png";
import localWeather from "../../../images/Local weather thumbnail.png";
import jellyBean from "../../../images/Jelly Bean Screenshot.png";

export const myProjects: projects = {
  projects: [
    {
      name: "fern",
      label: "Fern.ai",
      logo: fernImage,
      link: "https://www.meetfern.ai/",
      styles: "",
    },
    {
      name: "pairGame",
      label: "Pair Game",
      logo: pairGameLogo,
      link: "https://enewcombe30.github.io/Project-2-pair-game-2021/",
      styles: "",
    },
    {
      name: "portfolio2021",
      label: "Portfolio 2021",
      logo: portfolio2021,
      link: "https://enewcombe30.github.io/Portfolio-2021/",
      styles: "",
    },
    {
      name: "localWeather",
      label: "Local Weather",
      logo: localWeather,
      link: "https://enewcombe30.github.io/Local-Weather/",
      styles: "",
    },
    {
      name: "jellyBean",
      label: "Jelly Bean Wiki",
      logo: jellyBean,
      link: "https://enewcombe30.github.io/jelly-bean/",
      styles: "",
    },
    {
      name: "boardHeroes",
      label: "Board Heroes",
      logo: underConstruction,
      link: "https://github.com/enewcombe30/board-heroes",
      styles: "line-through",
    },
  ],
};
// {
//   screenshots: [{ name: "", image: "" }],
//   logo: { name: "", logo: "" },
//   detail: [{ name: "", label: "", description: [{line: ''},{line: ""}] }],
// },
