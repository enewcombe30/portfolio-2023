import { projects } from "../../../types/type";
import fernImage from "../../../images/fernLogo.png";

export const myProjects: projects = {
  projects: [
    {
      screenshots: [
        { name: "image1", image: "Image 1" },
        { name: "image2", image: "Image 2" },
      ],
      logo: { name: "fern", label: "fern.ai", logo: fernImage },
      projectBlurb: "This is the blurb for styling purposes",
      detail: [
        {
          name: "detail1",
          label: "Detail 1",
          description: [{ line: "detail here" }, { line: "detail here" }],
        },
        {
          name: "detail2",
          label: "Detail 2",
          description: [{ line: "detail here" }, { line: "detail here" }],
        },
      ],
    },
    // {
    //   screenshots: [{ name: "", image: "" }],
    //   logo: { name: "", logo: "" },
    //   detail: [{ name: "", label: "", description: [{line: ''},{line: ""}] }],
    // },
  ],
};
