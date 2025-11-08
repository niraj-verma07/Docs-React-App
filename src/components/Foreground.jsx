import { useRef } from "react";
import Card from "./Card";

const Foreground = () => {
  const ref = useRef(null);
  const data = [
    {
      desc: "Front-end UI Kit including reusable components and icons.",
      filesize: "2.4MB",
      close: false,
      tag: {
        isOpen: true,
        tagTitle: "Design Assets",
        tagColor: "bg-green-900",
      },
    },
    {
      desc: "Comprehensive JavaScript cheat sheet for beginners.",
      filesize: "1.2MB",
      close: true,
      tag: {
        isOpen: false,
        tagTitle: "Download Now",
        tagColor: "bg-green-900",
      },
    },
    {
      desc: "Project documentation with setup guide and API reference.",
      filesize: "3.7MB",
      close: false,
      tag: { isOpen: true, tagTitle: "Docs", tagColor: "bg-indigo-900" },
    },
    {
      desc: "High-quality background images for web projects.",
      filesize: "5.8MB",
      close: true,
      tag: { isOpen: false, tagTitle: "Image Pack", tagColor: "bg-orange-900" },
    },
    {
      desc: "Latest version of backend code with bug fixes and improvements.",
      filesize: "8.1MB",
      close: false,
      tag: { isOpen: true, tagTitle: "Update", tagColor: "bg-red-900" },
    },
    {
      desc: "Minimalist PowerPoint template for tech presentations.",
      filesize: "4.5MB",
      close: true,
      tag: { isOpen: false, tagTitle: "Template", tagColor: "bg-teal-900" },
    },
    {
      desc: "Dataset containing 10k+ user behavior analytics records.",
      filesize: "15.3MB",
      close: false,
      tag: { isOpen: true, tagTitle: "Data File", tagColor: "bg-yellow-900" },
    },
    {
      desc: "Set of CSS animations and transitions for UI enhancement.",
      filesize: "700KB",
      close: true,
      tag: {
        isOpen: false,
        tagTitle: "Animation Kit",
        tagColor: "bg-pink-900",
      },
    },
    {
      desc: "Wireframe layout pack for Figma with responsive design grids.",
      filesize: "3.2MB",
      close: false,
      tag: {
        isOpen: true,
        tagTitle: "UI Wireframes",
        tagColor: "bg-purple-900",
      },
    },
    {
      desc: "Collection of vector illustrations for landing pages.",
      filesize: "6.9MB",
      close: true,
      tag: {
        isOpen: false,
        tagTitle: "Illustrations",
        tagColor: "bg-cyan-900",
      },
    },
  ];

  return (
    <>
      <div
        ref={ref}
        className=" fixed z-3 top-0 left-0 w-full h-full flex gap-10 flex-wrap p-5"
      >
        {data.map((item, index) => (
          <Card data={item} reference={ref} />
        ))}
      </div>
    </>
  );
};

export default Foreground;
